// You can work here or download the template!
const numbers = [10, 20, 30, 40, 50];
console.log(`Original: ${numbers}`);

// First number > 25
const gt = numbers.find((num) => num > 25);
console.log(`Greater than 25: ${gt}`);

// Locate a person
const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 },
  { name: "David", age: 40 },
];

console.log(`Located person:`);
console.log(people.find((person) => person.name === `Charlie`));
