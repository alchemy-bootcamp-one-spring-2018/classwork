/* globals Todos, todosData */
/* exported App */

const appTemplate = document.getElementById('app-template');

class App {
    constructor() {
        // initialization logic
        this.todos = todosData;
    }

    render() {
        const dom = appTemplate.content;
        
        const todosSection = dom.getElementById('todos');
        const todosComponent = new Todos(this.todos, (todo, completed) => {
            // modify the data
            todo.completed = completed;
            todosComponent.update(this.todos);
        });

        todosSection.appendChild(todosComponent.render());

        return dom;
    }
}