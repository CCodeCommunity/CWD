class TemplateRenderer {
    templates = {}
    Render(settings) {
        let template = this.templates[settings.template];
        Object.entries(settings.variables ?? {}).forEach(item => template = template.split(`{{ ${item[0]} }}`).join(item[1]));
        document.querySelector(settings.target).innerHTML += template;
    }

    RegisterTemplate = (selector, template) => this.templates[selector] = document.querySelector(template).innerHTML;
    ClearTarget = selector => document.querySelector(selector).innerHTML = "";
}