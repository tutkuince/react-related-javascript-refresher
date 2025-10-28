/*function getRectangleArea(width, height) {
    return width * height;
}*/

/*const getRectangleArea = (width, height) => {
    return width * height;
};*/

const getRectangleArea = (width, height) => width * height;

const sayHello = () => console.log('Hello');

console.log(getRectangleArea(5, 10));
sayHello();

// --------------------------
const numbers = [1, 2, 3, 4, 5];
/*const double = numbers.map(function (number) {
    return number * 2;
});
*/
const double = numbers.map((number) => number * 2);
console.log(double);

// --------------------------
regular();  // can work before the definition 
// arrow();    // can't work before the definition

function regular() {
    console.log('Regular');
}
const arrow = () => console.log('Arrow');

// --------------------------
const person = {
    name: 'Tutku',
    sayHelloRegular: function() {
        console.log('Regular: ', this.name);
    },
    sayHelloArrow: () => console.log('Arrow: ', this.name)
}
person.sayHelloRegular();   // Regular: Tutku
person.sayHelloArrow();     // Arrow: undefined