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

const paragraphs = document.querySelectorAll('p');
// Iterate over every p - remove every paragraph whos text contains “the”

paragraphs.forEach(function (paragraph) {
    if (paragraph.textContent.toLowerCase().includes('the')) {
        console.log(`Removed todo item: ${paragraph.textContent}`);        
        paragraph.remove();
    }
});