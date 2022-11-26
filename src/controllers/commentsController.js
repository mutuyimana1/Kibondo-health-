const commentInfo = require("../models/comment");

class commentController {
  static async createComment(req, res) {
    const comment = await commentInfo.create(req.body);
    if (!comment) {
      return res.status(404).json({ error: "comment not created" });
    }
    return res
      .status(200)
      .json({ data: "comment created successfully", data: comment });
  }

  static async getComment(req, res) {
    const allComment = await commentInfo.find();
    if (!allComment) {
      return res.status(404).json({ error: "not able to retrive comment" });
    }
    return res
      .status(200)
      .json({ data: "comment found successfully", data: allComment });
  }

  static async getOneComment(req, res) {
    const comment = await commentInfo.findById(req.params.id);
    if (!comment) {
      return res.status(404).json({ error: "comment not found" });
    }
    return res.status(200).json({ message: "comment found", data: comment });
  }
  static async deleteComment(req, res) {
    const deletedComment = await commentInfo.findByIdAndDelete(req.params.id);
    if (!deletedComment) {
      return res.status(404).json({ error: "comment not deleted " });
    }
    return res
      .status(200)
      .json({ message: "comment deleted successfully", data: deletedComment });
  }
}

module.exports = commentController;
