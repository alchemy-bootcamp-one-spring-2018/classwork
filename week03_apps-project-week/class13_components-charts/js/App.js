/* globals VideoViewer, ChannelSelector, ViewingReport, channels */
/* exported App */

const appTemplate = document.getElementById('app-template');

class App {
    constructor() {
        this.channels = channels;
        this.totalViews = 0;
    }

    showReport() {
        if(!this.viewingReportComponent) {
            this.viewingReportComponent = new ViewingReport(this.channels);
            const viewingReportDom = this.viewingReportComponent.render();
            this.viewingReportSection.appendChild(viewingReportDom);
        }
        else {
            this.viewingReportComponent.update(this.channels);
        }
    }

    render() {
        const dom = appTemplate.content;

        const videoViewerSection = dom.getElementById('video-viewer');
        const videoViewerComponent = new VideoViewer(this.channels[0]);
        const videoDom = videoViewerComponent.render();
        videoViewerSection.appendChild(videoDom);

        const channelSelectorSection = dom.getElementById('channel-selector');
        const channelSelectorComponent = new ChannelSelector(this.channels, (channel) => {
            channel.count++;
            videoViewerComponent.update(channel);

            this.totalViews++;
            if(this.totalViews > 5) {
                this.showReport();
            }
        });
        const channelDom = channelSelectorComponent.render();
        channelSelectorSection.appendChild(channelDom);

        this.viewingReportSection = dom.getElementById('viewing-report');
        this.showReport();
        
        return dom;
    }
}