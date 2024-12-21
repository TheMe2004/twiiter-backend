const {z} = require("zod")

const login = z.object({
    email: z.string().email().min(3),
    password: z.string().min(6)
})

const register = z.object({
    username: z.string().optional(),
    fullname: z.string().optional(),
    email: z.string().optional(),
    password: z.string().min(9).max(50),
    name: z.string().optional(),
    bio: z.string().optional(),
    profileImage: z.string().url().optional(), 
    bannerImage: z.string().url().optional(),
})

const authValidation = {
login,
register
}

module.exports = authValidation