/* exported Channel */

const channelTemplate = document.getElementById('channel-template').content;

class Channel {
    constructor(channel, onSelect) {
        this.channel = channel;
        this.onSelect = onSelect;
    }

    render() {
        const dom = channelTemplate.cloneNode(true);

        const li = dom.querySelector('li');
        li.addEventListener('click', () => {
            this.onSelect(this.channel);
        });

        const header = dom.querySelector('h3');
        header.textContent = this.channel.name;

        return dom;
    }
}