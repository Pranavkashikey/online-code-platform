const mongoose = require("mongoose");

const codeSchema = new mongoose.Schema({

  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },

  language: String,

  code: String,

  input: String,

  output: String

}, { timestamps: true });

module.exports = mongoose.model("Code", codeSchema);