let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// connect to students model
let Student = require('../models/students');

/* Read operation */
/* Get route for the StudentsDB */
router.get('/', async (req,res,next)=>{ //< Mark function as async
  try{
     const Student = await StudentsDB.find(); //< Use of await keyword
     res.render('students', {
        title: 'Students', 
        StudentsDB: StudentsDB
     });
  }catch(err){
     console.error(err);
     //Handle error
     res.render('students', {
        error: 'Error on server'
     });
  }
});

/* Add Operation */
/* Get route for displaying add page -- Create operation */
router.get('/add', (req,res,next)=>{
});
/* Post route for processing the Add page -- Create Operaton */
router.post('/add', (req,res,next)=>{
});

/* Edit Operation */
/* Get route for displaying Edit page -- Update operation */
router.get('/edit/:id', (req,res,next)=>{
});
/* Post route for processing the Edit page -- Update Operaton */
router.post('/edit/:id', (req,res,next)=>{
});

/* Delete Operation */
router.get('/delete/:id', (req,res,next)=>{
});
/* Perform delete operation  -- Delete Operaton */
module.exports = router;