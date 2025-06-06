const express = require("express");
const userModel = require("../model/user.model")

const UserRouter = express.Router()



UserRouter.post("/register", async (req, res) => {
    const { name, email, password, city, age } = req.body;
    if (!name || !email || !password || !city || !age) {
        return res.status(400).json({
            message: "Please fill all the Fields"
        })
    }
    try {
        const check = userModel.findOne({ email })
        if (check) {
            return res.status(400).json({
                message: "User Already existed"
            })
        }
        const newUser = await userModel.create({
            ...req.body
        })
        newUser.save()
        return res.status(200).json({
            message: "done"
        })
    } catch (error) {
        return res.status(400).json({
            message: "error"
        })
    }


})
UserRouter.post("/signin", async (req, res) => {
    const { email, password } = req.body
    return res.status(400).json({
        message: "Please fill all the Fields"
    })
})
UserRouter.get("/logout", async (req, res) => {

})

module.exports = UserRouter