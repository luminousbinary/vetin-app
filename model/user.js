const { mongoose } = require("mongoose");

const userSchema = new mongoose.Schema({
  id: Number,
  firstName: String,
  lastName: String,
  maidenName: String,
  age: Number,
  gender: String,
  email: String,
  phone: String,
  username: String,
  location:String,

  appointments: [],
});

module.exports = mongoose.model("User", userSchema);
