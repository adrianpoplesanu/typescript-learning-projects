import { router } from "./src/router/router"
import { BaseController } from "./src/controllers/base"
import express = require('express');

const app = express();

// https://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

let r = new router.Router();
r.addRawRoute("/hello", BaseController, "index", "GET");
//eval("console.log('testing eval');");

let add_routes_listeners = function (r : router.Router) {
    r.routes.forEach(function (route_bind) {
        if (route_bind.method == 'GET') {
            app.get(route_bind.route, (req, res) => {
                 let result = 'Unimplemented, check the middleware';
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
}

add_routes_listeners(r);

app.listen(8090, function () {
    console.log('App listening on port 8090!');
});

console.log("started the server process...");
