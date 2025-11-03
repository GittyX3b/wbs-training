// Array of numbers
const numbers = [1, 2, 3, 4, 5];

// Log each number multiplied by 2
console.info('Logging each number multiplied by 2:');
numbers.forEach((number, index) => {
  console.log(`Index ${index}: ${number * 2}`);
});

// Update array elements
// Mutating the array is technically possible but discouraged!
console.info('Updating array elements to be squared:');
const whateverItReturns = numbers.forEach((number, index, arr) => {
  arr[index] = number * number;
});
console.log('Squared Numbers: ', numbers);
console.log('forEach does not return anything: ', whateverItReturns);
