"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var router;
(function (router) {
    class Router {
        constructor() {
            console.log("instantiating Router...");
        }
        addRoute(route_bind) {
            this.routes.push(route_bind);
        }
        addRawRoute(route, contoller, action, method) {
            let route_bind = new RouterBind();
            this.routes.push(route_bind);
        }
    }
    router.Router = Router;
    class RouterBind {
    }
})(router = exports.router || (exports.router = {}));
//# sourceMappingURL=router.js.map