const mongoose = require("mongoose");

const hospitalSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  district: {
    type: String,
    lowercase: true,
  },
  sector: String,
  Village: String,

  director: {
    type: String,
    required: true,
  },
  cell: String,
  province: String,
  sector: String,
  hotline: String,
});

const hospital = mongoose.model("Hospital", hospitalSchema);

module.exports = hospital;
