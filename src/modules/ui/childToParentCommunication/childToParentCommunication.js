import { LightningElement, track } from 'lwc';
import { childToParentCommunicationCode } from './childToParentCommunicationCode';
export default class ChildToParentCommunication extends LightningElement {
    get modalParentHtml() {
        return childToParentCommunicationCode.modalParentHtml;
    }
    get modalParentJS() {
        return childToParentCommunicationCode.modalParentJS;
    }
    get modalChildHtml() {
        return childToParentCommunicationCode.modalChildHtml;
    }
    get modalChildJs() {
        return childToParentCommunicationCode.modalChildJs;
    }
    get modalChildCss() {
        return childToParentCommunicationCode.modalChildCss;
    }

    get navbarParentHtml() {
        return childToParentCommunicationCode.navbarParentHtml;
    }
    get navbarParentJS() {
        return childToParentCommunicationCode.navbarParentJS;
    }
    get navbarChildHtml() {
        return childToParentCommunicationCode.navbarChildHtml;
    }
    get navbarChildJs() {
        return childToParentCommunicationCode.navbarChildJs;
    }
    get navbarChildCss() {
        return childToParentCommunicationCode.navbarChildCss;
    }

    get notifyParentHtml() {
        return childToParentCommunicationCode.notifyParentHtml;
    }
    get notifyParentJS() {
        return childToParentCommunicationCode.notifyParentJS;
    }
    get notifyChildHtml() {
        return childToParentCommunicationCode.notifyChildHtml;
    }
    get notifyChildJs() {
        return childToParentCommunicationCode.notifyChildJs;
    }
    get notifyChildCss() {
        return childToParentCommunicationCode.notifyChildCss;
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
