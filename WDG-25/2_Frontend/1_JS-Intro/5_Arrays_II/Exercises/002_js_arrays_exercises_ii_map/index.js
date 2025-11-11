// You can work here or download the template!
const numbers = [1, 2, 3, 4, 5];
console.log(`Original: ${numbers}`);

// Doubled values
const doubledNumbers = numbers.map((num) => num * 2);
console.log(`Doubled: ${doubledNumbers}`);

// New string array
const stringNumbers = numbers.map((num) => `Number_${num}`);
console.log(`Strings: ${stringNumbers}`);

// new object array
const numberObjects = [];
numbers.map(
  (num, i) => (numberObjects[i] = { original: num, squared: num * num })
);
console.log(`Object:`);
console.log(numberObjects);
