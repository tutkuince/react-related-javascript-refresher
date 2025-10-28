const number = 5;
/* let message;

if(number % 2 == 0) {
    message = 'Even Number';
} else {
    message = 'Odd Number';
} */

const message = number % 2 === 0 ? 'Even Number' : 'Odd Number';

console.log(message);


// ------------------- Ternary Operation
const note = {
    title: 'Meeting notes',
    content: 'Discuss project roadmap',
    timestamp: Date.now(),
    isPinned: true
};

const noteText = `
    Title: ${note.title}
    Status: ${note.isPinned ? ' Pinned Note' : 'Regular Note'}
    Last Edited: ${new Date(note.timestamp).toLocaleString()}
`;

console.log(noteText);

// ------------------- Circuit Rendering
console.log(false && 'Hello');  // just showed false
console.log(true && 'Hello');   // just showed Hello

// ------------------- Example
const isLoggedIn = true;
function showWelcome() {
    return isLoggedIn && 'Welcome, User';
}
console.log(showWelcome());