const Like = require("../database/like.model");

const like = async ({ userId, tweetId }) => {
    try {
        const likeuser = await Like.findOne({
            where: { userId, tweetId },
        });

        if (likeuser) {
            return { message: "Already liked" };
        }

        const newLike = await Like.create({
            userId,
            tweetId,
        });

        return { message: "Liked successfully", like: newLike };
    } catch (err) {
        console.error("Error in like operation:", err.message);
        throw new Error("Like operation failed");
    }
};

const unlike = async ({ userId, tweetId }) => {
    try {
        const unlikeuser = await Like.findOne({
            where: { userId, tweetId },
        });

        if (!unlikeuser) {
            return { message: "No like relationship found" };
        }
        await unlikeuser.destroy();

        return { message: "Unliked successfully" };
    } catch (err) {
        console.error("Error in unlike operation:", err.message);
        throw new Error("Unlike operation failed");
    }
};

const likeService = {
    like,
    unlike,
};

module.exports = likeService;
