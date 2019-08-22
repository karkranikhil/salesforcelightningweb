export const childToParentCommunicationCode = {
    modalParentHtml: `<template>
    <button class="btn success" onclick={showHandler}>Open Modal</button>
    <template if:true={showModal}>
        <c-modal-component
            header-text="Message !!"
            body-text="This Modal is a child component. Triggered from parent and on click of Close button it will dispatch an event to parent handler and that close the modal"
            onclose={modalCloseHandler}
        >
        </c-modal-component>
    </template>
</template>
`,
    modalParentJS: `import { LightningElement, track } from 'lwc';
export default class ModalParentComponent extends LightningElement {
    @track showModal = false;
    showHandler() {
        this.showModal = true;
    }
    modalCloseHandler() {
        this.showModal = false;
    }
}`,
modalChildHtml: `<template>
    <div id="myModal" class="modal">
        <div class="modal-content">
            <header>
                <strong>{headerText}</strong>
            </header>
            <p>{bodyText}</p>
            <footer class="text-right">
                <button class="btn danger" onclick={closeHandler}>Close</button>
            </footer>
        </div>
    </div>
</template>`,
modalChildJs: `import { LightningElement, api } from 'lwc';
export default class ModalComponent extends LightningElement {
    @api headerText;
    @api bodyText;
    closeHandler() {
        this.dispatchEvent(new CustomEvent('close'));
    }
}`,
modalChildCss:`/* The Modal (background) */
.modal {
    display: block; 
    position: fixed; /* Stay in place */
    z-index: 1; /* Sit on top */
    padding-top: 100px; /* Location of the box */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    background-color: rgb(0, 0, 0); /* Fallback color */
    background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
}

/* Modal Content */
.modal-content {
    background-color: #fefefe;
    margin: auto;
    padding: 20px;
    border: 1px solid #888;
    width: 80%;
}
.btn {
    border: none;
    color: white;
    padding: 14px 28px;
    font-size: 16px;
    cursor: pointer;
}
.danger {
    background-color: #f44336;
} 
.danger:hover {
    background: #da190b;
}
.text-right {
    text-align: right;
}
`,

navbarParentHtml: `<template>
<h3>select your favourite cricketer in child component and see details in parent component</h3>
<div class="flex">
    <p>I am parent component</p>
    <c-navbar-component nav-list={navList} onselection={selectedNavHandler}></c-navbar-component>
    <template if:true={selectedPlayer}>
        <div class="card">
            <img src={selectedPlayer.imgUrl} alt="Avatar" style="width:100%"/>
            <div class="container">
                <p><strong>Player Name:</strong> {selectedPlayer.name}</p>
                <p><strong>Ranking:</strong> {selectedPlayer.position}</p>
                <p><strong>country:</strong> {selectedPlayer.country}</p>
                <p><strong>Rating:</strong> {selectedPlayer.rating}</p>
            </div>
        </div>
    </template>
</div>
</template>
`,
navbarParentJS: `import { LightningElement, track } from 'lwc';
export default class NavParentComponent extends LightningElement {
    @track pageName = null;
    @track selectedPlayer = null;
    navList = [
        {
            id: 1,
            name: 'Virat Kohli',
            imgUrl:
                'https://www.cricbuzz.com/a/img/v1/152x152/i1/c170661/virat-kohli.jpg',
            country: 'India',
            rating: '922',
            position: '1',
            selected: false
        },
        {
            id: 2,
            name: 'Steven Smith',
            imgUrl:
                'https://www.cricbuzz.com/a/img/v1/152x152/i1/c170624/steven-smith.jpg',
            country: 'Australia',
            rating: '913',
            position: '2',
            selected: false
        },
        {
            id: 3,
            name: 'Kane Williamson',
            imgUrl:
                'https://www.cricbuzz.com/a/img/v1/152x152/i1/c170733/kane-williamson.jpg',
            country: 'New Zealand',
            rating: '887',
            position: '3',
            selected: false
        },
        {
            id: 4,
            name: 'Joe Root',
            imgUrl:
                'https://www.cricbuzz.com/a/img/v1/152x152/i1/c170942/joe-root.jpg',
            country: 'England',
            rating: '710',
            position: '4',
            selected: false
        },
        {
            id: 5,
            name: 'David Warner',
            imgUrl:
                'https://www.cricbuzz.com/a/img/v1/152x152/i1/c170635/david-warner.jpg',
            country: 'Australia',
            rating: '687',
            position: '5',
            selected: false
        }
    ];
    selectedNavHandler(event) {
        const playerName = event.detail;
        this.selectedPlayer = this.navList.find(
            item => item.name === playerName
        );
    }
}
`,
navbarChildHtml: `<template>
<p>I am Child component</p>
<div class="vertical-menu">
    <template for:each={navList} for:item="list">
        <a
            href="javascript:void(0);"
            class={list.className}
            name={{list.name}}
            key={list.id}
            onclick={handleNavSelection}
            >{list.name}</a
        >
    </template>
</div>
</template>
`,
navbarChildJs: `import { LightningElement, api } from 'lwc';
export default class NavbarComponent extends LightningElement {
    @api navList;
    handleNavSelection(event) {
        event.preventDefault();
        const selectEvent = new CustomEvent('selection', {
            detail: event.target.name
        });
        // Fire the custom event
        this.dispatchEvent(selectEvent);
    }
}
`,
navbarChildCss:`:host {
    border: 5px solid red;
    padding: 2rem;
    margin: 2rem;
}
.vertical-menu {
    width: 200px;
}

.vertical-menu a {
    background-color: #00354e;
    border: 1px solid white;
    color: white;
    display: block;
    padding: 12px;
    text-decoration: none;
}

.vertical-menu a:hover {
    background-color: #ccc;
}

.vertical-menu a.active {
    background-color: #01344e;
    color: white;
}
`,

notifyParentHtml: `<template>
<div class="parent-section" onshow={showHandler}>
    <p>I am parent component</p>
    <template if:true={showNotification}>
        <div class="notificationbox">
            <span>Notification from Child. Event bubbled successfully!</span>
        </div>
    </template>
    <c-notify-child-component></c-notify-child-component>
</div>
</template>
`,
notifyParentJS: `import { LightningElement, track } from 'lwc';
export default class NotifyParentComponent extends LightningElement {
    @track showNotification = false;
    showHandler() {
        this.showNotification = true;
    }
}
`,
notifyChildHtml: `<template>
<div class="child-section">
    <p>I am child component</p>
    <template if:true={showChildNotification}>
        <div class="notificationbox">
            <span>Notification in Child component. Event bubbled till parent
                element in same component</span>
        </div>
    </template>
    <div class="content" onclick={childHandler}>
        <button class="btn" onclick={showNotifyParentHandler}>
            Click me to send notification to parent component using event
            bubbling
        </button>
    </div>
</div>
</template>
`,
notifyChildJs: `import { LightningElement, track } from 'lwc';
export default class NotifyChildComponent extends LightningElement {
    @track showChildNotification = false;
    childHandler() {
        this.showChildNotification = true;
    }
    showNotifyParentHandler(event) {
        event.preventDefault();
        const selectEvent = new CustomEvent('show', {
            bubbles: true
        });
        this.dispatchEvent(selectEvent);
    }
}
`,
notifyChildCss:`.notificationbox {
    background-color: #43a047;
    color: #fff;
    display: flex;
    padding: 16px 16px;
    flex-grow: 1;
    flex-wrap: wrap;
    align-items: center;
    border-radius: 4px;
    flex-grow: initial;
    max-width: 80%;
    margin-bottom: 1rem;
}
.parent-section {
    border: 5px solid black;
    padding: 2rem;
}
`
};
