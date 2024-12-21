const { z } = require("zod")

const create = z.object({
    followingId: z.number(),
    followerId: z.number()
});
const followValidation = {
    create
};

module.exports = followValidation