export const compToRandomCompCommunicationCode = {
    pubsub:`/* eslint-disable no-console */
    const store = {};
    /**
     * subscribers a callback for an event
     * @param {string} eventName - Name of the event to listen for.
     * @param {function} callback - Function to invoke when said event is fired.
     */
    const subscribe = (eventName, callback) => {
        if (!store[eventName]) {
            store[eventName] = new Set();
        }
        store[eventName].add(callback);
    };
    
    /**
     * unsubscribe a callback for an event
     * @param {string} eventName - Name of the event to unsubscribe from.
     * @param {function} callback - Function to unsubscribe.
     */
    const unsubscribe = (eventName, callback) => {
        if (store[eventName]) {
            store[eventName].delete(callback);
        }
    };
    
    /**
     * Publish an event to listeners.
     * @param {string} eventName - Name of the event to publish.
     * @param {*} payload - Payload of the event to publish.
     */
    const publish = (eventName, payload) => {
        if (store[eventName]) {
            store[eventName].forEach(callback => {
                try {
                    callback(payload);
                } catch (error) {
                    console.error(error);
                }
            });
        }
    };
    
    export default {
        subscribe,
        unsubscribe,
        publish
    };
    `,
    adjacentOneHtml:`<template>
    <div class="child1-section">
        <p>Child 1</p>
        <button class="btn success" onclick={buttonHandler}>Success</button>
        <button class="btn info" onclick={buttonHandler}>Info</button>
        <button class="btn warning" onclick={buttonHandler}>Warning</button>
        <button class="btn danger" onclick={buttonHandler}>Danger</button>
    </div>
</template>
`,
    adjacentOneJs:`import { LightningElement } from 'lwc';
    import pubsub from '../../lib/pubsub.js';
    export default class AdjacentOneComponent extends LightningElement {
        buttonHandler(evt) {
            this.eventPublisher(evt.target.innerText);
        }
    
        eventPublisher(data) {
            pubsub.publish('accordionTriggered', data);
        }
    }
    `,
    adjacentOneCss:`.btn {
        border: none; /* Remove borders */
        color: white; /* Add a text color */
        padding: 14px 28px; /* Add some padding */
        cursor: pointer; /* Add a pointer cursor on mouse-over */
        margin: 1rem;
    }
    
    .success {
        background-color: #4caf50;
    } /* Green */
    .success:hover {
        background-color: #46a049;
    }
    
    .info {
        background-color: #2196f3;
    } /* Blue */
    .info:hover {
        background: #0b7dda;
    }
    
    .warning {
        background-color: #ff9800;
    } /* Orange */
    .warning:hover {
        background: #e68a00;
    }
    
    .danger {
        background-color: #f44336;
    } /* Red */
    .danger:hover {
        background: #da190b;
    }
    
    .child1-section {
        border: 5px solid;
        margin: 2rem;
    }
    `,
    adjacentTwoHtml:`<template>
    <div class="child2-section">
        <p>Child 2</p>
        <template for:each={accordionList} for:item="list">
            <div key={list.id}>
                <button class={list.className}>{list.name}</button>
                <template if:true={list.selected}>
                    <div class="panel">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequatl.
                        </p>
                    </div>
                </template>
            </div>
        </template>
    </div>
</template>
`,
    adjacentTwoJs:`import { LightningElement, track, api } from 'lwc';
    import pubsub from '../../lib/pubsub.js';
    export default class AdjacentTwoComponent extends LightningElement {
        @track accordionList = [
            {
                id: 1,
                name: 'Success',
                selected: false,
                className: 'accordion success'
            },
            {
                id: 2,
                name: 'Info',
                selected: false,
                className: 'accordion info'
            },
            {
                id: 3,
                name: 'Warning',
                selected: false,
                className: 'accordion warning'
            },
            {
                id: 4,
                name: 'Danger',
                selected: false,
                className: 'accordion danger'
            }
        ];
        connectedCallback() {
            this.callsubscriber();
        }
    
        subscriberCallback = event => {
            this.accordionList.forEach(item => {
                if (item.name === event) {
                    item.selected = true;
                } else {
                    item.selected = false;
                }
            });
        };
    
        @api callsubscriber() {
            pubsub.subscribe('accordionTriggered', this.subscriberCallback);
        }
    }
    `,
    adjacentTwoCss:`.accordion {
        background-color: #eee;
        color: #444;
        cursor: pointer;
        padding: 18px;
        width: 100%;
        border: none;
        text-align: left;
        outline: none;
        font-size: 15px;
        transition: 0.4s;
    }
    
    .active,
    .accordion:hover {
        background-color: #ccc;
    }
    
    .panel {
        padding: 0 18px;
        background-color: white;
        min-height: 100px;
        overflow: hidden;
        transition: max-height 0.2s ease-out;
    }
    .success {
        background-color: #4caf50;
        color: white;
    } /* Green */
    .success:hover {
        background-color: #46a049;
        color: white;
    }
    
    .info {
        background-color: #2196f3;
        color: white;
    } /* Blue */
    .info:hover {
        background: #0b7dda;
        color: white;
    }
    
    .warning {
        background-color: #ff9800;
        color: white;
    } /* Orange */
    .warning:hover {
        background: #e68a00;
        color: white;
    }
    
    .danger {
        background-color: #f44336;
        color: white;
    } /* Red */
    .danger:hover {
        background: #da190b;
        color: white;
    }
    
    .child2-section {
        border: 5px solid;
        margin: 2rem;
    }
    `,
    parentOneHtml:`<template>
    <div class="border-5">
        <p>Parent component</p>
        <div>
            <c-adjacent-one-component></c-adjacent-one-component>
        </div>
        <div>
            <c-adjacent-two-component></c-adjacent-two-component>
        </div>
    </div>
</template>`,
    parentOneJs:`import { LightningElement } from 'lwc';
    export default class CompToCompCommunication extends LightningElement {}
`,

}