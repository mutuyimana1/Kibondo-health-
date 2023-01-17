const getTimer = require("../helpers/timer");
const babies = require("../models/baby");
const Nexmo = require("nexmo");
const dotenv = require("dotenv");
var cron = require("node-cron");
const sendSms  = require('../helpers/sendmessage');
dotenv.config();
const Vaccinations = require("../models/vaccinations");
const nexmo = new Nexmo({
  apiKey: process.env.API_KEY,
  apiSecret: process.env.API_SECRET_KEY,
});

class babyController {
  static async createbaby(req, res) {
    const baby = await babies.create(req.body);

    const from = "Vonage APIs";
    const number = req.body.telephone;
    var a = 0;
    cron.schedule("* * * * * *", () => {
      a = a + 1;
      if (a == 14) {
        const message = `Muraho ${req.body.fatherName} baby Health irakwibutsako umwana wawe agejeje igihe cyo gufata urukingo rwa 1 rumukingira ibi bikurikira \nBCG \nigituntu,\nimbasa(pilio 0). \n turagusaba ejo kuzindukira kukigonderabuzima kikwegereye ugatabara ubuzima bw'umwana wawe`;
        sendSms(number, message);
      }
      if (a == 45) {
        const message = `Muraho ${req.body.fatherName} baby Health irakwibutsako umwana wawe agejeje igihe cyo gufata rwa 2 urukingo rumukingira ibi bikurikira \nimbasa(pilio1),\npantavelent(),\nimpiswi,\npinemocoque, \n turagusaba ejo kuzindukira kukigonderabuzima kikwegereye ugatabara ubuzima bw'umwana wawe`;
        sendSms(number, message);
      }
      if (a == 75) {
        console.log("urukingo 3");
      }

      // const from = "vonage APIS";
      // const number = req.body.telephone;
      // const message = "req.body.message";
    });

    if (!baby) {
      return res.status(404).json({ error: "baby not created" });
    }
    // getTimer(5, 8, 12);
    return res
      .status(200)
      .json({ message: "baby created successfully", data: baby });
  }
  static async getAllbaby(req, res) {
    const babys = await babies.find();
    if (!babys) {
      return res.status(404).json({ error: "baby not found" });
    }
    return res
      .status(200)
      .json({ count: babys.length, message: "baby found", data: babys });
  }
  static async getOnebaby(req, res) {
    const baby = await babies.findById(req.params.id);
    if (!baby) {
      return res.status(404).json({ error: "baby not found" });
    }
    return res.status(200).json({ message: "baby found", data: baby });
  }

  static async deletebaby(req, res) {
    const deletedbaby = await babies.findByIdAndDelete(req.params.id);

    if (!deletedbaby) {
      return res.status(404).json({ error: "baby not deleted" });
    }
    return res.status(200).json({
      message: "baby deleted successfully",
      data: deletedbaby,
    });
  }
  static async updatebaby(req, res) {
    const updatedbaby = await babies.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!updatedbaby) {
      return res.status(404).json({ error: "baby not updated" });
    }
    return res.status(200).json({
      message: "baby updated successfully",
      data: updatedbaby,
    });
  }

  static async addVaccine(req, res) {
    try {
      const vaccineInfo = new Vaccinations({
        baby: req.params.id,
        name: req.body.name,
        details: req.body.details,
        date: Date.now(),
      });

      await vaccineInfo.save();
      return res.status(200).json({
        message: "Vaccine recorded",
        data: vaccineInfo,
      });
    } catch (error) {
      return res.status(500).json({
        message: error.message,
      });
    }
  }
  static async getVaccine(req, res) {
    try {
      const vaccineInfo = await Vaccinations.find({
        baby: req.params.id,
      }).populate("baby");
      return res.status(200).json({
        message: "Vaccine recorded",
        data: vaccineInfo,
      });
    } catch (error) {
      return res.status(500).json({
        message: error.message,
      });
    }
  }

  static async getAllVaccine(req, res) {
    try {
      const vaccineInfo = await Vaccinations.find().populate("baby");
      return res.status(200).json({
        message: "Vaccine recorded",
        data: vaccineInfo,
      });
    } catch (error) {
      return res.status(500).json({
        message: error.message,
      });
    }
  }
}

module.exports = babyController;
