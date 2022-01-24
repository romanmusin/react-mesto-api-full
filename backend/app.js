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

/*
const allowedCors = [
  'http://romus.mesto.nomoredomains.work',
  'https://romus.mesto.nomoredomains.work',
  'localhost:3000',
];

// eslint-disable-next-line consistent-return
app.use((req, res, next) => {
  // const { origin } = req.headers; // Сохраняем источник запроса в переменную origin
  // проверяем, что источник запроса есть среди разрешённых
  // if (allowedCors.includes(origin)) {
  // }
  res.header('Access-Control-Allow-Origin', '*');
  const { method } = req;

  const DEFAULT_ALLOWED_METHODS = 'GET,HEAD,PUT,PATCH,POST,DELETE';
  const requestHeaders = req.headers['access-control-request-headers'];
  if (method === 'OPTIONS') {
    // разрешаем кросс-доменные запросы любых типов (по умолчанию)
    res.header('Access-Control-Allow-Methods', DEFAULT_ALLOWED_METHODS);
    res.header('Access-Control-Allow-Headers', requestHeaders);
    return res.end();
  }

  next();
});
*/
app.use('*', cors({
  origin: [
    'http://romus.mesto.nomoredomains.work',
    'https://romus.mesto.nomoredomains.work',
    'localhost:3000',
  ],
  methods: ['OPTIONS', 'GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
  preflightContinue: false,
  optionsSuccessStatus: 204,
  allowedHeaders: ['Content-Type', 'origin', 'Authorization'],
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

app.use(auth);

app.use(router);

app.use(errorLogger);

app.use(errors());

app.use(centralizedErrors);
app.listen(PORT, () => {
  console.log(`Запуск на порту ${PORT}`);
});
