let express = require('express');
let router = express.Router();
let studentsController = require('../controllers/students');

/* Read operation */
/* Get route for the StudentsDB */
// students router is configured as /students so /list is actually /students/list
router.get('/list', studentsController.displayStudents);

/* GET route for Add Student page --> Create */
router.get('/add', studentsController.addStudent);
/* POST route for Add Student page --> Create */
router.post('/add', studentsController.processAddStudent);

/* GET route for Edit Student page --> UPDATE */
router.get('/edit/:id', studentsController.editStudent);
/* POST route for Edit Student page --> UPDATE */
router.post('/edit/:id', studentsController.processEditStudent);

/* DELETE operation */
router.get('/delete/:id', studentsController.deleteStudent);

module.exports = router;