const hospitalInfos = require("../models/hospital");
class hospitalController {
  static async createHospital(req, res) {
    const hospital = await hospitalInfos.create(req.body);

    if (!hospital) {
      return res.status(404).json({ error: "hospital not created" });
    }
    return res
      .status(200)
      .json({ message: "hospital created successfully", data: hospital });
  }
  static async getAllHospital(req, res) {
    const hospitals = await hospitalInfos.find();
    if (!hospitals) {
      return res.status(404).json({ error: "hospital not found" });
    }
    return res.status(200).json({ message: "hospital found", data: hospitals });
  }
  static async getOneHospital(req, res) {
    const hospital = await hospitalInfos.findById(req.params.id);
    if (!hospital) {
      return res.status(404).json({ error: "hospital not found" });
    }
    return res.status(200).json({ message: "hospital found", data: hospital });
  }

  static async deleteHospital(req, res) {
    const deletedHospital = await hospitalInfos.findByIdAndDelete(
      req.params.id
    );

    if (!deletedHospital) {
      return res.status(404).json({ error: "hospital not deleted" });
    }
    return res.status(200).json({
      message: "hospital deleted successfully",
      data: deletedHospital,
    });
  }
  static async updateHospital(req, res) {
    const updatedHospital = await hospitalInfos.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!updatedHospital) {
      return res.status(404).json({ error: "hospital not updated" });
    }
    return res.status(200).json({
      message: "hospital updated successfully",
      data: updatedHospital,
    });
  }
  static async getHospitalInDistrict(req, res) {
    const hospital = await hospitalInfos.find({
      district: req.params.district,
    });
    if (hospital.length > 0) {
      res.status(200).json(hospital);
    } else {
      res.status(400).json("no hospital in such district");
    }
  }
}

module.exports = hospitalController;
