const parentsInfo = require("../models/parents");

class parentsController {
  static async createParent(req, res) {
    const parents = await parentsInfo.create(req.body);
    if (!parents) {
      return res.status(404).json({ error: "parents not created" });
    }
    return res
      .status(200)
      .json({ data: "parents created successfully", data: parents });
  }

  static async getParents(req, res) {
    const allParents = await parentsInfo.find();
    if (!allParents) {
      return res.status(404).json({ error: "not able to retrieve parents" });
    }
    return res
      .status(200)
      .json({ data: "parents found successfully", data: allParents });
  }

  static async getOneParent(req, res) {
    const parent = await parentsInfo.findById(req.params.id);
    if (!parent) {
      return res.status(404).json({ error: "parent not found" });
    }
    return res.status(200).json({ message: "parent found", data: parent });
  }
  static async updateOneParent(req, res) {
    const parent = await parentsInfo.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    if (!parent) {
      return res.status(404).json({ error: "parent update failed" });
    }
    return res
      .status(200)
      .json({ message: "parent updated successfully", data: parent });
  }
  static async deleteParent(req, res) {
    const deletedParent = await parentsInfo.findByIdAndDelete(req.params.id);
    if (!deletedParent) {
      return res.status(404).json({ error: "parent not deleted " });
    }
    return res
      .status(200)
      .json({ message: "parent deleted successfully", data: deletedParent });
  }
}

module.exports = parentsController;
