let mongoose = require('mongoose');
let passportLocalMongoose = require('passport-local-mongoose');

let User = mongoose.Schema({
  username: {
    type: String,
    default: "",
    trim: true,
    required: "Username is required"
  },
  /*
  password: {
    type: String,
    default: "",
    trim: true,
    required: "Password is required"
  },*/
  displayName: {
    type: String,
    default: "",
    trim: true,
    required: "Display name is required"
  },
  email:
  {
    type: String,
    default: "",
    trim: true,
    required: "Email is required"
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
},
{
  collection: "user"
}
)

// configure options for user model
let options = ({MissingPasswordError: "Password is missing"});
User.plugin(passportLocalMongoose, options);
module.exports.User = mongoose.model('User', User);