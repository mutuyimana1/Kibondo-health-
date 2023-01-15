const adviceInfo = require("../models/advice");

class adviceController {
  static async createAdvices(req, res) {
    const advices = await adviceInfo.create(req.body);
    if (!advices) {
      return res.status(404).json({ error: "advices not created" });
    }
    return res
      .status(200)
      .json({ data: "advices created successfully", data: advices });
  }

  static async getAdvices(req, res) {
    const alladvices = await adviceInfo.find();
    if (!alladvices) {
      return res.status(404).json({ error: "not able to retrive advices" });
    }
    return res
      .status(200)
      .json({ data: "advicet found successfully", data: alladvices });
  }

  static async getOneAdvice(req, res) {
    const advice = await adviceInfo.findById(req.params.id);
    if (!advice) {
      return res.status(404).json({ error: "advice not found" });
    }
    return res.status(200).json({ message: "advice found", data: advice });
  }
  static async updateOneAdvice(req, res) {
    const advice = await adviceInfo.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!advice) {
      return res.status(404).json({ error: "advice update failed" });
    }
    return res
      .status(200)
      .json({ message: "advice updated successfully", data: advice });
  }
  static async deleteAdvice(req, res) {
    const deletedAdvice = await adviceInfo.findByIdAndDelete(req.params.id);
    if (!deletedAdvice) {
      return res.status(404).json({ error: "advice not deleted " });
    }
    return res
      .status(200)
      .json({ message: "advice deleted successfully", data: deletedAdvice });
  }
}

module.exports = adviceController;
