const tweetService = require("../services/tweet.service");
const { AppError, UnauthorizedError } = require("../utils/error.utils");



const create = async (req, res, next) => {
    try {
        const { content,image } = req.body;
        const { id: authorId } = req.user; 

        if (!content || !authorId) {
          throw  UnauthorizedError([])
        }

        const tweet = await tweetService.create({ authorId, content, image });

        res.status(201).json(tweet);
    } catch (err) {
        console.error("Error in tweet creation:", err.message);
        throw AppError("Tweet creation failed");
    }
};



const deleteTweet = async (req, res, next) => {
    try {
        const { id } = req.params;
        const result = await tweetService.deleteTweet(id);
        if (result) {res.status(200).json({ message: 'Tweet deleted successfully' });} 
    } catch (err) {
        console.error("Error in tweet deletion:", err.message);
        throw AppError("Tweet delete failed");
        
    }
};

const tweetController = {
    create,
    deleteTweet
};

module.exports = tweetController;
