const notes = [
    {title: 'Meeting Notes', content: 'Discuss project roadmap', isPinned: true},
    {title: 'Grocery List', content: 'Buy milk, eggs, bread', isPinned: false},
    {title: 'Workout Plan', content: 'Push day: Bench, Shoulder Press', isPinned: false},
    {title: 'Recipe Ideas', content: 'Pasta, Salad, Tacos', isPinned: false},
];

// .map()
const noteTitles = notes.map((note, index) => `${index + 1}. ${note.title}`);
console.log('Note Titles: ', noteTitles);

console.log('---------------------------');


// .filter()
const pinnedNotes = notes.filter((note) => note.isPinned).map((note) => note.title);
console.log('Pinned Notes: ', pinnedNotes);

console.log('---------------------------');


// .reduce
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((total, number) => total + number, 0);
console.log(sum);

const totalCharacters = notes.reduce((total, note) => total + note.content.length, 0);
console.log('Total Character: ', totalCharacters);
