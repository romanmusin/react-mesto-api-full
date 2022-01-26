require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const { celebrate, Joi, errors } = require('celebrate');

const cors = require('cors');
const router = require('./routes');
const auth = require('./middlewares/auth');
const centralizedErrors = require('./middlewares/centralizedErrors');

const { isValidUrl } = require('./utils/methods');
const { requestLogger, errorLogger } = require('./middlewares/logger');
const { createUser, login } = require('./controllers/users');

const { PORT } = process.env || 3000;
const app = express();

mongoose.connect('mongodb://localhost:27017/mestodb');

app.use('*', cors({
  origin: [
    'http://romus.mesto.nomoredomains.work',
    'https://romus.mesto.nomoredomains.work',
    'localhost:3000',
  ],
  methods: ['OPTIONS', 'GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
  preflightContinue: false,
  optionsSuccessStatus: 204,
  allowedHeaders: ['Content-Type', 'origin', 'Authorization', 'Cookie'],
  exposedHeaders: ['Set-Cookie'],
  credentials: true,
}));

app.use(cookieParser());
app.use(express.json());

app.use(requestLogger);

app.get('/crash-test', () => {
  setTimeout(() => {
    throw new Error('Сервер сейчас упадёт');
  }, 0);
});

const newLocal = '^[a-zA-Z0-9]{8,}$';
app.post('/signup', celebrate({
  body: Joi.object().keys({
    name: Joi.string().default('Жак-Ив Кусто').min(2).max(30),
    about: Joi.string().default('Исследователь').min(2).max(30),
    avatar: Joi.string().custom(isValidUrl),
    email: Joi.string().required().email(),
    password: Joi.string()
      .required()
      .pattern(new RegExp(newLocal)),
  }),
}), createUser);

app.post('/signin', celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string()
      .required()
      .pattern(new RegExp(newLocal)),
  }),
}), login);

app.get('/logout', (req, res, next) => {
  res
  /*
    .cookie('jwt', '', {
      maxAge: -1,
      secure: true,
      sameSite: 'none',
    })
    */
    .clearCookie('jwt', {
      // maxAge: -1,
      secure: true,
      sameSite: 'none',
    })
    .send({ message: 'Выход совершен успешно' });
  next();
});

app.use(auth);

app.use(router);

app.use(errorLogger);

app.use(errors());

app.use(centralizedErrors);
app.listen(PORT, () => {
  console.log(`Запуск на порту ${PORT}`);
});
