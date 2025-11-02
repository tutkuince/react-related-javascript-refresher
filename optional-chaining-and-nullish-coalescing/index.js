const user = {
    name: 'Tutku'
};

// console.log(user.address.city); // TypeError: Cannot read properties of undefined (reading 'city')
console.log(user.address?.city);    // undefined

console.log('---------------------------');

let value = null;
let result = value ?? 'Default Value';
let result2 = value || 'Default Value';
console.log(result);
console.log(result2);

console.log('---------------------------');
console.log(user.address?.city ?? 'Unknown');
