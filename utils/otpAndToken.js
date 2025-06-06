const jwt = require("jsonwebtoken")
require("dotenv").config()
const otpAndToken = (user) => {


    const token = jwt.sign({ user }, process.env.SECRET_PASS);
    return token

}

module.exports = otpAndToken