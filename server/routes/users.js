let express = require('express');
let router = express.Router();
let usersController = require('../controllers/users');

/* GET users page. */
router.get('/', usersController.displayUsersPage);

module.exports = router;