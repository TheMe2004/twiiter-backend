const { Router } = require("express");
const authMiddleware = require("../middleware/auth.middleware"); 
const validationMiddleware = require("../middleware/validation.middleware");
const commentValidation = require("../validations/comment.validation"); 
const commentController = require("../controllers/comment.controller"); 

const CommentRouter = Router();


CommentRouter.post(
    "/",
    authMiddleware, 
    validationMiddleware(commentValidation.create), 
    commentController.create 
);
CommentRouter.delete(
"/:id",
authMiddleware,
commentController.deletecomment
)



module.exports = CommentRouter;
