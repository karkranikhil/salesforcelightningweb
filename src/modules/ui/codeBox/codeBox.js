/* eslint-disable guard-for-in */
/* eslint-disable @lwc/lwc/no-document-query */
import { LightningElement, api, track } from 'lwc';
import Prism from "prismjs";
export default class CodeBox extends LightningElement {
    constructor(){
        super()
        Prism.highlightAll();
    }
    @api code;
   @api fileName; 
   @api className; 
   @track script
    connectedCallback(){

    }
    renderedCallback(){
        Prism.highlightAll();
        let precode = this.template.querySelector('code')
        if(precode){
            Prism.highlightElement(precode);
        }
        
    }
  
}