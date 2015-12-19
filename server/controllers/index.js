var models = require('../models');
var bluebird = require('bluebird');
var cors = require('cors');

var headers = {
  "access-control-allow-origin": "*",
  "access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
  "access-control-allow-headers": "Origin, content-type, accept",
  "access-control-max-age": 10, // Seconds.
  'Content-Type': "application/json"
};

module.exports = {
  messages: {
    get: function(req, res) {
      models.messages.get(function(data){
        res.header(headers).status(200).send(data);
      });
    }, // a function which handles a get request for all messages
    post: function(req, res) { //req.body.username,text,roomname -> {username,text,roomname}
      models.messages.post(req.body);
      res.header(headers).status(201).send('');
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function(req, res) {},
    post: function(req, res) {
       models.users.post(req.body.username);
       res.header(headers).status(201).end();
    }
  }
};