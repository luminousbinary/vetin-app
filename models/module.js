const { mongoose } = require("mongoose");

// const appointmentSchema = new mongoose.Schema({
//   did: Number,
//   appointment_date: String,
//   next_appointment_date: String,
//   purpose: String,
//   phone_number: String,
//   appointment_type: String,
// });

const Schema = mongoose.Schema,
  // model = mongoose.model.bind(mongoose),
  ObjectId = mongoose.Schema.Types.ObjectId;


// const Slot = model("Slot", slotSchema);

const appointmentSchema = new Schema({
  id: ObjectId,
  name: String,
  email: String,
  phone: Number,
  slots: { type: ObjectId, ref: "Slot" },
  created_at: Date,
});

// const Appointment = model("Appointment", appointmentSchema);

module.exports = mongoose.model("Appontment", appointmentSchema);
