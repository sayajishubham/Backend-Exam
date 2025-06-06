const express = require("express");
const middlewares = require("../middleware/middleware");
const PostRouter = express.Router()


PostRouter.post("/add", middlewares.checkAuth.userController.signup)
PostRouter.patch("/update/:id", middlewares.checkAuth, userController.Signin);
PostRouter.delete("/delete/:id", middlewares.checkAuth, userController.logout)
PostRouter.get("/get", middlewares.checkAuth, userController.logout)

module.exports = PostRouter