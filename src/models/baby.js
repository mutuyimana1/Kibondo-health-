const mongoose = require("mongoose");

const babySchema = new mongoose.Schema({
  firstName: String,
  secondName: String,
  dateOfBirth: {
    type: Date,
    default: Date.now(),
  },
  fatherName: String,
  motherName: String,
  telephone: String,
  village: String,
  cell: String,
  sector: String,
  district: String,
  province: String,
  vaccine: Array,
});

const babies = mongoose.model("baby", babySchema);

module.exports = babies;
