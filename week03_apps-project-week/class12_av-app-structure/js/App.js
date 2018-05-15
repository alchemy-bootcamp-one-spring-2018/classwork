/* globals AddTodo, Controls, Todos, todosData */
/* exported App */

const appTemplate = document.getElementById('app-template');

class App {
    constructor() {
        // initialization logic
        this.todos = todosData;
        this.filter = 'all';
    }

    calculateRemaining() {
        return this.todos.filter(todo => !todo.completed).length;
    }

    updateTodos() {
        let displayTodos;
        switch(this.filter) {
            case 'all':
                displayTodos = this.todos;
                break;
            case 'completed':
                displayTodos = this.todos.filter(todo => todo.completed);
                break;
            case 'active':
                displayTodos = this.todos.filter(todo => !todo.completed);
                break;
        }
        this.todosComponent.update(displayTodos);
    }

    render() {
        const dom = appTemplate.content;

        const addTodoSection = dom.getElementById('add-todo');
        const addTodoComponent = new AddTodo((task) => {
            this.todos.push({
                task: task,
                completed: false
            });
            this.filter = 'all';
            this.updateTodos();
            controlsComponent.updateFilter(this.filter);
        });
        addTodoSection.appendChild(addTodoComponent.render());

        const todosSection = dom.getElementById('todos');
        this.todosComponent = new Todos(this.todos, (todo, completed) => {
            // modify the data
            todo.completed = completed;
            this.updateTodos();
            controlsComponent.updateRemaining(this.calculateRemaining());
        });
        todosSection.appendChild(this.todosComponent.render());

        const controlsSection = dom.getElementById('controls');

        const controlsComponent = new Controls(
            // how many remain?
            this.calculateRemaining(),
            // initial filter value
            this.filter,
            // onFilter
            filter => {
                this.filter = filter;
                this.updateTodos();
            },
            // onClear
            () => {
                this.todos = this.todos.filter(todo => !todo.completed);
                this.updateTodos();
            }
        );
        controlsSection.appendChild(controlsComponent.render());



        return dom;
    }
}