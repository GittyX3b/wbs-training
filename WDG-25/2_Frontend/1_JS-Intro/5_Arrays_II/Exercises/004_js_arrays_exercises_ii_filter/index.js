// You can work here or download the template!
const numbers = [5, 10, 15, 20, 25, 30];
console.log(`Original: ${numbers}`);

// New array with numbers gt 15
const numbersGreaterThan15 = numbers.filter((x) => (x > 15 ? x : null));
console.log(`GreaterThan15: ${numbersGreaterThan15}`);

// Array of objects
const students = [
  { name: "Alice", grade: 85 },
  { name: "Bob", grade: 92 },
  { name: "Charlie", grade: 78 },
  { name: "David", grade: 88 },
  { name: "Eve", grade: 95 },
];

const studentsAbove80 = [];
students.filter((p) => (p.grade > 80 ? studentsAbove80.push(p) : null));
console.log(`SudentsAbove80: `);
console.log(studentsAbove80);
