const mongoose = require("mongoose");
const blogSchema = new mongoose.Schema({
    title: String,
    content: String,
    author: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
    publishedAt: { type: Date, default: Date.now },
});
const blogModel = mongoose.model("post", blogSchema);
module.exports = blogModel
