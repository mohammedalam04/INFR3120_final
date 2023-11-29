let mongoose = require('mongoose');

// students model
let studentModel = mongoose.Schema({
  fname: String,
  lname: String,
  age: Number,
  email: String,
  location: String
},
{
  collection: "students"
});

module.exports = mongoose.model('students', studentModel);