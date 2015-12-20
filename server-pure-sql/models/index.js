var db = require('../db');
var mysql = require('mysql');

module.exports = {
  test: 'test',
  messages: {
    get: function(callback) {
      var queryString = "SELECT username, roomname, text, createdAt " +
                        "FROM messages m " +
                        "INNER JOIN users u " +
                        "ON m.userid = u.id";
      db.query(queryString, function(err, rows, fields) {
        if (err) {
          console.log(err);
        }
        var data = {};
        data.results = rows;
        //iterate through results array
          //look up the corresponding username for each userid in the saved obj
          //add that username as another property for each element
        callback(data);
      });
    }, // a function which produces all the messages
    post: function(obj) {
      //HTTP POST request: {username: x, text: y, roomname: z}
      //id, userid, text, roomname, createdAt
      var selectQueryString = 'SELECT id FROM users '
                            + 'WHERE (username = ?)';
      var selectQueryArray = [obj.username];
      db.query(selectQueryString, selectQueryArray, function(err, rows, fields) {
        var insertQueryString = "INSERT INTO messages (userid, text, roomname, createdAt) "
                              + "VALUES (?,?,?,NOW())";
        var insertQueryArray = [rows[0].id, obj.text, obj.roomname];
        db.query(insertQueryString, insertQueryArray, function(err, rows, fields) {
          if (err) {
            console.log(err);
          }
        });
      });
    }
  }, // a function which can be used to insert a message into the database

  users: {
    // Ditto as above.
    get: function() {},
    post: function(str) {
      //on the client, prompt asks for a username
      //send a POST request to /chat/users (in controllers)
      //sends a query through models
      var insertQueryString = 'INSERT INTO users (username) '
                            + 'VALUES (?)';
      var insertQueryArray = [str];
      db.query(insertQueryString, insertQueryArray, function(err, rows, fields){
        if(err) {
          console.log(err);
        }
      })
    }
  }
};
