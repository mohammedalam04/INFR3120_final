let mongoose = require('mongoose');

// create a student model
let studentModel = mongoose.Schema({
  fname: {
    type: String,
    required: true,
  },
  lname: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
    min: 7,
    max: 130,
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
  },
  location: {
    type: String,
    required: true,
  },
},
{ collection: 'students' });

module.exports = mongoose.model('Student', studentModel);