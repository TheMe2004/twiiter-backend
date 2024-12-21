const { Router } = require("express");
const authMiddleware = require("../middleware/auth.middleware");
const tweetController = require("../controllers/tweet.controller");
const validationMiddleware = require("../middleware/validation.middleware");
const tweetValidation = require("../validations/tweet.validation"); 

const tweetRouter = Router();

tweetRouter.post("/",
 authMiddleware, 
 validationMiddleware(tweetValidation.create),
 tweetController.create);

tweetRouter.delete(
"/:id",
tweetController.deleteTweet
)

module.exports = tweetRouter;
