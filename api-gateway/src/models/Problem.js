const mongoose = require("mongoose");

const problemSchema = new mongoose.Schema({

  title:String,

  description:String,

  difficulty:{
    type:String,
    enum:["Easy","Medium","Hard"]
  }

});

module.exports = mongoose.model("Problem",problemSchema);