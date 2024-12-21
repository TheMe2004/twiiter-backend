const User = require("../database/user.model");
const { AppError } = require("../utils/error.utils");
const bcrypt = require("bcrypt");
const { encodePayload } = require("../utils/jwt.utils");

const login = async (params) => {
    const user = await User.findOne({ where: { email: params.email } });
    if (!user) throw new AppError("Username or password is wrong", 404);

    const checkPassword = await bcrypt.compare(params.password, user.password);
    if (!checkPassword) throw new AppError("Username or password is wrong", 404);

    const token = encodePayload({ userId: user.id });
    delete user.password;

    return { token, user };
};

const register = async (params) => {
    const existingUser = await User.findOne({ where: { email: params.email } });
    if (existingUser) throw new AppError('User already exists', 409);

    const hash = await bcrypt.hash(params.password, 10);
    const user = await User.create({ ...params, password: hash });

    return user;
};

const authService = { login, register };

module.exports = authService;
