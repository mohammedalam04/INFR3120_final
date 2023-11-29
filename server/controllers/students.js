const express = require('express');
const router = express.Router();

// connect to student model
const Student = require('../models/students');

module.exports.displayStudents = async (req,res,next)=>{ //< Mark function as async
  try{
     const studentsList = await Student.find(); //< Use of await keyword
     res.render('students/list', {
        title: 'Students List', 
        studentsList: studentsList
     });
  }catch(err){
     console.error(err);
     //Handle error
     res.render('students/list', {
        error: 'Error on server'
     });
  }
};

module.exports.addStudent = async (req,res,next)=>{
  try{
      res.render('students/add',
      {
          title:'Add Student'
      })
  }
  catch(err)
  {
      console.error(err);
      res.render('students/list',
      {
          error: 'Error on the server'
      });
  }
};

//module.exports.processEditPage = {}