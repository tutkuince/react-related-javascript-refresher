// function getReactangleArea(width, height) {
//   return width * height;
// }

// console.log(getReactangleArea(5, 10));

// const getReactangleArea = (width, height) => {
//   return width * height;
// };

const getReactangleArea = (width, height) => width * height;

console.log(getReactangleArea(5, 10));

const sayHello = () => console.log("Hello");
sayHello();

const numbers = [1, 2, 3, 4, 5];
const double = numbers.map((number) => number * 2);
console.log(double);

const person = {
  name: "Tutku",
  sayHelloRegular: function () {
    console.log("Regular: ", this.name); // 'Regular: Tutku'
  },
  sayHelloArrow: () => console.log("Arrow: ", this.name), // undefined
};
