const express = require("express")
const connection = require("./config/db")
const UserRouter = require("./Routes/user.route")
const PostRouter = require("./Routes/post.route")
require("dotenv").config()

const app = express()


app.use(express.json())
app.use("/user", UserRouter)
app.use("/post", PostRouter)

app.listen(process.env.PORT, async () => {
    try {
        await connection;
        console.log("<<< Server is Running >>>")
        console.log("< db is Running >")
    } catch (error) {
        console.log("error while starting")
    }
})

