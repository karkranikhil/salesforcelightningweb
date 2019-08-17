import { LightningElement } from 'lwc';
import { templateHideShowPageCode } from './templateHideShowPageCode';
export default class TemplateHideShowPage extends LightningElement {
    get IfTrueDemoHTML() {
        return templateHideShowPageCode.example1html;
    }
    get IfTrueDemoJS() {
        return templateHideShowPageCode.example1js;
    }
    get IfFalseDemoHTML() {
        return templateHideShowPageCode.example2html;
    }
    get IfFalseDemoJS() {
        return templateHideShowPageCode.example2js;
    }
    get toggleDemoHTML() {
        return templateHideShowPageCode.example3html;
    }
    get toggleDemoJS() {
        return templateHideShowPageCode.example3js;
    }
    get conditionalDemoHTML() {
        return templateHideShowPageCode.example4html;
    }
    get conditionalDemoJS() {
        return templateHideShowPageCode.example4js;
    }
}
