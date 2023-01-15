const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  blogTitle: String,
  blogImage: String,
  blogName: String,
  blogContent: String,
  searchKeyword: String,
});

const blogs = mongoose.model("blog", blogSchema);
module.exports = blogs;
