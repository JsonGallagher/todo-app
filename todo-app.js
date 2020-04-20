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
    searchText: '',
    hideCompleted: false
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
        // If the given todo matches the searchText && hideCompleted checkbox, show it. Otherwise we won't.
        const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase());
        const hideCompletedMatch = !filters.hideCompleted || !todo.completed
        
        return searchTextMatch && hideCompletedMatch;
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

// Form Event Handler
document.querySelector('#new-todo').addEventListener('submit', function (e) {
    // Prevent default form action - full page refresh
    e.preventDefault();

    // add new object to array containing todo text, assume completed: false
    todos.push({
        text: e.target.elements.todoText.value,
        completed: false
    });

    // add new todo in div to display onscreen
    renderTodos(todos, filters);

    // clear form input value
    e.target.elements.todoText.value = '';
})

// 1. Create a checkbox and setup event listener -> "Hide completed"
// 2. Create new hideCompleted filter above (default false)
// 3. Update hideCompleted and rerender list on checkbox change
document.querySelector('#hide-completed').addEventListener('change', function (e) {
    filters.hideCompleted = e.target.checked;
    renderTodos(todos, filters);
})
// 4. Setup renderTodos to remove completed items
