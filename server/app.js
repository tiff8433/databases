var express = require('express');
var db = require('./db');

// Middleware
var morgan = require('morgan');
var parser = require('body-parser');

// Router
var router = require('./routes.js');

var app = express();
module.exports.app = app;

// Set what we are listening on.
app.set("port", 3000);

// Logging and parsing
app.use(morgan('dev'));
app.use(parser.json());

// Set up our routes
app.use("/classes", router);


//Request handling
// app.get('/classes/messages', function(request, response){
//   response.header(headers).status(200).send({results: messages});
// });
app.post('/classes/users', function(req, res){

});

app.post('/classes/messages', function(req, res){

//   connection.query(queryString, function(err, rows, fields) {
//     if (err) throw err;
 
//     for (var i in rows) {
//         console.log(rows[i]);
//     }
// });
  //insert new message into database
  //we got the contents of POST:
  
});



// Serve the client files
app.use(express.static(__dirname + "/../client"));

// If we are being run directly, run the server.
if (!module.parent) {
  app.listen(app.get("port"));
  console.log("Listening on", app.get("port"));
} 


