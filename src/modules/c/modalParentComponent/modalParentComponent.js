import { LightningElement, track } from 'lwc';
export default class ModalParentComponent extends LightningElement {
    @track showModal = false;
    showHandler() {
        this.showModal = true;
    }
    modalCloseHandler() {
        this.showModal = false;
    }
}
