// Example 1: Adding a single element to an array
console.info('Example 1: Adding a single element');
const fruits = ['apple', 'banana'];
const newLength1 = fruits.push('orange');
console.log('Updated Fruits: ', fruits); // Output: ['apple', 'banana', 'orange']
console.log('New length: ', newLength1); // Output: 3

// Example 2: Adding multiple elements to an array
console.info('Example 2: Adding multiple elements');
const numbers = [1, 2, 3];
const newLength2 = numbers.push(4, 5);
console.log('Updated Numbers: ', numbers); // Output: [1, 2, 3, 4, 5]
console.log('New length: ', newLength2); // Output: 5
