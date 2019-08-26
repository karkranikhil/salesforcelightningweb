import { LightningElement, track } from 'lwc';
import { apexCallCode } from './apexCallCode';
export default class ApexCall extends LightningElement {
    get apexcontroller() {
        return apexCallCode.controller;
    }
    get lwcHTML1() {
        return apexCallCode.lwcHTML1;
    }
    get lwcJS1() {
        return apexCallCode.lwcJS1;
    }
    get lwcCSS() {
        return apexCallCode.lwcCSS;
    }
    get lwcXML() {
        return apexCallCode.lwcXML;
    }
    get apexcontroller2() {
        return apexCallCode.controller2;
    }
    get lwcHTML2() {
        return apexCallCode.lwcHTML2;
    }
    get lwcJS2() {
        return apexCallCode.lwcJS2;
    }
    get lwcCSS2() {
        return apexCallCode.lwcCSS2;
    }
    get lwcXML2() {
        return apexCallCode.lwcXML2;
    }
    get apexcontroller3() {
        return apexCallCode.controller3;
    }
    get lwcHTML3() {
        return apexCallCode.lwcHTML3;
    }
    get lwcJS3() {
        return apexCallCode.lwcJS3;
    }
    get lwcCSS3() {
        return apexCallCode.lwcCSS3;
    }
    get lwcXML3() {
        return apexCallCode.lwcXML3;
    }

    @track tabProperty = {
        section1: {
            selected: true,
            className: 'tablinks active'
        },
        section2: {
            selected: false,
            className: 'tablinks'
        },
        section3: {
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
