/* globals Todo */
/* exported Todos */

const todosTemplate = document.getElementById('todos-template');

class Todos {
    constructor(todos, onStatusChange) {
        this.todos = todos;
        this.onStatusChange = onStatusChange;
    }

    update(todos) {
        const ul = this.ul;
        while(ul.lastElementChild) {
            ul.lastElementChild.remove();
        }

        for(let i = 0; i < todos.length; i++) {
            // make a child component for each todo
            const todoComponent = new Todo(todos[i], this.onStatusChange);
            // add the rendered dom of each child component to ul
            ul.appendChild(todoComponent.render());
        }

    }

    render() {
        const dom = todosTemplate.content.cloneNode(true);
        // get a ref to ul so we can append child li
        const ul = dom.querySelector('ul');
        this.ul = ul;

        // loop the data
        for(let i = 0; i < this.todos.length; i++) {
            // make a child component for each todo
            const todoComponent = new Todo(this.todos[i], this.onStatusChange);
            // add the rendered dom of each child component to ul
            ul.appendChild(todoComponent.render());
        }

        return dom;
    }
}