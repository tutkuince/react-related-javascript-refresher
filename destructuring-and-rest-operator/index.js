// Rest Operator
const notes = [
    {title: 'Meeting Notes', content: 'Discuss project roadmap'},
    {title: 'Grocery List', content: 'Buy milk, eggs, bread'},
    {title: 'Workout Plan', content: 'Push day: Bench, Shoulder Press'},
    {title: 'Recipe Ideas', content: 'Pasta, Salad, Tacos'}
];

const [firstNote, secondNote, ...otherNotes] = notes;
console.log(firstNote);         // { title: 'Meeting Notes', content: 'Discuss project roadmap' }
console.log(secondNote.title);  // Grocery List
console.log(otherNotes);        // [{ title: 'Workout Plan', content: 'Push day: Bench, Shoulder Press' },{ title: 'Recipe Ideas', content: 'Pasta, Salad, Tacos' }]

// Destructing
const note = {
    title: 'Meeting Notes',
    content: 'Discuss project roadmap',
    isPinned: true
};

const { title: noteTitle, isPinned } = note; 
console.log(noteTitle);     // Meeting Notes
console.log(isPinned);      // true

// Nested Destructing
const user = {
    name: 'Ben',
    address: {city: 'Boston', state: 'MA'}
};
const { name, address } = user;
console.log(address);