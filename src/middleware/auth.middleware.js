const User = require("../database/user.model");
const { UnauthorizedError } = require("../utils/error.utils");
const { decodePayload } = require("../utils/jwt.utils");

const authMiddleware = async (req, res, next) => {
    try {

        let token = req.headers.authorization || "";
        token = token.split(" ")[1];

        if (!token) {
            return next(new UnauthorizedError("Token not provided"));
        }

        const payload = decodePayload(token);

        if (!payload || !payload.userId) {
            return next(new UnauthorizedError("Invalid or expired token"));
        }

        let user = await User.findByPk(payload.userId);

        if (!user) {
            return next(new UnauthorizedError("User not found"));
        }
        req.user = user;


        next();
    } catch (error) {

        next(new UnauthorizedError("Authorization error: " + error.message));
    }
};

module.exports = authMiddleware;
