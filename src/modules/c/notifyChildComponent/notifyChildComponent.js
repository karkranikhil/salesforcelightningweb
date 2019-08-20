import { LightningElement, track } from 'lwc';
export default class NotifyChildComponent extends LightningElement {

    @track showChildNotification = false
    childHandler(){
        this.showChildNotification = true
    }
    showNotifyParentHandler(event){
        event.preventDefault();
        const selectEvent = new CustomEvent('show', {
            bubbles: true
        });
        this.dispatchEvent(selectEvent);
    }
}
