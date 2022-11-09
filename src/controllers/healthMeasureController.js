const healthMeasure = require("../models/healthMeasure");
class healthMeasureController {
  static async measureHealth(req, res) {
    const measure = await healthMeasure.create(req.body);
    if (!measure) {
      return res.status(404).json({ error: "measure not found" });
    }

    const actualHheight = measure.age * 6 + 77;
    if (actualHheight >= 40 && age <= 3) {
      return res
        .status(200)
        .json({ message: "waoo you are in good condition", data: measure });
    }
    return res
      .status(200)
      .json({ message: "you are in bad condition", data: measure });
  }
}

module.exports = healthMeasureController;
