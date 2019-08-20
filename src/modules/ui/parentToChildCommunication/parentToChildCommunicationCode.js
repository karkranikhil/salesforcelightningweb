export const parentToChildCommunicationCode = {
    parentTemplate1: `<template>
    <h3>Demo to show parent to child data communication using strings.</h3>
    <div>
        <c-alert-child-component message="Indicates a dangerous or potentially negative action"></c-alert-child-component>
        <c-alert-child-component class-name="success" message="Success! Indicates a successful or positive action."></c-alert-child-component>
        <c-alert-child-component class-name="info" message="Info! Indicates a neutral informative change or action."></c-alert-child-component>
        <c-alert-child-component class-name="warning" message="Warning! Indicates a warning that might need attention."></c-alert-child-component>
    </div>
</template>`,
    parentJavascript1: `
    import { LightningElement } from 'lwc';
    export default class AlertParentComponent extends LightningElement {}`,
    childTemplate1: `<template>
    <div class={alertClassName}>
        {message}
    </div>
</template>`,
    childJavascript1: `import { LightningElement, api } from 'lwc';
    export default class AlertChildComponent extends LightningElement {
        @api message
        @api className
        
        get alertClassName(){
            return this.className ? 'alert '+this.className : 'alert'
        }
    }`,
    childCSS1: `.alert {
        padding: 20px;
        background-color: #f44336;
        color: white;
        opacity: 1;
        transition: opacity 0.6s;
        margin-bottom: 15px;
      }
      
.alert.success {background-color: #4CAF50;}
.alert.info {background-color: #2196F3;}
.alert.warning {background-color: #ff9800;}`,
    parentTemplate2: `<template>
<h3>Demo to show parent to child data communication using Array of Objects.</h3>
<c-card-child-component user-details={userDetails}></c-card-child-component>
</template>`,
    parentJavascript2: `import { LightningElement } from 'lwc';
export default class CardParentComponent extends LightningElement {
    userDetails =[
        {
            name:'John Doe',
            title:'CEO & Founder',
            company:'Harvard University, example',
            buttontext:'Contact',
            imageUrl:'https://www.w3schools.com/w3images/team1.jpg'
        },
        {
            name:'Steve Smith',
            title:'CEO & Founder',
            company:'Standford University, example',
            buttontext:'Contact',
            imageUrl:'https://www.w3schools.com/w3images/team2.jpg'
        },
        {
            name:'David Warner',
            title:'CEO & Founder',
            company:'Sydney University, example',
            buttontext:'Contact',
            imageUrl:'https://www.w3schools.com/w3images/team3.jpg'
        },
        {
            name:'Peter Parker',
            title:'CEO & Founder',
            company:'Melbourne University, example',
            buttontext:'Contact',
            imageUrl:'https://www.w3schools.com/w3images/team4.jpg'
        }
        
        ]
}
`,
    childTemplate2: `<template>
<template for:each={userDetails} for:item="user">
    <div class="card" key={user.name}>
        <img src={user.imageUrl} alt={user.name} style="width:100%">
        <h1>{user.name}</h1>
        <p class="title">{user.title}</p>
        <p>{user.company}</p>
        <p><button>{user.buttontext}</button></p>
    </div>
</template>
</template>
`,
    childJavascript2: `import { LightningElement, api } from 'lwc';
export default class CardChildComponent extends LightningElement {
    @api userDetails
}`,
    childCSS2: `:host{
    display: flex;
}
.card {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    max-width: 300px;
    margin: 10px;
    text-align: center;
    font-family: arial;
  }
  
  .title {
    color: grey;
    font-size: 18px;
  }
  
  button {
    border: none;
    outline: 0;
    display: inline-block;
    padding: 8px;
    color: white;
    background-color: #000;
    text-align: center;
    cursor: pointer;
    width: 100%;
    font-size: 18px;
  }
  
  a {
    text-decoration: none;
    font-size: 22px;
    color: black;
  }
  
  button:hover, a:hover {
    opacity: 0.7;
  }`,
    parentTemplate3: `<template>
<div class="field">
    <label for="name">Enter your percentage:</label>
    <input
        id="percentage"
        type="number"
        min="0"
        max="100"
        name="percentage"
        onkeyup={changeHandler}
        value={percentage}
    />
</div>
<c-progress-bar-child-component percentage={percentage} ></c-progress-bar-child-component>
</template>
`,
    parentJavascript3: `import { LightningElement, track } from 'lwc';
export default class ProgressBarParentComponent extends LightningElement {
    @track percentage = 10
    changeHandler(event){
        this[event.target.name] = event.target.value <= 100? event.target.value : 100;
    }
}
`,
    childTemplate3: `<template>
<div class="myProgress">
    <div class={className} style={getStyle}>{percentage}</div>
</div>
</template>`,
    childJavascript3: `import { LightningElement, api, track } from 'lwc';
export default class ProgressBarChildComponent extends LightningElement {
    defaultColor ="myBar";
    @track className = this.defaultColor;
    @api percentage;

    get getStyle() {
        return 'width:'+this.percentage+'%';
    }
}
`,
    childCSS3: `.myProgress {
    width: 100%;
    background-color: #ddd;
}
  
.myBar {
  height: 50px;
  background-color: #4CAF50;
  text-align: center;
  line-height: 50px;
  color: white;
}
.danger{
  background-color: #f00;
}`,
    parentTemplate4: `<template>
<button class="btn danger" onclick={changeColor}>Click me to change progress bar color</button>
<c-progress-bar-child-component percentage={percentage} ></c-progress-bar-child-component>
</template>`,
    parentJavascript4: `import { LightningElement, track } from 'lwc';
export default class ProgressBarParentComponent extends LightningElement {
    @track percentage = 10
    changeColor() {
        this.template.querySelector('c-progress-bar-child-component').changeBarColor();
    }
}
`,
    childTemplate4: `<template>
<div class="myProgress">
    <div class={className} style={getStyle}>{percentage}</div>
</div>
</template>`,
    childJavascript4: `import { LightningElement, api, track } from 'lwc';
export default class ProgressBarChildComponent extends LightningElement {
    defaultColor ="myBar";
    dangerColor = "myBar danger";
    @track className = this.defaultColor;
    @api percentage;

    get getStyle() {
        return 'width:'+this.percentage+'%';
    }

    @api changeBarColor(){
        this.className =this.className === this.defaultColor ? this.dangerColor : this.defaultColor;
    }
}
`,
    childCSS4: `.myProgress {
    width: 100%;
    background-color: #ddd;
}
  
.myBar {
  height: 50px;
  background-color: #4CAF50;
  text-align: center;
  line-height: 50px;
  color: white;
}
.danger{
  background-color: #f00;
}`
};
