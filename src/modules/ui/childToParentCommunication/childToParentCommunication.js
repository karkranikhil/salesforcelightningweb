import { LightningElement, track } from 'lwc';
export default class ChildToParentCommunication extends LightningElement {
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
