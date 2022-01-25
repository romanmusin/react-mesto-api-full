const userRouter = require('express').Router();
const { celebrate, Joi } = require('celebrate');
const { isValidUrl } = require('../utils/methods');

const {
  getUsers,
  getUser,
  updateUser,
  updateAvatar,
} = require('../controllers/users');

userRouter.get('/users', getUsers);
userRouter.get('/:userId', celebrate({
  params: Joi.object().keys({
    userId: Joi.string().required().length(24).hex(),
  }),
}), getUser);

userRouter.patch('/users/me', celebrate({
  body: Joi.object().keys({
    name: Joi.string().required().min(2).max(30),
    about: Joi.string().required().min(2).max(30),
  }),
}), updateUser);

userRouter.patch('/me/avatar', celebrate({
  body: Joi.object().keys({
    avatar: Joi.string().required().custom(isValidUrl),
  }),
}), updateAvatar);

module.exports = userRouter;
