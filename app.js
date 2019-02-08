const express = require('express');
const app = new express();
const port = 3000;

app.use(express.static("./public"));

var server = app.listen(process.env.PORT || 5000, function () {
    var port = server.address().port;
    console.log("Express is working on port " + port);
  });