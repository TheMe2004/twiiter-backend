const { z } = require("zod");

const create = z.object({
    content: z.string(),
    image: z.string().optional(),
    tweetId: z.number().optional(),  
});
const tweetValidation = {
    create,
};

module.exports = tweetValidation;
