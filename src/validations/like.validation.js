const { z } = require("zod");

const create = z.object({
  userId: z.number(),  
  tweetId: z.number(),  
});

const likeValidation = {
  create,
};

module.exports = likeValidation;
