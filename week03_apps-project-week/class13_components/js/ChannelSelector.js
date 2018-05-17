/* globals Channel */
/* exported ChannelSelector */

const channelSelectorTemplate = document.getElementById('channel-selector-template').content;

class ChannelSelector {

    constructor(channels, onSelect) {
        this.channels = channels;
        this.onSelect = onSelect;
    }

    render() {
        const dom = channelSelectorTemplate;
        const ul = dom.querySelector('ul');

        for(let i = 0; i < this.channels.length; i++) {
            const channelComponent = new Channel(this.channels[i], this.onSelect);
            const channelDom = channelComponent.render();
            ul.appendChild(channelDom);
        }

        return dom;
    }
}