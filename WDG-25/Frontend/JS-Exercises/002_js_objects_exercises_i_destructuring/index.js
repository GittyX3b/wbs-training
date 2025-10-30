// You can work here or download the template!
// Initial array
const fruits = ["apple", "banana", "cherry", "date"];

// Initial object
const person = {
  fullname: "John Doe",
  age: 30,
  // profession: "Doctor",
  address: {
    city: "New York",
    zip: "10001",
  },
};
// Initial function
function displayPerson(person) {
  console.log(`Name: ${person.name}, Age: ${person.age}`);
}

// Simple Array Destructuring
const [fruit1, fruit2] = fruits;
console.log(`Simple Array Destructuring: ${fruit1} and ${fruit2}`);

// Skipping Elements in Array Destructuring
const { 0: fruit1_s, 2: fruit2_s } = fruits;
console.log(`Skipped Array Destructuring: ${fruit1_s} and ${fruit2_s}`);

// Simple Object Destructurering
const { fullname, age } = person;
console.log(`Simple Object Destructuring: ${fullname} is ${age} years old`);

const { fullname: x, age: y } = person;
console.log(`Simple Object Destructuring: ${x} is ${y} years old`);

// Nested Object Destruturing
const {
  address: { city, zip },
} = person;
console.log(city + zip);

const {
  address: { city: c, zip: z },
  profession: p = "unknown",
} = person;
console.log(c + z);
console.log(p); // unknpwn wird verwendet, wenn das object kein gültiges Element liefert

// Object Destruturing in Funktionen
const personInfo = ({ fullname, age }) => {
  console.log(
    `Object Destructuring in Functions: ${fullname} is ${age} years old`
  );
};

personInfo(person);
