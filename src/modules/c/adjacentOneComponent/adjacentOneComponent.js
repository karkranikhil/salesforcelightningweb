import { LightningElement } from 'lwc';
import pubsub from '../../lib/pubsub.js' ;
export default class AdjacentOneComponent extends LightningElement {
    buttonHandler(evt){
        this.eventPublisher(evt.target.innerText)
    }

    eventPublisher(data){
        pubsub.publish('accordionTriggered', data);
    }
}