const { Router } = require("express")
const authMiddleware = require("../middleware/auth.middleware")
const validationMiddleware = require("../middleware/validation.middleware")
const followValidation = require("../validations/follow.validation")
const followController = require("../controllers/follow.controller")

const followRouter = Router()

followRouter.post(
"/",
authMiddleware,
validationMiddleware(followValidation.create),
followController.follow

)

followRouter.post(
    "/:id",
    authMiddleware,
    followController.unfollow
)

module.exports = followRouter