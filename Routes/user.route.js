const express = require("express");
const userModel = require("../model/user.model");
const Mail = require("../utils/mail");
const ejs = require("ejs")
const jwt = require("jsonwebtoken")
const UserRouter = express.Router()
const bcrypt = require("bcrypt");
const userController = require("../controller/user.controller");




UserRouter.post("/register", userController.signup)
UserRouter.post("/signin", userController.Signin);
UserRouter.get("/logout", userController.logout)

module.exports = UserRouter