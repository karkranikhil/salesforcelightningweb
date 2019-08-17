import { LightningElement, track } from 'lwc';
export default class TemplateHideShow extends LightningElement {
    @track showText = false;
    @track hideText = false;
    @track toggleText = true;
    @track inputText = null
    showHandler() {
        this.showText = true
    }

    hideHandler(){
        this.hideText = true
    }

    toggleHandler(){
        this.toggleText = !this.toggleText
    }

    changeHandler(event){
        this.inputText = event.target.value
    }

    get checkText(){
        return this.inputText === 'Hello'
    }
}
