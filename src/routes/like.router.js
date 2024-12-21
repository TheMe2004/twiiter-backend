const { Router } = require('express');
const likeController = require('../controllers/like.controller');
const authMiddleware = require('../middleware/auth.middleware');
const validationMiddleware = require('../middleware/validation.middleware');
const likeValidation = require('../validations/like.validation');

const likerouter = Router();

likerouter.post("/", 
    authMiddleware, 
    validationMiddleware(likeValidation.create), 
    likeController.like
);
likerouter.delete(
"/:id",
authMiddleware,
likeController.unlike
)

module.exports = likerouter;
