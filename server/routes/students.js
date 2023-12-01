let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let students = require('../models/studentModel');
let studentsController = require('../controllers/students');

function requireAuth(req, res, next) {
  if(!req.isAuthenticated()){
    return res.redirect('/login');
  }
  next();
}

/* Read operation */
/* Get route for the StudentsDB */
// students router is configured as /students so /list is actually /students/list
router.get('/list', studentsController.displayStudents);

/* GET route for Add Student page --> Create */
router.get('/add', requireAuth, studentsController.addStudent);
/* POST route for Add Student page --> Create */
router.post('/add', requireAuth, studentsController.processAddStudent);

/* GET route for Edit Student page --> UPDATE */
router.get('/edit/:id', requireAuth, studentsController.editStudent);
/* POST route for Edit Student page --> UPDATE */
router.post('/edit/:id', requireAuth, studentsController.processEditStudent);

/* DELETE operation */
router.get('/delete/:id', requireAuth, studentsController.deleteStudent);

module.exports = router;