/* globals  */
/* exported App */

const appTemplate = document.getElementById('app-template');

class App {
    constructor() {
       
    }

    render() {
        const dom = appTemplate.content;

        return dom;
    }
}