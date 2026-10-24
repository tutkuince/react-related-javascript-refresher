// const notes = [
//   { title: "Meeting Notes", content: "Discuss project roadmap" },
//   { title: "Grocery List", content: "Buy milk, eggs, bread" },
//   { title: "Workout Plan", content: "Push day: Bench, Shoulder Press" },
//   { title: "Recipe Ideas", content: "Pasta, Salad, Tacos" },
// ];

// const noteTitles = notes.map((note, index) => `${index}. ${note.title}`);
// console.log(noteTitles); // ['0. Meeting Notes', '1. Grocery List', '2. Workout Plan', '3. Recipe Ideas']

// const notes = [
//   {
//     title: "Meeting Notes",
//     content: "Discuss project roadmap",
//     isPinned: true,
//   },
//   { title: "Grocery List", content: "Buy milk, eggs, bread", isPinned: false },
//   {
//     title: "Workout Plan",
//     content: "Push day: Bench, Shoulder Press",
//     isPinned: false,
//   },
//   { title: "Recipe Ideas", content: "Pasta, Salad, Tacos", isPinned: false },
// ];

// const pinnedNotes = notes.filter((note) => note.isPinned);
// const pinnedNotesTitle = notes
//   .filter((note) => note.isPinned)
//   .map((note) => note.title);
// console.log(pinnedNotes); // [{title: 'Meeting Notes',content: 'Discuss project roadmap',isPinned: true}]
// console.log(pinnedNotesTitle); // [ 'Meeting Notes' ]

// reduce
//
// const numbers = [1, 2, 3, 4, 5];

// const sum = numbers.reduce((total, sum) => total + sum, 0);
// console.log(sum);

// forEach
//
const notes = [
  {
    title: "Meeting Notes",
    content: "Discuss project roadmap",
    isPinned: true,
  },
  { title: "Grocery List", content: "Buy milk, eggs, bread", isPinned: false },
  {
    title: "Workout Plan",
    content: "Push day: Bench, Shoulder Press",
    isPinned: false,
  },
  { title: "Recipe Ideas", content: "Pasta, Salad, Tacos", isPinned: false },
];
notes.forEach((note) => console.log(note.title));
