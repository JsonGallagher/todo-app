const todos = document.querySelectorAll('p');
// Iterate over every p - remove every paragraph whos text contains “the”

todos.forEach(function (todo) {
    if (todo.textContent.toLowerCase().includes('the')) {
        console.log(`Removed todo item: ${todo.textContent}`);        
        todo.remove();
    }
});