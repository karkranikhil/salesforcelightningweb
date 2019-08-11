import { LightningElement, api, track } from 'lwc';

export default class NavBar extends LightningElement {
    @track currentNavItem;
    @api set navLists(value) {
        this._navList = value;
    }
    get navLists() {
        return this._navList;
    }

    // @api
    // set selectedItem(value) {
    //     if (value && this.currentNavItem !== value) {
    //         this.styleNavItem(this.currentNavItem, value);
    //         this.currentNavItem = value;
    //     }
    // }
    // get selectedItem() {
    //     return this.currentNavItem;
    // }

    handleNavItemClick(event) {
        let selectedValue = event.currentTarget.dataset.value;
        event.preventDefault();
        this.dispatchEvent(
            new CustomEvent('categorychange', {
                detail: selectedValue,
                bubbles: true
            })
        );
    }
}
