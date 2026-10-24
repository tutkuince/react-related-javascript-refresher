// const user = {
//   name: "Tutku",
// };
// console.log(user.address?.city); // undefined

// let value = null;
// let result = value ?? "Default"; // either null or undefined => return Default

const user = {
  name: "Tutku",
};

console.log(user.address?.city ?? "Unknown"); // Unknown
