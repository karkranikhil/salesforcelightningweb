export const htmlLoopingPageCode = {
    example1html: `<template>
<h3>for:each demo - Render list using Array</h3>
<div class="container-list">
    <div class="list-group">
        <template for:each={carList} for:item="car">
                <a href="#" class="list-group-item list-group-item-action" key={uniqueKey}>{car}</a>
        </template>
    </div>
</div>
</template>`,
    example1js: `import { LightningElement } from 'lwc';
export default class TemplateLooping extends LightningElement {
    carList = ["Ford", "Audi", "Maruti", "Hyundai", "Mercedes"]
    get uniqueKey(){
        return Math.random();   
    }
}`,
    example2html: `<template>
<h3>for:each demo - Render list using Array of Objects</h3>
<div class="container-list">
    <div class="list-group">
        <template for:each={programmingList} for:item="program">
                <a href="#" class="list-group-item list-group-item-action" key={program.id}>{program.language}</a>
        </template>
    </div>
</div>
</template>`,
    example2js: `import { LightningElement } from 'lwc';
    export default class TemplateLooping extends LightningElement {
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
    }`,
    example3html: `<template>
<h3>iterator demo - Render list using Array of Objects with values, first and last properties</h3>
    <div class="container-list">
        <div class="list-group-inline">
            <template iterator:ceo={ceoList}>
                <div key={ceo.value.id}>
                <a href="#" if:true={ceo.first} class="list-group-item list-group-item-action header" >
                    <strong>List of top companies and there CEO's : </strong>
                </a>
                <a href="#" class="list-group-item list-group-item-action" >
                    <strong>{ceo.value.company} : </strong>{ceo.value.name}
                </a>
                <a href="#" if:true={ceo.last} class="list-group-item list-group-item-action footer">
                        <strong>&copy; 2019 Lightning school salesforce </strong>
                </a>
            </div>
            </template>
        </div>
    </div>
</template>`,
    example3js: `import { LightningElement } from 'lwc';
    export default class TemplateLooping extends LightningElement {
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
    }`
};
