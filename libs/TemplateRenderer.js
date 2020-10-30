class TemplateRenderer {
    constructor() {
        this.templates = {};
    }

    RegisterTemplate = (selector, template) => this.templates[selector] = document.querySelector(template).innerHTML;

    Render(settings) {
        let template = this.templates[settings.template];
        Object.entries(settings.variables).forEach(item => template = template.split(`{{ ${item[0]} }}`).join(item[1]));
        document.querySelector(settings.target).innerHTML += template;
    }

    ClearTarget = selector => document.querySelector(selector).innerHTML = "";
}