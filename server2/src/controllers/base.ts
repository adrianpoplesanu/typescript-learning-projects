import { controller } from "./controllers"

class BaseController implements controller.ControllerInterface {
    init(): void {
        console.log("test");
    }
}
