var db = require('../db');
var mysql = require('mysql');



module.exports = {

  test: 'test',
  messages: {
    get: function(callback) {
        db.Message.findAll({ include: [db.User] })
        .then(function(data, err){
          console.log(data);
          callback({results: data});
        });
    }, // a function which produces all the messages
    post: function(obj) {
      db.User.findOrCreate({where: {username: obj.username}})
        .then(function(user, err){
          var params = {
            text: obj.text,
            UserId: user.id,
            roomname: obj.roomname
          };
          db.Message.create(params).
          then(function(results, err) {
            if(err) {
              console.log(err);
            }
          })
        });
    }
  }, // a function which can be used to insert a message into the database

  users: {
    // Ditto as above.
    get: function(callback) {
      db.User.findAll()
        .then(function(results, err){
          console.log(results);
          callback(results);
        });
    },
    post: function(str, res) {
      db.User.create({username: str})
        .then(function(user, err){
          if(err) {
            console.log(err);
          }
        });
    }
  }
};
