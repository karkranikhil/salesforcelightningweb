import { LightningElement, track } from 'lwc';
import {slotDemoCode} from './slotDemoCode'
export default class SlotDemo extends LightningElement {

    get parentHtml(){return slotDemoCode.parentHtml}
    get parentJS(){return slotDemoCode.parentJS}
    get parentcss(){return slotDemoCode.parentcss}
    get childHTML(){return slotDemoCode.childHTML}
    get childcss(){return slotDemoCode.childcss}
    get childJS(){return slotDemoCode.childJS}
    get parentHtml1(){return slotDemoCode.parentHtml1}
    get parentJS1(){return slotDemoCode.parentJS1}
    get parentcss1(){return slotDemoCode.parentcss1}
    get childHTML1(){return slotDemoCode.childHTML1}
    get childcss1(){return slotDemoCode.childcss1}
    get childJS1(){return slotDemoCode.childJS1}

    @track tabProperty = {
        section1: {
            selected: true,
            className: 'tablinks active'
        },
        section2: {
            selected: false,
            className: 'tablinks'
        }
    };

    setTab(event) {
        let keys = Object.keys(this.tabProperty);
        keys.forEach(item => {
            if (item === event.target.name) {
                this.tabProperty[item].selected = true;
                this.tabProperty[item].className = 'tablinks active';
            } else {
                this.tabProperty[item].selected = false;
                this.tabProperty[item].className = 'tablinks';
            }
        });
    }
}