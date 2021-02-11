import { controller } from "./controllers"

export class BaseController implements controller.ControllerInterface {
    init(): void {
        console.log("test");
    }

    index(): string {
        return 'aaaDefault response from BaseController - mizeria ordinara nu a mers pana nu am pasat direct referinta controllerului';
    }

    index2(req : any, res : any): string {
        console.log(res);
        return 'Default response from BaseController with req/res params';
    }
}
