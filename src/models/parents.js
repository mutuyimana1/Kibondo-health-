const mongoose = require("mongoose");

const parentsSchema = new mongoose.Schema({
  firstName: String,
  secondName: String,
  registeredDate: {
    type: Date,
    default: Date.now(),
  },
  nationalId: Number,
  age: Number,
  hospital: {
    type: String,
    default: " ",
  },
  telephone: String,
  village: String,
  cell: String,
  sector: String,
  district: String,
  province: String,
});

const parents = mongoose.model("parent", parentsSchema);

module.exports = parents;
