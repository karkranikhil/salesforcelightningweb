import { LightningElement } from 'lwc';
import {
    pieChartConfig,
    barChartConfig,
    donutConfigData
} from './chartsConfig';
export default class HighchartsChildComponent extends LightningElement {
    chartsInitialized = false;
    pieChartConfigData = pieChartConfig;
    barChartConfigData = barChartConfig;
    donutConfigData = donutConfigData;

    renderedCallback() {
        if (this.chartsInitialized) {
            return;
        }
        this.chartsInitialized = true;
        this.initializeCharts();
    }

    async initializeCharts() {
        /** load highcharts */
        let Highcharts = await require('highcharts');
        /** get the context of the container where you wanna upload your charts */
        let pieCtx = this.template.querySelector('.pieChartContainer');
        let barCtx = this.template.querySelector('.barChartContainer');
        let donutCtx = this.template.querySelector('.donutChartContainer');

        /** Load the charts with configurations */
        Highcharts.chart(pieCtx, this.pieChartConfigData);
        Highcharts.chart(barCtx, this.barChartConfigData);
        Highcharts.chart(donutCtx, this.donutConfigData);
    }
}
