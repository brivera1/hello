const express = require('express');
const app = new express();
const port=process.env.PORT || 3000

app.get('/', function(request, response){
    response.sendfile('index.html');
});

app.listen(port, function(){
    console.log('Node js Express js Tutorial');
  });