/**
 * Task Model
 * Stores user tasks
 */

const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true, // Task must belong to a user
  },
  title: {
    type: String,
    required: true,
  },
  totalTime: {
    type: Number,
    default: 0, // Total time spent on task (seconds)
  },
  isRunning: {
    type: Boolean,
    default: false,
  },
  startTime: {
    type: Date,
  },
});

module.exports = mongoose.model("Task", TaskSchema);
