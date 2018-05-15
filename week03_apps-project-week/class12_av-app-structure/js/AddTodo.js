/* exported AddTodo */

const addTodoTemplate = document.getElementById('add-todo-template');

class AddTodo {
    constructor(onAdd) {
        this.onAdd = onAdd;
    }

    render() {
        const dom = addTodoTemplate.content;

        const form = dom.querySelector('form');
        const task = dom.querySelector('input');

        form.addEventListener('submit', (event) => {
            // don't actually change the page!
            event.preventDefault();
            // tell the parent about this new task
            this.onAdd(task.value);
            // clear out the form
            form.reset();
        });

        return dom;
    }
}
