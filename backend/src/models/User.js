// src/models/User.js
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,

  userData: {
    phone: String,
    role: String,
    company: String,
    bio: String,
  },
}, { timestamps: true });

module.exports = mongoose.model("User", userSchema);
