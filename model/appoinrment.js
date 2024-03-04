const { mongoose } = require("mongoose");

const appointmentSchema = new mongoose.Schema({
  did: Number,
  appointment_date: String,
  next_appointment_date: String,
  purpose: String,
  phone_number: String,
  appointment_type: String,
});

module.exports = mongoose.model("Appontment", appointmentSchema);
