import { LightningElement, track, api } from 'lwc';
import pubsub from '../../lib/pubsub.js' ;
export default class AdjacentTwoComponent extends LightningElement {
    @track accordionList=[{
        id:1,
        name:'Success',
        selected:false,
        className:'accordion success'
    },
    {
        id:2,
        name:'Info',
        selected:false,
        className:'accordion info'
    },
    {
        id:3,
        name:'Warning',
        selected:false,
        className:'accordion warning'
    },
    {
        id:4,
        name:'Danger',
        selected:false,
        className:'accordion danger'
    }]
    connectedCallback(){
        this.callsubscriber();
    }

    subscriberCallback =(event)=>{ 
        this.accordionList.forEach(item=>{
            if(item.name === event){
                item.selected = true
            } else{
                item.selected = false
            }
        })
    }

    @api callsubscriber(){
        pubsub.subscribe('accordionTriggered', this.subscriberCallback ); 
    } 
}
