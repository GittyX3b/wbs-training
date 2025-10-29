const fruits = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'];

// Extract a portion of the array from index 1 to index 3 (excluding index 3)
const subArray = fruits.slice(1, 3);

console.log(subArray); // Output: ['Banana', 'Cherry']
console.log(fruits); // Output: ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'] (original array remains unchanged)
