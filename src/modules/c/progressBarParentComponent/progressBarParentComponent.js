import { LightningElement, track, api } from 'lwc';
export default class ProgressBarParentComponent extends LightningElement {
    @api example1;
    @api example2;
    @track percentage = 50;
    changeHandler(event) {
        this[event.target.name] =
            event.target.value <= 100 ? event.target.value : 100;
    }
    changeColor() {
        this.template
            .querySelector('c-progress-bar-child-component')
            .changeBarColor();
    }
}
