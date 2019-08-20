export const lifecyclePageCode = {
    parentHtml1: `<template>
    <div>
        <div class="parent-section">
            <h4>Parent lifecycle hooks on load</h4>
            <div class="box success"><strong>constructor :</strong> {constructorProperty}</div>
            <div class="box info"><strong>connectedCallback :</strong> {connectedCallbackProperty}</div>
            <div class="box warning"><strong>renderedCallback :</strong> {renderedCallbackProperty}</div>
            <div class="flex">
                <button class={getClassName} onclick={toggleRendering}>{getBtnText}</button>
                <button class="btn" onclick={renderTemplate}>trigger render hook</button>
            </div>
        </div>
        
        <template if:true={showChild}>
            <c-lifecycle-child-component></c-lifecycle-child-component>
        </template>
    </div>
</template>`,
    parentJs1: `import { LightningElement, track } from 'lwc';
import {default as mainTemplate} from './lifecycleParentComponent.html'
import {default as anotherTemplate} from './template/exampleTemplate.html'
export default class lifecycleParentComponent extends LightningElement {
    constructorProperty = null
    connectedCallbackProperty = null
    @track renderedCallbackProperty = null
    @track renderedCallbackCount=0
    @track showChild=false
    @track useAnotherTemplate = false
    constructor(){
        super()
        this.constructorProperty='contructor loaded successfully !!''
       
    }
    connectedCallback(){
        // fires when a component is inserted into the DOM
        this.connectedCallbackProperty='connectedCallback loaded successfully !!'
        
    }
    render() {
        return this.useAnotherTemplate ?  anotherTemplate:mainTemplate
    }
    renderedCallback(){
        //fires when component has finished the rendering phase (inclucing child)
        // change in any property trigger again this hook
        this.renderedCallbackProperty='renderedCallback loaded successfully !!'
    }

    // demo related methods
    toggleRendering(){
        this.showChild = !this.showChild
    }
    renderTemplate(){
        this.useAnotherTemplate = !this.useAnotherTemplate
    }
    get getClassName(){
        return this.showChild ? 'btn childBtn red': 'btn childBtn'
    }
    get getBtnText(){
        return this.showChild ? 'Click me to remove child':'Click me to render child';
    }
}`,
    parentExtraTemplate: `<template>
<p>I am from exampleTemplate</p>
<button class="btn" onclick={renderTemplate}>Go Back</button>
</template>`,
    childHtml: `<template>
<div class="child-section">
    <h4>Child lifecycle hooks on load</h4>
    <div class="box success"><strong>Child constructor :</strong> {constructorProperty}</div>
    <div class="box info"><strong>Child connectedCallback :</strong> {connectedCallbackProperty}</div>
    <div class="box warning"><strong>Child renderedCallback :</strong> {renderedCallbackProperty}</div>
</div>
</template>`,
    childJs: `import { LightningElement, track } from 'lwc';
export default class lifecycleChildComponent extends LightningElement {
    constructorProperty = null
    connectedCallbackProperty = null
    @track renderedCallbackProperty = null
    constructor(){
        super()
        this.constructorProperty="Child contructor loaded successfully !!"
    }
    connectedCallback(){
        // fires when a component is inserted into the DOM
        
        this.connectedCallbackProperty="Child connectedCallback loaded successfully !!"
        throw new Error('Whoops!');
    }
    
    renderedCallback(){
        //fires when component has finished the rendering phase (inclucing child)
        this.renderedCallbackProperty="Child renderedCallback loaded successfully !!"
        
    }
    disconnectedCallback(){
        alert('Child disconnectedCallback called !!')
    }
}`,
    errorParentHtml: `<template>
<button class="btn childBtn" onclick={toggleRendering}>Click me to load child component</button>
<template if:true={showChild}>
        <div class="box danger">Error in child component! - <strong>{error}</strong></div>
        <c-error-callback-child-component></c-error-callback-child-component>
</template>

</template>`,
    errorParentJs: `import { LightningElement, track } from 'lwc';
export default class ErrorCallbackParentComponent extends LightningElement {
    @track showChild=false
    @track error = null
    errorCallback(error){
        this.error = error.message
     }
     toggleRendering(){
        this.showChild = true
     }
}`,
    errorChildHtml: `<template>
</template>`,
    errorChildJs: `import { LightningElement } from 'lwc';
export default class ErrorCallbackChildComponent extends LightningElement {
        connectedCallback() {
           throw new Error('Loading of child component failed');
        }
}`
};
