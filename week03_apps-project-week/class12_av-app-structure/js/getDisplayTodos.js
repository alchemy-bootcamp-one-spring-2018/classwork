/* exported getDisplayTodos */

function getDisplayTodos(todos, filter) {
    let displayTodos;

    switch(filter) {
        case 'all':
            displayTodos = todos;
            break;
        case 'completed':
            displayTodos = todos.filter(todo => todo.completed);
            break;
        case 'active':
            displayTodos = todos.filter(todo => !todo.completed);
            break;
    }

    return displayTodos;
}