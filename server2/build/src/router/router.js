"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var router;
(function (router) {
    class Router {
        constructor() {
            console.log("instantiating Router...");
            this.routes = new Array();
        }
        addRoute(route_bind) {
            this.routes.push(route_bind);
        }
        addRawRoute(route, controller, action, method) {
            let route_bind = new RouterBind(route, controller, action, method);
            this.routes.push(route_bind);
        }
    }
    router.Router = Router;
    class RouterBind {
        constructor(route, controller, action, method) {
            this.route = route;
            this.controller = controller;
            this.action = action;
            this.method = method;
        }
    }
})(router = exports.router || (exports.router = {}));
//# sourceMappingURL=router.js.map