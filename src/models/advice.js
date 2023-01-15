const mongoose = require("mongoose");

const adviceSchema = new mongoose.Schema({
  adviceCategory: String,
  adviceContent: String,
  blogs: String,
});
const advices = mongoose.model("advice", adviceSchema);
module.exports = advices;
