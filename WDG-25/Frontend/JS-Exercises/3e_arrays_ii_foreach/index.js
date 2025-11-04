// You can work here or download the template!
const numbers = [1, 2, 3, 4, 5];

// Iterating and printing
numbers.forEach((x) => console.log(x));

// Calculating the sum
let sum = 0;
numbers.forEach((x) => (sum += x));
console.log(`Summe 2: ${sum}`);

// Array with squared values
const squaredNumbers = [];
numbers.forEach((x) => squaredNumbers.push(x * x));
console.log(`Squarred: ${squaredNumbers}`);
