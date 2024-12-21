const { Router } = require('express');
const authRouter = require("./auth.router");
const userRouter = require("./user.router");
const CommentRouter = require('./comment.router');
const tweetRouter = require('./tweet.router');
const followRouter = require('./follow.router');
const likerouter = require('./like.router');




const router = Router();

router.use("/auth", authRouter);
router.use("/users", userRouter);
router.use("/auth/comment", CommentRouter);
router.use("/auth/tweet", tweetRouter);
router.use("/auth/like", likerouter);
router.use("/auth/follow", followRouter)




module.exports = router;
