const express = require("express");
const UserRouter = express.Router()
const userController = require("../controller/user.controller");


UserRouter.post("/register", userController.signup)
UserRouter.post("/signin", userController.Signin);
UserRouter.get("/logout", userController.logout)

module.exports = UserRouter