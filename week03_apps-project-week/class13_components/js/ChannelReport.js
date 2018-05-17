/* exported ChannelReport */

const channelReportTemplate = document.getElementById('channel-report-template').content;

class ChannelReport {
    constructor(channel) {
        this.channel = channel;
    }

    render() {
        const dom = channelReportTemplate.cloneNode(true);
        const columns = dom.querySelectorAll('td');
        columns[0].textContent = this.channel.name;
        columns[1].textContent = this.channel.count;
        return dom;
    }
}