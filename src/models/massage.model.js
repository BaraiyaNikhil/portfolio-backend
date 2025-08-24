const mongoose = require("mongoose");

const massageSchema = new mongoose.Schema({
  firstName: { type: String, minlength: 3, required: true },
  lastName: { type: String, minlength: 3, required: true },
  email: { type: String, unique: true, required: true },
  phone: { type: String, unique: true, required: true },
  message: { type: String, required: true, trim : true}
});

module.exports = mongoose.model("Massage", massageSchema);
