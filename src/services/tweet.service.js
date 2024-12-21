const Tweet = require("../database/tweet.model");



const create = async ({ authorId, content, image }) => {
    try {
    
        if (!content || !authorId) {
            throw new Error("Content and authorId are required");
        }

        const tweet = await Tweet.create({
            authorId,
            content,
            image: image || null, 
        });

        return tweet;
    } catch (err) {
        console.error("Error in tweet creation:", err.message);
        throw new Error("Tweet creation failed"); 
    }
};



const deletetweet = async (id) => {
    try {
        const result = await Tweet.destroy({ where: { id: id } });
        if (result === 0) {
            throw new NotFoundError("Tweet not found", 404);
        }
        return { message: "Tweet deleted successfully" };
    } catch (error) {
        console.error(error);
        throw new NotFoundError("Tweet not found", 404);
    }
};

const tweetService = {
    create,
    deletetweet
};

module.exports = tweetService;
