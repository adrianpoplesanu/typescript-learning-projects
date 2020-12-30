"use strict";
exports.__esModule = true;
var express = require("express");
var app = express();
// https://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));
app.listen(8090, function () {
    console.log('App listening on port 8090!');
});
console.log("started the server process...");
