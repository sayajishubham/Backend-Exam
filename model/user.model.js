const mongoose = require("mongoose")
const bcrypt = require("bcrypt")
const UserSchema = new mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    city: {
        type: String
    },
    age: {
        type: String
    }
})

UserSchema.pre("save", async function (next) {
    this.password = await bcrypt.hash(this.password, 10)
    next()
})


const userModel = mongoose.model("user", UserSchema)

module.exports = userModel