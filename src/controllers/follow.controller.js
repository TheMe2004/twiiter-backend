const followService = require("../services/follow.service");
const { AppError } = require("../utils/error.utils");

const follow = async (req, res, next) => {
    try {
        const { followingId } = req.body;
        const { id: followerId } = req.user;


        const result = await followService.follow({ followingId, followerId });
        res.status(201).json(result);
    } catch (err) {
        console.error("Error in follow controller:", err.message);
        next(new AppError("Follow operation failed", 500));
    }
};

const unfollow = async (req, res, next) => {
    try {
        const { followingId } = req.body;
        const { id: followerId } = req.user; 

        if (!followingId || !followerId) {
            return res.status(400).json({ error: "FollowingId and FollowerId are required" });
        }

        const result = await followService.unfollow({ followingId, followerId });
        res.status(200).json(result);
    } catch (err) {
        console.error("Error in unfollow controller:", err.message);
        next(new AppError("Unfollow operation failed", 500));
    }
};

const followController = {
    follow,
    unfollow,
};

module.exports = followController;
