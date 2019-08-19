import { LightningElement, track } from 'lwc';
import { lifecyclePageCode } from './lifecyclePageCode.js';
export default class lifecycle extends LightningElement {
    get parentHtml1() {
        return lifecyclePageCode.parentHtml1;
    }
    get parentJs1() {
        return lifecyclePageCode.parentJs1;
    }
    get parentExtraTemplate() {
        return lifecyclePageCode.parentExtraTemplate;
    }
    get childHtml() {
        return lifecyclePageCode.childHtml;
    }
    get childJs() {
        return lifecyclePageCode.childJs;
    }
    get errorParentHtml() {
        return lifecyclePageCode.errorParentHtml;
    }
    get errorParentJs() {
        return lifecyclePageCode.errorParentJs;
    }
    get errorChildHtml() {
        return lifecyclePageCode.errorChildHtml;
    }
    get errorChildJs() {
        return lifecyclePageCode.errorChildJs;
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
