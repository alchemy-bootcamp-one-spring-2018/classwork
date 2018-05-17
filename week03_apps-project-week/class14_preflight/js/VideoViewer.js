/* exported VideoViewer */

const videoViewerTemplate = document.getElementById('video-viewer-template').content;

class VideoViewer {

    constructor(channel) {
        this.channel = channel;
    }

    update(channel) {
        this.channel = channel;

        this.header.textContent = this.channel.name;
        this.videoPlayer.src = this.channel.video;
    }

    render() {
        const dom = videoViewerTemplate;

        this.header = dom.querySelector('h2');
        this.videoPlayer = dom.querySelector('video');

        this.update(this.channel);

        return dom;
    }
}