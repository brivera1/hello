const express = require('express');
const app = new express();

app.get('/', function(request, response){
    response.sendfile('index.html');
    var player = require('play-sound')(opts = {})

 player.play('./song.mp3', function (err) {
   if (err) throw err;
   console.log("Audio finished");
 });
});

var server = app.listen(process.env.PORT || 5000, function () {
    var port = server.address().port;
    console.log("Express is working on port " + port);
  });
