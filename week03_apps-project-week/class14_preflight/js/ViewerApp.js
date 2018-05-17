/* globals VideoViewer, ChannelSelector, channels */
/* exported ViewerApp */

const appTemplate = document.getElementById('app-template');

class ViewerApp {
    constructor() {
        this.channels = channels;
        this.totalViews = 0;
    }

    render() {
        const dom = appTemplate.content;

        const videoViewerSection = dom.getElementById('video-viewer');
        const firstChannel = this.channels[0];
        firstChannel.count++;
        const videoViewerComponent = new VideoViewer(firstChannel);
        const videoDom = videoViewerComponent.render();
        videoViewerSection.appendChild(videoDom);

        const channelSelectorSection = dom.getElementById('channel-selector');
        const channelSelectorComponent = new ChannelSelector(this.channels, (channel) => {
            channel.count++;
            videoViewerComponent.update(channel);
        });
        const channelDom = channelSelectorComponent.render();
        channelSelectorSection.appendChild(channelDom);

        return dom;
    }
}