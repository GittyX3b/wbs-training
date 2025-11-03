// Array of numbers
const numbers = [1, 2, 3, 4, 5];

console.info('Sum of numbers:');
const sum = numbers.reduce((acc, number) => acc + number, 0);
console.log('Sum: ', sum); // Output: 15

// Array of objects representing people
const people = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Carol', age: 17 },
];

console.info('Average age of people:');
const averageAge = people.reduce((acc, person, index, array) => {
  acc += person.age;
  if (index === array.length - 1) {
    return acc / array.length; // return average
  }
  return acc;
}, 0);
console.log('Average Age: ', averageAge); // Output: 24

// Counting occurrences of values
const items = ['apple', 'banana', 'apple', 'orange', 'banana', 'banana'];

console.info('Counting occurrences of each fruit:');
const counts = items.reduce((acc, item) => {
  acc[item] = (acc[item] || 0) + 1;
  return acc;
}, {});
console.log('Counts:', counts); // Output: { apple: 2, banana: 3, orange: 1 }

// Transforming array data
const products = [
  { id: 1, price: 10 },
  { id: 2, price: 15 },
  { id: 3, price: 20 },
];

console.info('Total price of all products:');
const totalPrice = products.reduce((acc, product) => acc + product.price, 0);
console.log('Total Price: ', totalPrice); // Output: 45
