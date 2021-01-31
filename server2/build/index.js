"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const router_1 = require("./src/router/router");
const base_1 = require("./src/controllers/base");
const express = require("express");
//import * as ts from "typescript";
const app = express();
// https://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));
//class BaseController {
//    index() : string {
//        return 'bla bla bla';
//    }
//}
//console.log('aaa');
//let a = new BaseController();
//console.log(a.index());
//console.log('bbb');
let r = new router_1.router.Router();
r.addRawRoute("/hello", base_1.BaseController, "index", "GET");
//eval("console.log('testing eval');");
let add_routes_listeners = function (r) {
    //console.log(r);
    r.routes.forEach(function (route_bind) {
        //console.log(route_bind.route);
        //console.log(route_bind.controller);
        //console.log(route_bind.action);
        //console.log(route_bind.method);
        if (route_bind.method == 'GET') {
            app.get(route_bind.route, (req, res) => {
                //console.log('aaa');
                //let a = new BaseController();
                //console.log(a.index());
                //console.log('bbb');
                let result = 'Unimplemented, check the middleware';
                //let controller;
                //let code = ts.transpile('controller = new BaseController();');
                //let runnable :any = eval(code);
                //console.log(runnable);
                //eval('console.log("nu gaseste BaseController cand o fac cu eval");');
                //eval('let controller = new BaseController();');
                //eval('controller = new ' + route_bind.controller + '();'); // this does not work, it can't find the class, why?
                let controller = new route_bind.controller();
                eval('result = controller.' + route_bind.action + '();');
                res.send(result);
            });
        }
    });
    app.get('/check2.txt', (req, res) => {
        // low level check, without route binds and controller/action calls
        res.send("Status 200 OK!");
    });
};
add_routes_listeners(r);
app.listen(8090, function () {
    console.log('App listening on port 8090!');
});
console.log("started the server process...");
//# sourceMappingURL=index.js.map