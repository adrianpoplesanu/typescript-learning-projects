export module templates {
    export interface TemplateRendererInterface {

    }

    export class TemplateRenderer implements TemplateRendererInterface {

    }

    export class PlainTextRenderer implements TemplateRendererInterface {
        text: string;

        constructor(text: string) {
            this.text = text;
        }

        render() {
            return this.text;
        }
    }

    export class JsonRenderer implements TemplateRendererInterface {

    }
}
