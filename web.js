var express = require('express');

var app = express.createServer(express.logger());
var fs = require('fs');
var bufcontent = fs.readFileSync('index.html');

//console.log("The content of index.html " + content);
app.get('/', function(request, response) {
  //response.send('Hello World2!');
  response.send(bufcontent.toString());
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
