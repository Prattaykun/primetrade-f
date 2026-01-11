// src/models/Task.js
const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  title: String,
  status: { type: String, default: "pending" },
  dueAt: { type: Date }, // date + time
}, { timestamps: true });

module.exports = mongoose.model("Task", taskSchema);
