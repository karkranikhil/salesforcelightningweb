import { LightningElement } from 'lwc';
export default class ErrorCallbackChildComponent extends LightningElement {
    connectedCallback() {
        throw new Error('Loading of child component failed');
    }
}
