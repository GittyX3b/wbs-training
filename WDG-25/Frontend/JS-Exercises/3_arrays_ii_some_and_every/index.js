// Array of objects representing people with ages
const people = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Carol', age: 17 },
];

// Check if there is any person younger than 18
console.info('Check if there is any person younger than 18');
const hasMinors = people.some((person) => person.age < 18);
console.log('Contains minors: ', hasMinors); // Output: true

// Check if all persons are older than 20
console.info('Check if all persons are older than 20');
const allAdults = people.every((person) => person.age > 20);
console.log('All are adults: ', allAdults); // Output: false

// Array of numbers
const numbers = [2, 4, 6, 8, 10];

// Check if any number is odd
console.info('Check if any number is odd');
const hasOddNumber = numbers.some((number) => number % 2 !== 0);
console.log('Contains odd number: ', hasOddNumber); // Output: false

// Check if all numbers are even
console.info('Check if all numbers are even');
const allEven = numbers.every((number) => number % 2 === 0);
console.log('All numbers are even: ', allEven); // Output: true
