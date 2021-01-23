import { router } from "./src/router/router"
import express = require('express');

const app = express();

// https://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

let r = new router.Router();
r.addRawRoute("/hello", "BaseController", "index", "GET");
//eval("console.log('testing eval');");

let add_routes_listeners = function (r : router.Router) {

}

app.listen(8090, function () {
    console.log('App listening on port 8090!');
});

console.log("started the server process...");
