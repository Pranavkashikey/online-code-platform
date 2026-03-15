const mongoose = require("mongoose");

const executionSchema = new mongoose.Schema({

  jobId: String,

  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },

  language: String,

  code: String,

  input: String,

  output: String,

  status: {
    type: String,
    default: "completed"
  }

}, { timestamps: true });

module.exports = mongoose.model("Execution", executionSchema);