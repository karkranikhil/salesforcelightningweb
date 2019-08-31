export const slotDemoCode = {
    parentHtml:`<template>
    <div class="parent-section">
        <h4>I am parent component</h4>
        <c-slot-child-component>
            <h1>Content from parent component passing through slot</h1>
        </c-slot-child-component>
    </div>
</template>`,
parentJS:`import { LightningElement } from 'lwc';
export default class SlotParentComponent extends LightningElement {}`,
parentcss:`.parent-section{
    border: 5px solid black;
    padding: 0 15px;
}`,
childHTML:`<template>
<div class="child-section">
    <h4>I am a child component</h4>
    <div>
        <slot></slot>
    </div>
</div>
</template>`,
childJS:`import { LightningElement } from 'lwc';
export default class SlotChildomponent extends LightningElement {}`,
childcss:`.child-section{
    border: 5px solid red;
    margin-bottom: 1rem;
    padding: 1rem;
}`,
parentHtml1:`<template>
    <div class="parent-section">
    <h4>I am parent component</h4>
    <c-slot-child-component>
        <p slot="content1">I am Content1 from parent component passing through <strong>named slot content1</strong></p>
        <p slot="content2">I am Content2 from parent component passing through <strong>named slot content2</strong></p>
        <p>I am Content3 from parent component passing through <strong>unnamed slot</strong></p>
    </c-slot-child-component>
</div>
</template>`,
parentJS1:`import { LightningElement } from 'lwc';
export default class SlotParentComponent extends LightningElement {}`,
parentcss1:`.parent-section{
    border: 5px solid black;
    padding: 0 15px;
}`,
childHTML1:`<template>
<div class="child-section">
            <h4>I am a child component</h4>
            <div>
                <slot name="content1"></slot>
                <slot name="content2"></slot>
                <slot></slot>
            </div>
        </div>
</template>`,
childJS1:`import { LightningElement } from 'lwc';
export default class SlotChildomponent extends LightningElement {}`,
childcss1:`.child-section{
    border: 5px solid red;
    margin-bottom: 1rem;
    padding: 1rem;
}`
}