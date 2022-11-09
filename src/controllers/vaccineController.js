const vaccineInfos = require("../models/vaccine");

class vaccineController {
  static async createVaccine(req, res) {
    const vaccine = await vaccineInfos.create(req.body);
    if (!vaccine) {
      return res.status(404).json({ error: "vaccine note created" });
    }
    return res
      .status(200)
      .json({ message: "vaccine created successfully", data: vaccine });
  }
  static async getAllVaccine(req, res) {
    const vaccines = await vaccineInfos.find();
    if (!vaccines) {
      return res.status(404).json({ error: "vaccines not found" });
    }
    return res.status(200).json({ message: "vaccines found", data: vaccines });
  }
  static async getOneVaccine(req, res) {
    const vaccine = await vaccineInfos.findById(req.params.id);
    if (!vaccine) {
      return res.status(404).json({ error: "vaccine not found" });
    }
    return res.status(200).json({ message: "vaccine found", data: vaccine });
  }

  static async deleteVaccine(req, res) {
    const deletedVaccine = await vaccineInfos.findByIdAndDelete(req.params.id);

    if (!deletedVaccine) {
      return res.status(404).json({ error: "vaccine not deleted" });
    }
    return res
      .status(200)
      .json({ message: "vaccine deleted successfully", data: deletedVaccine });
  }
  static async updateVaccine(req, res) {
    const updatedVaccine = await vaccineInfos.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!updatedVaccine) {
      return res.status(404).json({ error: "vaccine not updated" });
    }
    return res
      .status(200)
      .json({ message: "vaccine updated successfully", data: updatedVaccine });
  }
}
module.exports = vaccineController;
