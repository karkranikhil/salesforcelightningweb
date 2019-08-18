import { LightningElement, api } from 'lwc';
export default class AlertChildComponent extends LightningElement {
    @api message
    @api className
    @api close
    
    get alertClassName(){
        return this.className ? `alert ${this.className}` : 'alert'
    }
    get isCloseVisible(){
        return close === "true" ? true: false
    }
}
