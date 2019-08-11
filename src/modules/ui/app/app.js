import { LightningElement, track } from 'lwc';
import { routesList, selectedRoute } from './routes';
export default class App extends LightningElement {
    @track routesList = routesList;
    @track selectedRoute = selectedRoute;

    @track currentNavigationItem = 'hello';
    handleCategoryChange(event) {
        this.currentNavigationItem = event.detail;
        this.routesList.forEach(item => {
            if (item.value === event.detail) {
                item.classlist = 'active';
                this.selectedRoute[item.value].selected = true;
            } else {
                item.classlist = '';
                this.selectedRoute[item.value].selected = false;
            }
        });
    }
}
