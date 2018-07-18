// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();
var myApp = require('./cool-file');
var d3TimeFormat = require('d3-time-format')
var d3 = require("d3");
// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});




//var message ={"message": "Hello json"}
var date;
var parseTime = d3.timeParse("%Y-%m-%d");
var formatDate = d3.timeFormat("%Y-%m-%d");
var formatTime = d3.timeFormat("%B %d, %Y");
var formatDateMS = d3.timeParse('%Q')
var formatMillisecond = d3.timeFormat("%Q")
app.get('/api/timestamp/:date_string?', function (req, res ) {
date = req.params.date_string
    
  var timems ;
if (!date) { 
  date = new Date();
   console.log("1: "+date);
}else if(!isNaN(date)){
  date = formatDateMS(date)
   console.log("2: "+date);
  }else{ 
          date =new Date(date)
   }
  


  res.json({ in:date, unix: date.getTime(), utc : date.toUTCString()})
})
// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});




// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});