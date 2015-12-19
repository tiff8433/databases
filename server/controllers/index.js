var models = require('../models');
var bluebird = require('bluebird');
var cors = require('cors');
var mysql = require('mysql');


var headers = {
  "access-control-allow-origin": "*",
  "access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
  "access-control-allow-headers": "Origin, content-type, accept",
  "access-control-max-age": 10, // Seconds.
  'Content-Type': "application/json"
};

var dbConnection = mysql.createConnection({
  user: "root",
  password: "",
  database: "chat"
});

module.exports = {
  messages: {
    get: function(req, res) {

      //{results: [{msgObj1}, {msgObj2}, ...]}

      var queryString = "SELECT * FROM messages";
      dbConnection.query(queryString, function(err, rows, fields) {
        if (err) {
          console.log(err);
        }
        var data = {};
        data.results = rows;
        res.header(headers).status(200).send(data);
      });
    }, // a function which handles a get request for all messages
    post: function(req, res) {
        var queryString = "INSERT INTO messages VALUES (?,?,?,NOW())";
        var queryArray = [req.body.username, req.body.text, req.body.roomname];
        dbConnection.query(queryString, queryArray, function(err, rows, fields) {
          if (err) {
            console.log(err);
          }
        });
        res.header(headers).status(201).send('');
      } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function(req, res) {},
    post: function(req, res) {
      res.header(headers).status(201).end();
    }
  }
};
