export const templateHideShowPageCode = {
    example1html: `<template>
    <section id="show_section">
        <h3>if:true example</h3>
        <button class="btn success" onclick={showHandler}>Click me to Show text</button>
        <template if:true={showText}>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at libero sed nunc venenatis imperdiet sed ornare turpis. Donec vitae dui eget tellus gravida venenatis. Integer fringilla congue eros non fermentum. Sed dapibus pulvinar nibh tempor porta.</p>
        </template>
    </section>
</template>`,
    example1js: `import { LightningElement, track } from 'lwc';
export default class TemplateHideShow extends LightningElement {
    @track showText = false;
    showHandler() {
        this.showText = true
    }
}`,
example2html: `<template>
    <section id="hide_section">
        <h3>if:false example</h3>
        <button class="btn success" onclick={hideHandler}>Click me to Hide text</button>
        <template if:false={hideText}>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at libero sed nunc venenatis imperdiet sed ornare turpis. Donec vitae dui eget tellus gravida venenatis. Integer fringilla congue eros non fermentum. Sed dapibus pulvinar nibh tempor porta.</p>
        </template>
    </section>
</template>`,
    example2js: `import { LightningElement, track } from 'lwc';
export default class TemplateHideShow extends LightningElement {
    @track hideText = false;
    hideHandler(){
        this.hideText = true
    }
}`,
example3html: `<template>
    <section id="toggle_section">
    <h3>Toggle example</h3>
    <p>Toggle means flip-flop, If first click hide the text another click show the text.</p>
    <button class="btn success" onclick={toggleHandler}>Click me to toggle text</button>
    <template if:true={toggleText}>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at libero sed nunc venenatis imperdiet sed ornare turpis. Donec vitae dui eget tellus gravida venenatis. Integer fringilla congue eros non fermentum. Sed dapibus pulvinar nibh tempor porta.</p>
    </template>
    </section>
</template>`,
    example3js: `import { LightningElement, track } from 'lwc';
export default class TemplateHideShow extends LightningElement {
    @track toggleText = true;
    toggleHandler(){
        this.toggleText = !this.toggleText
    }
}`,
example4html: `<template>
    <section id="conditional_section" class="mb-1">
    <h3>Conditional based Hide/show. Type 'Hello' in textbox.</h3>
        <input
        id="name"
        type="text"
        name="name"
        placeholder="Type 'Hello' to see text"
        onkeyup={changeHandler}
        value={inputText}
    />
    <div if:true={checkText}> //checkText is the getter function that return true/false based on some condition
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas vitae scel </p>
    </div>
    </section>
</template>`,
    example4js: `import { LightningElement, track } from 'lwc';
export default class TemplateHideShow extends LightningElement {
    @track inputText = null
    changeHandler(event){
        this.inputText = event.target.value
    }

    get checkText(){
        return this.inputText === 'Hello'
    }
}`
};
