const { default: mongoose } = require("mongoose");
const mongose = require("mongoose");

const healthMeasureSchema = new mongoose.Schema({
  gender: {
    type: String,
    enum: ["female", "male", "not prefer to say"],
  },
  weight: Number,
  height: Number,
  age: Number,
});

const healthMeasure = mongoose.model("health", healthMeasureSchema);
module.exports = healthMeasure;
