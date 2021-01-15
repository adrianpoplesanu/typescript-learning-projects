export module router {
    export interface RouterInterface {
        routes: Array<RouterBind>; 
    }

    export class Router implements RouterInterface {
        routes: Array<RouterBind>;
    }

    class RouterBind {
        route: string;
        controller: string;
        action: string;
        method: string;
    }
}
