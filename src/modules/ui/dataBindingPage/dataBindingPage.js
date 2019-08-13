import { LightningElement } from 'lwc';
import { dataBindingCode } from './dataBindingCode.js';
export default class DataBindingPage extends LightningElement {

    get Javascript() {
        return dataBindingCode.Javascript;
    }
    get template() {
        return dataBindingCode.template;
    }
}
