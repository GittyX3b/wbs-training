// Array of numbers
const numbers = [1, 2, 3, 4, 5];

// Create a new array of squares of the original numbers
console.info('New array with squared numbers');
const squares = numbers.map((number) => number * number);
console.log('Squares:', squares);

// Array of objects
const people = [
  { name: 'Alice', age: 15 },
  { name: 'Bob', age: 30 },
  { name: 'Carol', age: 35 },
];

// Increase age by 1 and add a new field 'canVote'
console.info('New array with additional properties');
const updatedPeople = people.map((person) => ({
  ...person,
  age: person.age + 1,
  canVote: person.age >= 18,
}));
console.log('The original people array remains the same:', people);
console.log('Updated People:', updatedPeople);

// Convert objects to array of names
const names = people.map((person) => person.name);
console.log('Names:', names);
