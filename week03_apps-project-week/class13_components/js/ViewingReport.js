/* globals ChannelReport */
/* exported ViewingReport */

const viewingReportTemplate = document.getElementById('viewing-report-template').content;

class ViewingReport {
    constructor(channels) {
        this.channels = channels;
    }

    update(channels) {
        this.channels = channels;

        while(this.tableBody.lastElementChild) {
            this.tableBody.lastElementChild.remove();
        }

        for(let i = 0; i < this.channels.length; i++) {
            const reportComponent = new ChannelReport(this.channels[i]);
            this.tableBody.appendChild(reportComponent.render());
        }
    }

    render() {
        const dom = viewingReportTemplate;

        const header = dom.querySelector('h2');
        const table = dom.querySelector('table');

        header.addEventListener('click', () => {
            header.classList.toggle('expanded');
            table.classList.toggle('hidden');
        });

        this.tableBody = dom.querySelector('tbody');

        for(let i = 0; i < this.channels.length; i++) {
            const reportComponent = new ChannelReport(this.channels[i]);
            this.tableBody.appendChild(reportComponent.render());
        }

        return dom;
    }
}