const mongoose = require("mongoose");

const submissionSchema = new mongoose.Schema({

  userId: String,

  problemId: String,

  language: String,

  code: String,

  verdict: String,

  output: String

}, { timestamps: true });

module.exports = mongoose.model("Submission", submissionSchema);