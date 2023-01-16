const mongoose = require("mongoose");

const vaccinationSchema = new mongoose.Schema({
  name: String,
  baby:{
    type:mongoose.Types.ObjectId,
    ref:'baby'

  },
  date:{
    type:Date
  },
  details:String
});

const Vaccinations = mongoose.model("Vaccinations", vaccinationSchema);

module.exports = Vaccinations;
