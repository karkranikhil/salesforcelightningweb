import { LightningElement } from 'lwc';
export default class TemplateLooping extends LightningElement {
    carList = ["Ford", "Audi", "Maruti", "Hyundai", "Mercedes"]
    get uniqueKey(){
        return Math.random();   
    }
    programmingList =[
        {   
            id:'06868',
            language:'HTML'
        },
        {   
            id:'19797',
            language:'CSS'
        },
        {   
            id:'298789',
            language:'Javascript'
        },
        {   
            id:'398798',
            language:'Apex'
        },
        {   
            id:'48967',
            language:'Aura'
        },
        {   
            id:'58798',
            language:'Java'
        }
    ]
    ceoList =[
        {   
            id:1,
            company:'Google',
            name:'Sundar Pichai'
        },
        {   
            id:2,
            company:'Apple Inc.',
            name:'Tim cook'
        },
        {   
            id:3,
            company:'Facebook',
            name:'Mark Zuckerberg'
        },
        {   
            id:4,
            company:'Amazon.com',
            name:'Jeff Bezos'
        },
        {
            id:5,
            company:'Capgemini',
            name:'Paul Hermelin'
        }
    ]
    
}
