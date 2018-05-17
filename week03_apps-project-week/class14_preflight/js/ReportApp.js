/* globals ViewingReport, ViewingChart, channels */
/* exported ReportApp */

const appTemplate = document.getElementById('app-template');

class ReportApp {
    constructor() {
        this.channels = channels;
    }

    render() {
        const dom = appTemplate.content;

        const viewingReportSection = dom.getElementById('viewing-report');
        this.viewingReportComponent = new ViewingReport(this.channels);
        const viewingReportDom = this.viewingReportComponent.render();
        viewingReportSection.appendChild(viewingReportDom);

        const viewingChartSection = dom.getElementById('viewing-chart');
        this.viewingChartComponent = new ViewingChart(this.channels);
        const viewingChartDom = this.viewingChartComponent.render();
        viewingChartSection.appendChild(viewingChartDom);

        return dom;
    }
}