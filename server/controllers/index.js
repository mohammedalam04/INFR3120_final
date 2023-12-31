let express = require('express');
let router = express.Router();
const passport = require('passport');
let DB = require('../config/db');
let userModel = require('../models/user');
let User = userModel.User;

module.exports.displayHomePage = (req, res, next) => {
  res.render('index', {
    title: 'Home',
    displayName: req.user ? req.user.displayName: ''
  });
}

module.exports.displaySignupPage = (req, res, next) => {
  res.render('index', {
    title: 'Sign Up',
    displayName: req.user ? req.user.displayName: ''
  });
}

module.exports.displayContactPage = (req, res, next) => {
  res.render('contactus', {
    title: "Contact Us",
    displayName: req.user ? req.user.displayName: ''
 });
}

module.exports.displayLoginPage = (req, res, next) => {
  if(!req.User){
    res.render('auth/login', {
      title: "Login",
      message: req.flash('loginMessage'),
      displayName: req.user ? req.user.displayName: ''
    })
  }
  else {
    return res.redirect('/home');
  }
}

module.exports.processLoginPage = (req, res, next) => {
  passport.authenticate('local', (err, User, info) => {
    // server error
    if(err){
      return next(err);
    }
    if(!User) { // login error
      req.flash('loginMessage',
      'AuthenticationError');
      return res.redirect('/login');
    }
    req.login(User, (err) => {
      if(err) {
        return next (err);
      }
      return res.redirect('/students/list');
    })
  }) (req, res, next)
}

module.exports.displayRegisterPage = (req, res, next) => {
  // check if user is not logged in
  if(!req.user){
    res.render('auth/register', {
      title: "Register",
      message: req.flash('registerMessage'),
      displayName: req.user ? req.user.displayName: ''
    })
  }
  else {
    return res.redirect('/home');
  }
}

module.exports.processRegisterPage = (req, res, next) => {
  let newUser = new User({
    username: req.body.username,
    //password req.body.password,
    email: req.body.email,
    displayName: req.body.displayName
  })
  User.register(newUser, req.body.password, (err) => {
    if(err) {
      console.log("Error inserting new user");
      if(err.name == "UserExistError") {
        req.flash('registerMessage',
        "Registration Error: User already exists"
      )}
      return res.render('auth/register', {
        title: "Register",
        message: req.flash('registerMessage'),
        displayName: req.user ? req.user.displayName: ''
      })
    }
    else {
      // if registration is successful
      return passport.authenticate('local')(req, res, () => {
        res.redirect('/students/list');
      })
    }
  })
}
module.exports.performLogout = (req, res, next) => {
  req.logout(function(err) {
    if(err) {
      return next(err);
    }
  });
  res.redirect('/home');
}
