const mongoose = require("mongoose");

const hospitalSchema = new mongoose.Schema({
  hospitalName: {
    type: String,
    required: true,
  },
  Address: [
    {
      district: String,
      sector: String,
      Village: String,
    },
  ],
  headOfHospital: {
    type: String,
    required: true,
  },
});

const hospital = mongoose.model("Hospital", hospitalSchema);

module.exports = hospital;
