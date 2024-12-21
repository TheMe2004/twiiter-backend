const Follow = require("../database/follower.model");



const follow = async ({ followingId, followerId }) => {
    try {
             
        const followuser = await Follow.findOne({
            where: { followingId, followerId },
        });

        if (followuser) {
            return { message: "Already following" };
        }

        const follow = await Follow.create({
            followingId,
            followerId,
        });
        return { message: "Followed successfully", follow };
    } catch (err) {
        console.error("Error in follow operation:", err.message);
        throw new Error("Follow operation failed");
    }
};

const unfollow = async ({ followingId, followerId }) => {
    try {
        const unfollowuser = await Follow.findOne({
            where: { followingId, followerId },
        });

        if (!unfollowuser) {
            return { message: "No follow relationship found" };
        }

        await unfollowuser.destroy();
        return { message: "Unfollowed successfully" };
    } catch (err) {
        console.error("Error in unfollow operation:", err.message);
        throw new Error("Unfollow operation failed");
    }
};

const followService = {
    follow,
    unfollow,
};

module.exports = followService;
