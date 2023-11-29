const express = require('express');
const router = express.Router();

// connect to student model
const Student = require('../models/students');
const studentsController = require('../controllers/students');

/* Read operation */
/* Get route for the StudentsDB */
router.get('/', studentsController.displayStudents);

router.get('/add', studentsController.addStudent);

//router.post('/edit/:id', studentsController.processEditPage)

module.exports = router;