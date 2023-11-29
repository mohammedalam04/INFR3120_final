let express = require('express');
let router = express.Router();
let indexController = require('../controllers/index');

/* GET home page. */
router.get('/', indexController.displayHomePage);

/* GET signup page. */
router.get('/signup', indexController.displaySignupPage);

/* GET contact page. */
router.get('/contact', indexController.displayContactPage);

module.exports = router;