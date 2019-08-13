export const dataBindingCode = {
    template: `<template>
    <h2>My full name is {fullname}</h2> 
</template>`,
    Javascript: `
import { LightningElement } from 'lwc';
    export default class DataBinding extends LightningElement {
    fullname="Nikhil karkra"
}`
};
