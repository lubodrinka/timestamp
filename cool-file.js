var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var message ={"message": "Hello json"};

//var message ={"message": "Hello json"}

app.get('/json', function (req, res ) {
  res.json(message)
})
// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});

 module.exports = app;