var express = require('express');
var path = require('path');
var app = new express();
var open = require('open');

app.use(express.static(path.join(__dirname)));


app.get('/', function (req, res, next){
  res.sendFile(path.join(__dirname+'/views/index.html'));

  // When something happens right redirect to next thing /test2
});

app.post('/', function(req, res, next){
  console.log('I got a post request!');
  res.end();
});


app.post('/test2', function (req, res, next){
  open('http://localhost:3000/test2');
  res.end()
});

app.get('/test2', function(req, res, next){
  res.sendFile(path.join(__dirname+'/views/test2.html'));

});

app.post('/test3', function (req, res, next){
  open('http://localhost:3000/test3');
  res.end()
});

app.get('/test3', function(req, res, next){
  res.sendFile(path.join(__dirname+'/views/test3.html'));

});



app.listen(3000, function(){
  console.log('Server is running on port 3000');
});
