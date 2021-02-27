"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseController = void 0;
const templates_1 = require("./../templates/templates");
class BaseController {
    init() {
        console.log("test");
    }
    index() {
        return 'aaaDefault response from BaseController - mizeria ordinara nu a mers pana nu am pasat direct referinta controllerului';
    }
    index2(req, res) {
        //console.log(res);
        return 'Default response from BaseController with req/res params';
    }
    index3(req, res) {
        let renderer = new templates_1.templates.PlainTextRenderer('plain text rendered from the template renderer');
        return renderer.render();
    }
}
exports.BaseController = BaseController;
//# sourceMappingURL=base.js.map