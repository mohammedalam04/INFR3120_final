let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'A_StRIveRs' });
});

/* GET signup page. */
router.get('/signup', function(req, res, next) {
  res.render('index', { 
    title: 'Sign Up' });
});

/* GET contact page. */
router.get('/contact', function(req, res, next) {
  res.render('index', { 
    title: "Contact Us" });
});

module.exports = router;
