import { LightningElement, track } from 'lwc';
import { routesList, selectedRoute, urlList } from './routes';
export default class App extends LightningElement {
    @track routesList = routesList;
    @track urlList = urlList;
    @track selectedRoute = selectedRoute;

    @track currentNavigationItem =
        'introduction-to-salesforce-lightning-web-component';
    _isWindowHistoryUpdate = false;
    handleCategoryChange(event) {
        if (event) {
            this.currentNavigationItem = event.detail;
            this.routesList.forEach(item => {
                if (item.url === event.detail) {
                    item.classlist = 'active';
                    this.selectedRoute[item.value].selected = true;
                } else {
                    item.classlist = '';
                    this.selectedRoute[item.value].selected = false;
                }
            });
        } else {
            this.setRouteList(true);
        }
        this.scrollAndLocation();
    }
    setRouteList(type) {
        this.routesList.forEach(item => {
            if (item.url === this.currentNavigationItem) {
                this.selectedRoute[item.value].selected = type;
                item.classlist = type ? 'active' : '';
            } else {
                this.selectedRoute[item.value].selected = !type;
                item.classlist = '';
            }
        });
    }
    connectedCallback() {
        window.scrollTo(0, 0);
        let that = this;
        window.onpopstate = function(event) {
            if (event.state && event.state.page) {
                that._isWindowHistoryUpdate = true;
                that.setRouteList(false);
                that.currentNavigationItem = event.state.page;

                that.handleCategoryChange();
            }
        };
        if (window.location.hash) {
            const location = window.location.hash.substring(
                1,
                window.location.hash.length
            );
            if (this.urlList.indexOf(location) > -1) {
                this.currentNavigationItem = location;
                window.history.replaceState({ page: location }, null, '');
            }
        } else {
            window.history.replaceState(
                { page: this.currentNavigationItem },
                null,
                ''
            );
        }
        this.setRouteList(true);
    }
    scrollAndLocation() {
        if (!this._isWindowHistoryUpdate) {
            window.history.pushState(
                { page: this.currentNavigationItem },
                null,
                '#'.concat(this.currentNavigationItem)
            );
        }
        this._isWindowHistoryUpdate = false;
        document.body.scrollTop = document.documentElement.scrollTop = 0;
    }
}
