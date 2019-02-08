const express = require('express');
const app = new express();

app.get('/', function(request, response){
    response.sendfile('index.html');
});

app.listen(3000, () => console.log('Server running on port 3000'))