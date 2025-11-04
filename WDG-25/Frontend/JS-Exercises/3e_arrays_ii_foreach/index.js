// You can work here or download the template!
const numbers = [1, 2, 3, 4, 5];

// Iterating and printing
numbers.forEach((x) => console.log(x));

// Calculating the sum
let sum = 0;
numbers.forEach((x, i) => {
  sum = sum + x;
  if (i === numbers.length - 1) console.log(`Summe: ${sum}`);
});

// Array with squared values
const squaredNumbers = [];
numbers.forEach((x, i) => {
  squaredNumbers[i] = x * x;
  i === numbers.length - 1 ? console.log("Squared: " + squaredNumbers) : null;
});
