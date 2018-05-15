/* exported Controls */

const controlsTemplate = document.getElementById('controls-template');

class Controls {
    constructor(remaining, filter, onFilter, onClear) {
        this.remaining = remaining;
        this.filter = filter;
        this.onFilter = onFilter;
        this.onClear = onClear;
    }

    updateRemaining(remaining) {
        this.remaining = remaining;
        const remainingText = this.remainingText;
        const label = remaining === 1 ? 'item' : 'items';
        remainingText.textContent = remaining + ' ' + label + ' remaining';
    }

    updateFilter(filter) {
        this.filter = filter;

        for(let i = 0; i < this.filterRadios.length; i++) {
            const radio = this.filterRadios[i];
            if(radio.value === this.filter) radio.checked = true;
        }      
    }

    render() {
        const dom = controlsTemplate.content;

        this.remainingText = dom.getElementById('remaining');
        this.updateRemaining(this.remaining);

        this.filterRadios = dom.querySelectorAll('input[type=radio]');
        for(let i = 0; i < this.filterRadios.length; i++) {            
            this.filterRadios[i].addEventListener('change', event => {
                const value = event.target.value;
                this.onFilter(value);
            });
        }
        this.updateFilter(this.filter);

        const clearButton = dom.querySelector('button');
        clearButton.addEventListener('click', () => {
            this.onClear();
        });

        return dom;
    }
}
