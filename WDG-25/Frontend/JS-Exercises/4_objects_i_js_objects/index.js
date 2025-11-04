// Creating an object literal
const person = {
  name: 'Alice',
  age: 25,
  isStudent: true,
  // For now, it should suffice to say that the this keyword is a reference to the current object so we can reference its own properties
  sayHello() {
    return `${this.name} is ${this.age} years old.`;
  },
};

// Accessing properties
console.log(person.name); // Outputs: Alice
console.log(person.sayHello()); // Outputs: Alice is 25 years old
console.log(person['age']); // Outputs: 25\
let key = 'age';
console.log(person[key]); // Outputs: 25

// Adding new properties
person.email = 'alice@example.com';
person['major'] = 'Computer Science';

// Modifying properties
person.age = 26; // Alice has a birthday!

// Deleting properties
delete person.isStudent;

// Displaying the modified object
console.log(person);
/* 
 In case you haven't noticed... console is an object! that's why we can access its .log, 
 .warn, .error properties
*/
