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
let add_routes_listeners = function (e, r) {
    console.log(r);
    r.routes.forEach(function (route_bind) {
        console.log(route_bind.route);
    });
    app.get('/check2.txt', (req, res) => {
        // low level check, without route binds and controller/action calls
        res.send("Status 200 OK!");
    });
};
add_routes_listeners(app, r);
app.listen(8090, function () {
    console.log('App listening on port 8090!');
});
console.log("started the server process...");
//# sourceMappingURL=index.js.map