import express = require('express');

const app = express();

app.use(express.static('public'));

app.listen(8090, function () {
    console.log('App listening on port 8090!');
});

console.log("started the server process...");
