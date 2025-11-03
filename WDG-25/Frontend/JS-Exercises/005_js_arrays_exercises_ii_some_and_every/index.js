// You can work here or download the template!
const numbers = [4, 8, 15, 16, 23, 42];
console.log(`Original: ${numbers}`);

// Check greater than 20
console.log(numbers.some((x) => x > 20));

// Check less than 50
console.log(numbers.every((x) => x < 50));

// Check if student failed or older than 18
const students = [
  { name: "Alice", age: 25, passed: true },
  { name: "Bob", age: 22, passed: false },
  { name: "Charlie", age: 27, passed: true },
  { name: "David", age: 20, passed: true },
];

console.log(students.some((p) => p.passed === false));
console.log(students.every((p) => p.age > 18));
