/* globals App */

// create an "instance" of the App component
const app = new App();
// get its dom via "render"
const dom = app.render();
// get ahold of the root element to attach app to
const root = document.getElementById('root');
// put the apps dom into root
root.appendChild(dom);