// Array of objects representing people
const people = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Carol', age: 35 },
];

// Find a person named 'Bob'
console.info('Find Bob');
const bob = people.find((person) => person.name === 'Bob');
console.log('Found Bob: ', bob);
console.info('Try to find Rumpelstilzchen');
const rumpelstilzchen = people.find(
  (person) => person.name === 'Rumpelstilzchen',
);
console.log('Found Rumpelstilzchen: ', rumpelstilzchen);

// Array of numbers
const numbers = [10, 20, 30, 40, 50];

console.info('Find first number larger than condition');
// Find the first number greater than 25
const firstLargeNumber = numbers.find((number) => number > 25);
console.log('First number greater than 25: ', firstLargeNumber);
