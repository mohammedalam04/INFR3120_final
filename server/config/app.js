// installed 3rd party packages
let createError = require('http-errors');
let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');
let router = express.Router();

let app = express();

let session = require('express-session');
let passport = require('passport');
let passportLocal = require('passport-local');
let localStrategy = passportLocal.Strategy;
let flash = require('connect-flash');

// create a user model instance
let userModel = require('../models/user');
let user = userModel.User;

// view engine setup
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../../public')));
app.use(express.static(path.join(__dirname, '../../node_modules')));

// configure mongoDB
let mongoose = require('mongoose');
let DB = require('./db');

// point mongoose to DB URI
mongoose.connect(DB.URI);
let mongoDB = mongoose.connection;
mongoDB.on('error', console.error.bind(console, 'MongoDB Connection Error'));
mongoDB.once('open', ()=> {
  console.log('Connected to MongoDB');
});

// Set-up an express session
app.use(session({
  secret: "somesecret",
  saveUninitialized: false,
  resave: false
}))

// initialize flash
app.use(flash());

// implement a user authentication strategy
passport.use(user.createStrategy());

// serialize and deserialize the user's information
passport.serializeUser(user.serializeUser());
passport.deserializeUser(user.deserializeUser());

// initialize passport
app.use(passport.initialize());
app.use(passport.session());

// routers
let indexRouter = require('../routes/index');
let studentsRouter = require('../routes/students');
let usersRouter = require('../routes/users');
const { resourceUsage } = require('process');

app.use('/', indexRouter);
app.use('/students', studentsRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error',
  {
    title:"Error"
  }
  );
});

module.exports = app;