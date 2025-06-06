const jwt = require("jsonwebtoken")
require("dotenv").config()
const Token = (user) => {


    const token = jwt.sign({ user }, process.env.SECRET_PASS, { expiresIn: "7m" });
    return token

}

module.exports = Token