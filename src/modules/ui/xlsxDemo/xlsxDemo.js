import { LightningElement } from 'lwc';

import { xlsxDemoCode } from './xlsxDemoCode.js';
export default class XlsxDemo extends LightningElement {
    get xlsxDemoHTML() {
        return xlsxDemoCode.xlsxDemoHTML;
    }
    get xlsxDemoJS() {
        return xlsxDemoCode.xlsxDemoJS;
    }
    get xlsxDemoCSS() {
        return xlsxDemoCode.xlsxDemoCSS;
    }
    get xlsxMainHTML() {
        return xlsxDemoCode.xlsxMainHTML;
    }
    get xlsxMainJS() {
        return xlsxDemoCode.xlsxMainJS;
    }
    get xlsxMainMeta() {
        return xlsxDemoCode.xlsxMainMeta;
    }
    get xlsxDemoMeta() {
        return xlsxDemoCode.xlsxDemoMeta;
    }
}
