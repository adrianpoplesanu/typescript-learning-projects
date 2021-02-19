"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.template = void 0;
var template;
(function (template) {
    class TemplateRenderer {
    }
    template.TemplateRenderer = TemplateRenderer;
    class PlainTextRenderer {
        constructor(text) {
            this.text = text;
        }
        render() {
            return this.text;
        }
    }
    template.PlainTextRenderer = PlainTextRenderer;
    class JsonRenderer {
    }
    template.JsonRenderer = JsonRenderer;
})(template = exports.template || (exports.template = {}));
//# sourceMappingURL=templates.js.map