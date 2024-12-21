const likeService = require("../services/like.service");
const { AppError } = require("../utils/error.utils");

const like = async (req, res, next) => {
    try {
        const { tweetId } = req.body;
        const { id: userId } = req.user; 

        if (!tweetId || !userId) {
            return res.status(400).json({ error: "TweetId and UserId are required" });
        }

        const result = await likeService.like({ userId, tweetId });
        res.status(201).json(result);
    } catch (err) {
        console.error("Error in like controller:", err.message);
        next(new AppError("Like operation failed", 500));
    }
};

const unlike = async (req, res, next) => {
    try {
        const { tweetId } = req.body;
        const { id: userId } = req.user; 

        if (!tweetId || !userId) {
            return res.status(400).json({ error: "TweetId and UserId are required" });
        }
        const result = await likeService.unlike({ userId, tweetId });
        res.status(200).json(result);
    } catch (err) {
        console.error("Error in unlike controller:", err.message);
        next(new AppError("Unlike operation failed", 500));
    }
};

const likeController = {
    like,
    unlike,
};

module.exports = likeController;
