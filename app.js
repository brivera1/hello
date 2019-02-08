const express = require('express');
const app = new express();
const port=process.env.PORT || 3000

app.get('/', function(request, response){
    response.sendfile('index.html');
});

var server = app.listen(process.env.PORT || 5000, function () {
    var port = server.address().port;
    console.log("Express is working on port " + port);
  });