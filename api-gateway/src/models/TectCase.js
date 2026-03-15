const mongoose = require("mongoose");

const testCaseSchema = new mongoose.Schema({

  problemId: String,

  input: String,

  expectedOutput: String

});

module.exports = mongoose.model("TestCase", testCaseSchema);