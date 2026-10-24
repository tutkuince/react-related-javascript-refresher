// const notes = ["Meeting Notes", "Grocery List"];
// notes.push("Workout Plan");
// console.log(notes); // [ 'Meeting Notes', 'Grocery List', 'Workout Plan' ]

// const notes = ["Meeting Notes", "Grocery List"];
// const newNotes = [...notes, "Workout Plan"];
// console.log(notes); // [ 'Meeting Notes', 'Grocery List' ]
// console.log(newNotes); // [ 'Meeting Notes', 'Grocery List', 'Workout Plan' ]

// const notes = ["Meeting Notes", "Grocery List"];
// const newNotes = notes.map((note) =>
//   note === "Grocery List" ? "Shopping List" : note,
// );
// console.log(notes); // [ 'Meeting Notes', 'Grocery List' ]
// console.log(newNotes); // [ 'Meeting Notes', 'Shopping List' ]

const user = {
  name: "Tutku",
  age: 30,
};

const newUser = {
  ...user,
  age: 31,
};
console.log(user);
console.log(newUser);
