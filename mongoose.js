/**
 * how to connect mongodb in node.js using mongoose ORM
 * MongoDB Resources : http://mongodb.org
 * Mongoose Resources : http://mongoosejs.com
 **/

// initialize mongoose
var mongoose = require('mongoose');

// connection mongoose to mongodb
// this just like odbc or jdbc
// in this case mongodb server at localhost
// you can change easy by replace localhost with your mongodb server
mongoose.connect('mongodb://localhost/hellomongo');

// get mongodb schema
var Schema = mongoose.Schema, ObjectId = Schema.ObjectId;

//create new Collection Schema 
// if you new to mongodb, think Collection as database table
var UserCollection = new Schema({
  username : String,
  password : String,
  last_access : Date
});

// mapping schema with model
var UserModel = mongoose.model('User', UserCollection);

// insert a new user
var heru = new UserModel();
heru.username = 'heru';
heru.password = 'heru password';
heru.last_access = new Date();

// save instance
heru.save(function(err){
  if(!err){
    console.log('user saved');
  }else{
    console.log('error while save user, err : ' + err);
  }
});
