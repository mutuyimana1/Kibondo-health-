const { default: mongoose } = require("mongoose");

const healthMeasureSchema = new mongoose.Schema({
  gender: {
    type: String,
    enum: ["female", "male", "not prefer to say"],
  },
  weight: Number,
  height: Number,
  age: Number,
  telephone: String,
});

const healthMeasure = mongoose.model("health", healthMeasureSchema);
module.exports = healthMeasure;
