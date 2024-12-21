const { z } = require("zod")

const create = z.object({
    content: z.string(), 
    tweetId: z.number(),
    parentId: z.number()
});
const commentValidation = {
    create
};

module.exports = commentValidation