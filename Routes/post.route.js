const express = require("express");
const middlewares = require("../middleware/middleware");
const postController = require("../controller/post.controller");
const PostRouter = express.Router()


PostRouter.post("/add", middlewares.checkAuth, postController.createPost)
PostRouter.patch("/update/:id", middlewares.checkAuth, postController.updatePost);
PostRouter.delete("/delete/:id", middlewares.checkAuth, postController.deletePost)
PostRouter.get("/", middlewares.checkAuth, postController.getAllpost)

module.exports = PostRouter