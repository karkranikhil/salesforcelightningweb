export const twoWayDataBindingCode = {
    template: `<template>
    <div class="field">
        <label for="name">Enter your name:</label>
        <input id="name" type="text" name="name"  onkeyup={changeHandler}  value={name}/>
    </div>

    <div class="field">
        <label for="title">Enter your title:</label>
        <input id="title" type="text" name="title" onkeyup={changeHandler}  value={title} />
    </div>

    <div class="results">
        <h5>My name is {name} and my title is {title}</h5>
    </div>
</template>`,
    Javascript: `
import { LightningElement, track } from 'lwc';
export default class TwoWayDataBinding extends LightningElement {
    @track name = 'Nikhil karkra';
    @track title = 'Salesforce developer';

    changeHandler(event){
        this[event.target.name] = event.target.value
    }
}`
};
