const { Router } = require('express');
const userController = require('../controllers/user.controller');
const validationMiddleware = require('../middleware/validation.middleware');
const userValidation = require('../validations/user.validations');

const userRouter = Router();

userRouter.get("/", userController.list);
userRouter.post(
    "/",
    validationMiddleware(userValidation.create),
    userController.create
);

module.exports = userRouter;
