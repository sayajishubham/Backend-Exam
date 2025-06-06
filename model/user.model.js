const mongoose = require("mongoose")
const bcrypt = require("bcrypt")
const Validator = require("schema-validator")
const UserSchema = new mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String,
    },
    city: {
        type: String
    },
    age: {
        type: Number
    }
})

UserSchema.pre("save", async function (next) {
    this.password = await bcrypt.hash(this.password, 10)
    next()
})


const userModel = mongoose.model("user", UserSchema)

module.exports = userModel