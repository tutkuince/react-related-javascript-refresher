// const notes = [
//   { title: "Meeting Notes", content: "Discuss project roadmap" },
//   { title: "Grocery List", content: "Buy milk, eggs, bread" },
//   { title: "Workout Plan", content: "Push day: Bench, Shoulder Press" },
//   { title: "Recipe Ideas", content: "Pasta, Salad, Tacos" },
// ];

// // const [firstNode, secondNote, hello] = notes;
// const [firstNode, secondNote, ...otherNotes] = notes;
// console.log(firstNode); // { title: 'Meeting Notes', content: 'Discuss project roadmap' }
// console.log(secondNote); // { title: 'Grocery List', content: 'Buy milk, eggs, bread' }
// console.log(secondNote.title); // Grocery List
// // console.log(hello); // { title: "Workout Plan", content: "Push day: Bench, Shoulder Press" }
// console.log(otherNotes); // [{ title: 'Workout Plan', content: 'Push day: Bench, Shoulder Press' },{ title: 'Recipe Ideas', content: 'Pasta, Salad, Tacos' }]

// destructing Objects
// const note = {
//   title: "Meeting Notes",
//   content: "Discuss project roadmap",
//   isPinned: true,
// };
// const { title: noteTitle, isPinned } = note;
// console.log(noteTitle);
// console.log(isPinned);

// nested destructing
const user = {
  name: "Tutku",
  address: { city: "Essen", state: "NRW" },
  hobbies: ["Movies", "Sports", "Music"],
};

const {
  name,
  hobbies: [firstHobby],
  address: { city, state },
} = user;
console.log(firstHobby);
console.log(city, state);
