import { LightningElement, track } from 'lwc';
import { parentToChildCommunicationCode } from './parentToChildCommunicationCode.js';
export default class ParentToChildCommunication extends LightningElement {
    get parentTemplate1() {
        return parentToChildCommunicationCode.parentTemplate1;
    }
    get parentJavascript1() {
        return parentToChildCommunicationCode.parentJavascript1;
    }
    get childTemplate1() {
        return parentToChildCommunicationCode.childTemplate1;
    }
    get childJavascript1() {
        return parentToChildCommunicationCode.childJavascript1;
    }
    get childCSS1() {
        return parentToChildCommunicationCode.childCSS1;
    }

    get parentTemplate2() {
        return parentToChildCommunicationCode.parentTemplate2;
    }
    get parentJavascript2() {
        return parentToChildCommunicationCode.parentJavascript2;
    }
    get childTemplate2() {
        return parentToChildCommunicationCode.childTemplate2;
    }
    get childJavascript2() {
        return parentToChildCommunicationCode.childJavascript2;
    }
    get childCSS2() {
        return parentToChildCommunicationCode.childCSS2;
    }

    get parentTemplate3() {
        return parentToChildCommunicationCode.parentTemplate3;
    }
    get parentJavascript3() {
        return parentToChildCommunicationCode.parentJavascript3;
    }
    get childTemplate3() {
        return parentToChildCommunicationCode.childTemplate3;
    }
    get childJavascript3() {
        return parentToChildCommunicationCode.childJavascript3;
    }
    get childCSS3() {
        return parentToChildCommunicationCode.childCSS3;
    }

    get parentTemplate4() {
        return parentToChildCommunicationCode.parentTemplate4;
    }
    get parentJavascript4() {
        return parentToChildCommunicationCode.parentJavascript4;
    }
    get childTemplate4() {
        return parentToChildCommunicationCode.childTemplate4;
    }
    get childJavascript4() {
        return parentToChildCommunicationCode.childJavascript4;
    }
    get childCSS4() {
        return parentToChildCommunicationCode.childCSS4;
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
        },
        section4: {
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
