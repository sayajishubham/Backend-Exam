const jwt = require("jsonwebtoken");
const userModel = require("../model/user.model");
const rateLimit = require('express-rate-limit')

const middlewares = {
    checkAuth: async (req, res, next) => {
        try {
            const token = req.cookies.veri;
            if (!token) {
                return res.status(401).json({ message: "Unauthorized: No token provided" });
            }

            const decoded = jwt.verify(token, process.env.SECRET_PASS);
            const user = await userModel.findById(decoded.userId);
            if (!user) {
                return res.status(401).json({ message: "Unauthorized: User not found" });
            }

            req.user = user; // attach user to request
            next(); // continue to next middleware or route
        } catch (error) {
            console.error(error);
            res.status(401).json({ message: "Unauthorized: Invalid token" });
        }
    },
    rate: rateLimit({
        windowMs: 600000,
        limit: 70,
        standardHeaders: 'draft-8',
        legacyHeaders: false,
    })
};

module.exports = middlewares;
