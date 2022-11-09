const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  fullName: String,
  email: String,
  comment: String,
});

const comments = mongoose.model("comment", commentSchema);

module.exports = comments;
