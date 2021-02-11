"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseController = void 0;
class BaseController {
    init() {
        console.log("test");
    }
    index() {
        return 'aaaDefault response from BaseController - mizeria ordinara nu a mers pana nu am pasat direct referinta controllerului';
    }
    index2(req, res) {
        console.log(res);
        return 'Default response from BaseController with req/res params';
    }
}
exports.BaseController = BaseController;
//# sourceMappingURL=base.js.map