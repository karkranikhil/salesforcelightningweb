import { LightningElement } from 'lwc';
import { twoWayDataBindingCode } from './twoWayDataBindingPageCode.js';
export default class TwoWayDataBindingPage extends LightningElement {
    get Javascript() {
        return twoWayDataBindingCode.Javascript;
    }
    get template() {
        return twoWayDataBindingCode.template;
    }
}
