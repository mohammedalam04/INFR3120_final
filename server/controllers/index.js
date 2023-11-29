let express = require('express');
let router = express.Router();

module.exports.displayHomePage = (req, res, next)=>{
  res.render('index', { title: 'A_StRIveRs' });
}

module.exports.displaySignupPage = (req, res, next)=>{
  res.render('index', { title: 'Sign Up' });
}

module.exports.displayContactPage = (req, res, next)=>{
  res.render('index', { title: "Contact Us" });
}