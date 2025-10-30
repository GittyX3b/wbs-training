// Array Destructuring
const array = [1, 2, 3, 4];

// Basic array destructuring
const [a, b] = array;
console.log(a); // Output: 1
console.log(b); // Output: 2

// Skipping elements
const [first, , third] = array;
console.log(first); // Output: 1
console.log(third); // Output: 3

// Default values
const [x = 10, y = 20, z = 30] = [1];
console.log(x); // Output: 1
console.log(y); // Output: 20
console.log(z); // Output: 30

// Nested array destructuring
const nestedArray = [1, [2, 3], 4];
const [n1, [n2, n3], n4] = nestedArray;
console.log(n1); // Output: 1
console.log(n2); // Output: 2
console.log(n3); // Output: 3
console.log(n4); // Output: 4

// Object Destructuring
const person = {
  name: 'Alice',
  age: 25,
  city: 'New York',
  address: {
    street: '123 Main St',
    zipcode: '10001',
  },
};

// Basic object destructuring
const { name, age } = person;
console.log(name); // Output: Alice
console.log(age); // Output: 25

// Nested object destructuring
const {
  address: { street, zipcode },
} = person;
console.log(street);
console.log(zipcode);

// Be careful if a property is undefined
const { something } = person;
// This will simply yield undefined
console.log(something);
// but if we try to destructure from something...
try {
  const {
    something: { somethingElse },
  } = person;
} catch (e) {
  console.error(e);
}

// Renaming variables
const { name: fullName, age: years } = person;
console.log(fullName); // Output: Alice
console.log(years); // Output: 25

// Default values
const { name: n, country = 'Unknown' } = person;

// Function parameters

// This function takes an object as a parameter. We can destructure the object directly in the parameter list!
function greet({ name, age }) {
  console.log(`Hello, my name is ${name} and I am ${age} years old.`);
}

greet(person); // Output: Hello, my name is Alice and I am 25 years old.
