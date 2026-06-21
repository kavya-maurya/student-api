const mongoose = require("mongoose");

const studentSchema = mongoose.Schema({
  name: String,
  address: String,
  phone: Number,     //int not defined
  class: String,
});

const Student = mongoose.model("Educate", studentSchema);

module.exports=Student;