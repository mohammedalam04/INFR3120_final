let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let students = require('../models/studentModel');
let studentsController = require('../controllers/students');

// READ operation
module.exports.displayStudents = async (req,res,next) => { //< Mark function as async
  try{
    const studentsList = await students.find(); //< Use of await keyword
    res.render('students/list', {
      title: 'Students List', 
      studentsList: studentsList
    });
  }
  catch(err) {
    console.error(err);
    //Handle error
    res.render('students/list', {
      error: 'Server Error'
    });
  }
};

// CREATE operation (Add)
// get add page
module.exports.addStudent = async (req,res,next) => {
  try{
    res.render('students/add',
    {
        title:'Add Student'
    })
  }
  catch(err) {
    console.error(err);
    res.render('students/list',
    {
        error: 'Server Error'
    });
  }
};

// process the add operation 
// POST operation
module.exports.processAddStudent = async (req,res,next) => {
  try{
    let newStudent = students({
        "fname":req.body.fname,
        "lname": req.body.lname,
        "age": req.body.age,
        "email": req.body.email,
        "location": req.body.location
    });
    students.create(newStudent).then(() =>{
        res.redirect('/students/list')
    })
  }
  catch(error){
    console.error(err);
    res.render('students/list',
    {
        error: 'Server Error'
    });
  }
};

// EDIT or UPDATE operation
// GET route the edit page
module.exports.editStudent = async (req,res,next) => {
  try{
    const id = req.params.id;
    const studentToEdit = await students.findById(id);
    res.render('students/edit',
    {
        title:'Edit Student',
        students: studentToEdit
    })
  }
  catch(err) {
    console.error(err);
    res.render('students/edit',
    {
        error: 'Server Error'
    });
  }
};

// POST route for update operation
module.exports.processEditStudent = async (req,res,next) => {
  try{
    let id = req.params.id;
    let updateStudent = students({
      "_id": id,
      "fname": req.body.fname,
      "lname": req.body.lname,
      "age": req.body.age,
      "email": req.body.email,
      "location": req.body.location
    });
    students.updateOne({_id:id}, updateStudent).then(() =>{
        res.redirect('/students/list')
    })
  }
  catch(err) {
    console.error(err);
    res.render('students/list',
    {
        error: 'Server Error'
    });
  }
};

// DELETE operation
// GET route to delete page
module.exports.deleteStudent = async (req,res,next) => {
  try{
    let id = req.params.id;
    students.deleteOne({_id:id}).then(() => {
      res.redirect('/students/list')
    })
  }
  catch(err) {
    console.error(err);
    res.render('students/list',
    {
        error: 'Server Error'
    });
  }
};