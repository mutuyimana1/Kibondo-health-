const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  blogTitle: String,
  publishedDate: {
    type: Date,
    default: Date.now(),
  },
  blogImage: String,
  blogImageTwo: String,
  blogName: String,
  blogContent: String,
  blogDescription: String,
  searchKeyword: String,
});

const blogs = mongoose.model("blog", blogSchema);
module.exports = blogs;
