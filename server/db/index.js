var mysql = require('mysql');
var Sequelize = require("sequelize");
var db = new Sequelize("chat", "root", "");


// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".


var User = db.define('User', {
  username: {
    type: Sequelize.STRING,
    unique: true,
  },
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  }
});

var Message = db.define('Message', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  }, 
  text: Sequelize.STRING,
  roomname: Sequelize.STRING
});

Message.belongsTo(User);

User.sync();
Message.sync();

exports.User = User;
exports.Message = Message;