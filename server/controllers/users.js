let express = require('express');
let router = express.Router();

module.exports.displayUsersPage = (req, res, next)=>{
  res.render('index', { title: 'Users' });
}