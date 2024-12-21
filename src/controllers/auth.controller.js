const authService = require("../services/auth.service");

const login = async (req, res, next) => {
    try {
        const result = await authService.login(req.body);
        res.json(result);
    } catch (err) {
       next(err)
    }
};

const register = async (req, res, next) => {
    try {
        const result = await authService.register(req.body);
        res.status(201).json(result);
    } catch (err) {
        next(err);
    }
};

const authController = { login, register };

module.exports = authController;
