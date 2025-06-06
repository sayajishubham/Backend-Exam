const mongoose = require("mongoose");
const PostSchema = new mongoose.Schema({
    title: String,
    content: String,
    author: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
    publishedAt: { type: Date, default: Date.now },
});
const PostModel = mongoose.model("post", PostSchema);
module.exports = PostModel
