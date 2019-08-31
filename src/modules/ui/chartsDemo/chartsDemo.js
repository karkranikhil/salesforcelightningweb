import { LightningElement } from 'lwc';
import { chartsDemoCode } from './chartsDemoCode';
export default class ChartsDemo extends LightningElement {
    get templateHTML() {
        return chartsDemoCode.templateHTML;
    }
    get templateJS() {
        return chartsDemoCode.templateJS;
    }
    get templateHTML1() {
        return chartsDemoCode.templateHTML1;
    }
    get templateCSS1() {
        return chartsDemoCode.templateCSS1;
    }
    get templateJS1() {
        return chartsDemoCode.templateJS1;
    }
    get externalConfig() {
        return chartsDemoCode.externalConfig;
    }
}
