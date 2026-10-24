// const number = 2;

// const message = number % 2 === 0 ? "Even Number" : "Odd Number";
// console.log(message);

const note = {
  title: "Meeting notes",
  content: "Discuss project roadmap",
  timestamp: Date.now(),
  isPinned: true,
};

const noteText = `
    Title: ${note.title}
    Status: ${note.isPinned ? "Pinned Note" : "Regular Note"}
    Last Edited: ${new Date(note.timestamp).toLocaleString()}
`;
console.log(noteText);

//
console.log(false && "Hello"); // false
console.log(null && "Hello"); // null
console.log(true && "Hello"); // true

const isLoggedIn = true;

function showWelcome() {
  return isLoggedIn && "Welcome!";
}
console.log(isLoggedIn && showWelcome());
