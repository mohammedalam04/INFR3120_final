let express = require('express');  // Import the Express.js framework
let router = express.Router();    // Create an instance of the Express router

// Exporting a function named 'displayUsersPage' as part of the module.exports object
module.exports.displayUsersPage = (req, res, next)=>{   
  // Rendering the 'index' view/template with specified data
  // The data object here includes a 'title' property set to 'Users'
  res.render('index', { title: 'Users' });
}
