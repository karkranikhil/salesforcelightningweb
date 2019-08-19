import { LightningElement, track } from 'lwc';
export default class ErrorCallbackParentComponent extends LightningElement {
    @track showChild = false;
    @track error = null;
    errorCallback(error) {
        this.error = error.message;
    }
    toggleRendering() {
        this.showChild = true;
    }
}
