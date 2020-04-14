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

// Print a summary message. 'You have 2 todos left' (store in a p element)
const incompleteTodos = todos.filter(function (todo) {
        return !todo.completed;
    });

const summary = document.createElement('h2');
summary.textContent = `You have ${incompleteTodos.length} todos left.`;
document.querySelector('body').appendChild(summary);

// Print a p for each todo above (use text value of the object as the visible value of the object)
todos.forEach(function (todo){
    const p = document.createElement('p');
    p.textContent = todo.text;
    document.querySelector('body').appendChild(p);
})