const todos = [{
    text: 'Order cat food',
    completed: true
}, {
    text: 'Clean kitchen',
    completed: false
}, {
    text: 'Buy food',
    completed: true
},{
    text: 'Do work',
    completed: false
}, {    
    text: 'Exercise',
    completed: true
}];

const filters = {
    searchText: ''
}
// 1. Set up a div container for todos - DONE
// 2. Setup filters (searchText) - DONE
// 3. Wire up a new filter input to change it
document.querySelector('#search-text').addEventListener('input' , function (e) {
    filters.searchText = e.target.value;
    renderTodos(todos, filters);
});
// 4. Create a renderTodos function to render and rerender the latest filtered data
const renderTodos = function (todos, filters) {
    const filteredTodos = todos.filter(function (todo) {
        return todo.text.toLowerCase().includes(filters.searchText.toLowerCase());
    })

    // Print a summary message. 'You have 2 todos left' (store in a p element)
    const incompleteTodos = filteredTodos.filter(function (todo) {
        return !todo.completed;
    });

    // Clear #todos div to wipe previously rendered notes on screen
    document.querySelector('#todos').innerHTML = '';

    const summary = document.createElement('h2');
    summary.textContent = `You have ${incompleteTodos.length} todos left to complete.`;
    document.querySelector('#todos').appendChild(summary);

    // Print a p for each todo above (use text value of the object as the visible value of the object)
    filteredTodos.forEach(function (todo){
    const p = document.createElement('p');
    p.textContent = todo.text;
    document.querySelector('#todos').appendChild(p);
    })
}
// Initial rendering of notes
renderTodos(todos, filters);

// Listen for new todo creation
document.querySelector('#add-todo').addEventListener('click', function(e) {
    console.log('Add a new todo');
});

// Listen for todo text input changes
document.querySelector('#new-todo').addEventListener('input', function(e) {
    console.log(e.target.value);
})