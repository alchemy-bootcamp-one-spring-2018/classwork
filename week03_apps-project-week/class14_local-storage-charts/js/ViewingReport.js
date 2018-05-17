/* globals ChannelReport */
/* exported ViewingReport */

const viewingReportTemplate = document.getElementById('viewing-report-template').content;

class ViewingReport {
    constructor(channels) {
        this.channels = channels;
    }

    render() {
        const dom = viewingReportTemplate;

        this.tableBody = dom.querySelector('tbody');

        for(let i = 0; i < this.channels.length; i++) {
            const reportComponent = new ChannelReport(this.channels[i]);
            this.tableBody.appendChild(reportComponent.render());
        }

        return dom;
    }
}