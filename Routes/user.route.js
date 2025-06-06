const express = require("express")


const UserRouter = express.Router()



UserRouter.post("/register")
UserRouter.post("/signin")
UserRouter.get("/logout")