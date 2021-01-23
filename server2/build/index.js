"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const router_1 = require("./src/router/router");
const express = require("express");
const app = express();
// https://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));
let r = new router_1.router.Router();
r.addRawRoute("/hello", "BaseController", "index", "GET");
//eval("console.log('testing eval');");
let add_routes_listeners = function (r) {
};
app.listen(8090, function () {
    console.log('App listening on port 8090!');
});
console.log("started the server process...");
//# sourceMappingURL=index.js.map