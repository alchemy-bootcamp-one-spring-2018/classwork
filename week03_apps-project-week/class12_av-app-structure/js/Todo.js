/* exported Todo */

const todoTemplate = document.getElementById('todo-template');

class Todo {
    constructor(todo, onStatusChange) {
        this.todo = todo;
        this.onStatusChange = onStatusChange;
    }

    render() {
        const dom = todoTemplate.content.cloneNode(true);

        const input = dom.querySelector('input');
        const span = dom.querySelector('span');

        input.checked = this.todo.completed;
        input.addEventListener('change', () => {
            this.onStatusChange(this.todo, input.checked);
        });
        span.textContent = this.todo.task;

        return dom;
    }
}
