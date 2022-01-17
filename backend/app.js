require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const { celebrate, Joi, errors } = require('celebrate');

const cors = require('cors');
const router = require('./routes/users');
const cardRouter = require('./routes/cards');
const centralizedErrors = require('./middlewares/centralizedErrors');
const auth = require('./middlewares/auth');
const { createUser, login } = require('./controllers/users');
const { isValidUrl } = require('./utils/methods');
const { requestLogger, errorLogger } = require('./middlewares/logger');

const { PORT } = process.env || 3000;
const app = express();

mongoose.connect('mongodb://localhost:27017/mestodb');

const options = {
  origin: [
    'http://localhost:5000',
    'http://romus.mesto.nomoredomains.work',
    'https://romus.mesto.nomoredomains.work',
  ],
  methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
  preflightContinue: false,
  optionsSuccessStatus: 204,
  allowedHeaders: ['Content-Type', 'origin', 'Authorization'],
  credentials: true,
};

app.use('*', cors(options));

app.use(cookieParser());
app.use(express.json());

app.use(requestLogger);

const newLocal = '^[a-zA-Z0-9]{8,}$';
app.post('/sign-up', celebrate({
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

app.post('/sign-in', celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string()
      .required()
      .pattern(new RegExp(newLocal)),
  }),
}), login);

app.use(auth);

app.use(router);
app.use(cardRouter);
app.use(errorLogger);

app.use(errors());

app.use(centralizedErrors);
app.listen(PORT, () => {
  console.log(`Запуск на порту ${PORT}`);
});
