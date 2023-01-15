const blogsInfo = require("../models/blogs");

class blogController {
  static async createBlog(req, res) {
    const blogs = await blogsInfo.create(req.body);
    if (!blogs) {
      return res.status(404).json({ error: "blogs not created" });
    }
    return res
      .status(200)
      .json({ data: "blogs created successfully", data: blogs });
  }

  static async getBlogs(req, res) {
    const category = req.params["category"];
    if (category == "all") {
      const allBogs = await blogsInfo.find();
      if (!allBogs) {
        return res.status(404).json({ error: "not able to retrive blogs" });
      }
      return res
        .status(200)
        .json({ data: "blogs found successfully", data: allBogs });
    } else {
      const searchedBlogs = [];
      const allBogs = await blogsInfo.find();
      if (!allBogs) {
        return res.status(404).json({ error: "not able to retrive blogs" });
      }
      for (let i = 0; i < allBogs.length; i++) {
        if (
          allBogs[i].searchKeyword
            ?.toLowerCase()
            .includes(category?.toLowerCase())
        ) {
          searchedBlogs.push(allBogs[i]._doc);
        }
      }
      return res
        .status(200)
        .json({ data: "blogs found successfully", data: searchedBlogs });
    }
  }

  static async getOneBlog(req, res) {
    const blog = await blogsInfo.findById(req.params.id);
    if (!blog) {
      return res.status(404).json({ error: "blog not found" });
    }
    return res.status(200).json({ message: "blog found", data: blog });
  }
  static async updateOneBlog(req, res) {
    const blog = await blogsInfo.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!blog) {
      return res.status(404).json({ error: "blog update failed" });
    }
    return res
      .status(200)
      .json({ message: "blog updated successfully", data: blog });
  }
  static async deleteBlog(req, res) {
    const deletedBlog = await blogsInfo.findByIdAndDelete(req.params.id);
    if (!deletedBlog) {
      return res.status(404).json({ error: "blog not deleted " });
    }
    return res
      .status(200)
      .json({ message: "blog deleted successfully", data: deletedBlog });
  }
}

module.exports = blogController;
