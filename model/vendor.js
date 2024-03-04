const { mongoose } = require("mongoose");

const vendorSchema = new mongoose.Schema({
  id: Number,
  name: String,
  email: String,
  phone: String,
  location: String,

  appointments: [],
});

module.exports = mongoose.model("Vendor", vendorSchema);
