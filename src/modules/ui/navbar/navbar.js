import { LightningElement, api, track } from 'lwc';

export default class NavBar extends LightningElement {
    @track currentNavItem;
    @track isMobile = false
    @track showSidebar = true
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
        if(this.isMobile){
            this.showSidebar = false
        }
        
    }

    connectedCallback(){
          let x = window.matchMedia("(max-width: 400px)")
          this.myFunction(x) // Call listener function at run time
    }

    myFunction(x) {
        if (x.matches) { // If media query matches
         this.isMobile = true
         this.showSidebar = false
        } else {
         this.isMobile = false
        }
      }
    showSidebarHandler(){
        this.showSidebar = !this.showSidebar
    } 
}
