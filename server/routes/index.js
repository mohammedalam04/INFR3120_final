let express = require('express');
let router = express.Router();
let indexController = require('../controllers/index');
const passport = require('passport');
let DB = require('../config/db');
let userModel = require('../models/user');
let User = userModel.User;

/* GET home page. */
router.get('/', indexController.displayHomePage);

/* GET home page. */
router.get('/home', indexController.displayHomePage);

/* GET signup page. */
router.get('/signup', indexController.displaySignupPage);

/* GET contact page. */
router.get('/contactus', indexController.displayContactPage);

/* GET login page. */
router.get('/login', indexController.displayLoginPage);
/* POST login page. */
router.post('/login', indexController.processLoginPage);

/* GET Registration page. */
router.get('/register', indexController.displayRegisterPage);
/* POST Registration page. */
router.post('/register', indexController.processRegisterPage);

/* GET logout page. */
router.get('/logout', indexController.performLogout);

module.exports = router;
