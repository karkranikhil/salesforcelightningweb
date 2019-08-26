import { LightningElement } from 'lwc';
import { helloWorldCode } from './helloWorldCode.js';
export default class HelloWorld extends LightningElement {
    get Javascript() {
        return helloWorldCode.Javascript;
    }
    get template() {
        return helloWorldCode.template;
    }
    get xml() {
        return helloWorldCode.xml;
    }
}
