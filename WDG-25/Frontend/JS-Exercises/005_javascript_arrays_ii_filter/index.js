// Array of objects representing people with ages
const people = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Carol', age: 35 },
  { name: 'Dave', age: 20 },
];

console.info('Find people older or 30');
// Filter people who are 30 or older
const adults = people.filter((person) => person.age >= 30);
console.log('People 30 or older:', adults);

console.info('Filter only numbers');
// Array of mixed types of data
const data = [1, 'two', 3, 'four', 5];

// Filter only numeric values
const numbersOnly = data.filter((item) => typeof item === 'number');
console.log('Original array remains the same:', data);
console.log('Numeric values:', numbersOnly);
