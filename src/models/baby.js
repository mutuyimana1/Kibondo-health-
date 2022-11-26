const mongoose = require("mongoose");

const babySchema = new mongoose.Schema({
  firstName: String,
  secondName: String,
  dateOfBirth: Date,
  fatherName: String,
  motherName: String,
  village: String,
  cell: String,
  sector: String,
  district: String,
  province: String,
});

const babies = mongoose.model("baby", babySchema);

module.exports = babies;
