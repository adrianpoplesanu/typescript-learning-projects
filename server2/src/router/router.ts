export module router {
    export interface RouterInterface {
        routes: Array<RouterBind>;
        addRoute(router_bind: RouterBind): void;
        addRawRoute(route: string, contoller: any, action: any, method: string): void;
    }

    export class Router implements RouterInterface {
        routes: Array<RouterBind>;
        constructor() {
            console.log("instantiating Router...");
            this.routes = new Array<RouterBind>();
        }
        addRoute(route_bind: RouterBind) {
            this.routes.push(route_bind);
        }
        addRawRoute(route: string, controller: any, action: any, method: string) {
            let route_bind = new RouterBind(route, controller, action, method);
            this.routes.push(route_bind);
        }
    }

    class RouterBind {
        route: string;
        controller: any;
        action: any;
        method: string;

        constructor(route: string, controller: any, action: any, method: string) {
            this.route = route;
            this.controller = controller;
            this.action = action;
            this.method = method;
        }
    }
}
