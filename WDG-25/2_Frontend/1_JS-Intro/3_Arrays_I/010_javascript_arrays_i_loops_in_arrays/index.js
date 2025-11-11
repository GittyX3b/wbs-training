// Initialize the array
const fruits = ["apple", "banana", "cherry", "date"];

// Using a for loop to iterate over the array
console.info("Using a for loop:");
for (let i = 0; i < fruits.length; i++) {
  console.log(`Element at index ${i} is ${fruits[i]}`);
}

// Using a for...of loop to iterate over the array
console.info("Using a for...of loop:");
for (const fruit of fruits) {
  console.log(`Current fruit: ${fruit}`);
}
for (const [index, fruit] of fruits.entries()) {
  console.log(`Current fruit: ${fruit} [${index}]`);
}
