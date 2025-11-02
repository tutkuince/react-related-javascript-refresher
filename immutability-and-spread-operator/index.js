const notes = ['Meeting Notes', 'Grocery List'];
notes.push('Workout Plan');
console.log(notes);

console.log('---------------------------');

const newNotes = [...notes, 'Play Game'];
console.log(notes);
console.log(newNotes);

console.log('---------------------------');

const updatedNotes = notes.map((note) => note === 'Grocery List' ? 'Shopping List' : note);
console.log(updatedNotes);

console.log('---------------------------');

const user = {
    name: 'Tutku',
    age: 35
};

const newUser = {
    ...user,
    age: 36
}

console.log('User: ', user);
console.log('New User: ', newUser);
