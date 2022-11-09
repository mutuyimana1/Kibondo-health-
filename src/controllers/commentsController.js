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
}

module.exports = commentController;
