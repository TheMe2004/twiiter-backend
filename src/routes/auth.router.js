const { Router } = require("express");
const authController = require("../controllers/auth.controller");
const validationMiddleware = require("../middleware/validation.middleware");
const authValidation = require("../validations/auth.validations");
 
const authRouter = Router()

authRouter.post("/login", 
validationMiddleware(authValidation.login),    
authController.login)
authRouter.post("/register",
validationMiddleware(authValidation.register),
authController.register)

module.exports = authRouter