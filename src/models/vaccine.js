const mongoose = require("mongoose");

const vaccineSchema = new mongoose.Schema({
  vaccineName: String,

  vaccinationPeriod: String,
  vaccineDetails: [
    {
      doses: { type: String, required: false },
      quantity: { type: String, required: false },
    },
  ],
});

const vaccine = mongoose.model("Vaccine", vaccineSchema);

module.exports = vaccine;
