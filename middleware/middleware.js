const middlewares = {
    checkAuth: async (req, res, next) => {
        try {
            console.log(req.cookies)
            const token = req.cookies.veri;
            console.log(token)
            if (!token) {
                return res.status(401).json({ message: "Unauthorized: No token provided" });
            }

            const decoded = jwt.verify(token, process.env.JWT_KEY);
            const user = await User.findById(decoded._id).select("-password");
            if (!user) {
                return res.status(401).json({ message: "Unauthorized: User not found" });
            }

            req.user = user;
            next();
        } catch (error) {
            res.status(401).json({ message: "Unauthorized: Invalid token" });
        }
    }
};

module.exports = middlewares;