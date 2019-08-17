import { LightningElement } from 'lwc';
import { htmlLoopingPageCode } from './htmlLoopingPageCode'
export default class TemplateLoopingPage extends LightningElement {
    get forEachArrayHtml() {
        return htmlLoopingPageCode.example1html;
    }
    get forEachArrayJs() {
        return htmlLoopingPageCode.example1js;
    }
    get forEachArrayObjHtml() {
        return htmlLoopingPageCode.example2html;
    }
    get forEachArrayObjJs() {
        return htmlLoopingPageCode.example2js;
    }
    get iteratorHtml() {
        return htmlLoopingPageCode.example3html;
    }
    get iteratorJs() {
        return htmlLoopingPageCode.example3js;
    }
}
