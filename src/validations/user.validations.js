const { z } = require("zod")

const create = z.object({
    email: z.string().optional(),
    password: z.string().min(9).max(50)
})
const userValidation = {
    create
};

module.exports = userValidation