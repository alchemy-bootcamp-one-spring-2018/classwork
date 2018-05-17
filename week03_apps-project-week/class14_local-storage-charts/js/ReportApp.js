/* globals ViewingReport, ViewingChart, channels, clearChannelsData */
/* exported ReportApp */

const appTemplate = document.getElementById('app-template');

class ReportApp {
    constructor() {
        this.channels = channels;
        this.totalViews = 0;
    }

    render() {
        const dom = appTemplate.content;

        const button = dom.querySelector('button');
        button.addEventListener('click', () => {
            clearChannelsData();
            window.location.reload();
        });

        const viewingReportSection = dom.getElementById('viewing-report');
        const viewingReportComponent = new ViewingReport(this.channels);
        const viewingReportDom = viewingReportComponent.render();
        viewingReportSection.appendChild(viewingReportDom);

        const viewingChartSection = dom.getElementById('viewing-chart');
        const viewingChartComponent = new ViewingChart(this.channels);
        const viewingChartDom = viewingChartComponent.render();
        viewingChartSection.appendChild(viewingChartDom);


        return dom;
    }
}