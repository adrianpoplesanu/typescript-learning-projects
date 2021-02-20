"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.templates = void 0;
var templates;
(function (templates) {
    class TemplateRenderer {
    }
    templates.TemplateRenderer = TemplateRenderer;
    class PlainTextRenderer {
        constructor(text) {
            this.text = text;
        }
        render() {
            return this.text;
        }
    }
    templates.PlainTextRenderer = PlainTextRenderer;
    class JsonRenderer {
    }
    templates.JsonRenderer = JsonRenderer;
})(templates = exports.templates || (exports.templates = {}));
//# sourceMappingURL=templates.js.map