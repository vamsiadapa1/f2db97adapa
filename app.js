var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var Game = require("./models/Game");
require('dotenv').config(); 
const connectionString =  
process.env.MONGO_CON 
mongoose = require('mongoose'); 
mongoose.connect(connectionString,  
{useNewUrlParser: true, 
useUnifiedTopology: true});
  
var db = mongoose.connection; 
 

db.on('error', console.error.bind(console, 'MongoDB connection error:')); 
db.once("open", function(){ 
  console.log("Connection to DB success")}); 

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var GameRouter = require('./routes/Game');
var gridbuildRouter = require('./routes/gridbuild');
var selectorRouter = require('./routes/selector');
var resourceRouter = require('./routes/resource');

var app = express();

 
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/Game', GameRouter);
app.use('/gridbuild', gridbuildRouter);
app.use('/selector', selectorRouter);
app.use('/resource', resourceRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

 
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// We can seed the collection if needed on server start 
async function recreateDB(){ 
  // Delete everything 
  await Game.deleteMany(); 
 
  let instance1 = new 
Game({GameName:"Monopoly",  GameType:'Board', 
GamePrice:15.99}); 
  instance1.save( function(err,doc) { 
      if(err) return console.error(err); 
      console.log("First Game data saved") 
  }); 
 
let instance2 = new 
Game({tele_name:"Marvel King",  GameType:'Board', 
GamePrice:19.99}); 
instance2.save( function(err,doc) { 
      if(err) return console.error(err); 
      console.log("Second Game data saved") 
  }); 

  let instance3 = new 
Game({GameName:"UNO",  GameType:'Card', 
GamePrice:5.99}); 
instance3.save( function(err,doc) { 
      if(err) return console.error(err); 
      console.log("Third Game data saved") 
  }); 
}
 
let reseed = true; 
if (reseed) { recreateDB();} 

module.exports = app;
