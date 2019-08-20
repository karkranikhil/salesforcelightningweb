import { LightningElement, track } from 'lwc';
export default class NotifyParentComponent extends LightningElement {
    @track showNotification = false
    showHandler(){
        this.showNotification=true
    }
}
