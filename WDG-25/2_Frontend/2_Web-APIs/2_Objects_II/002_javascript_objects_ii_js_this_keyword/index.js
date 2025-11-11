// Global context

console.log(this); // true in a browser environment, in our case, it's undefined because of the dark magic we are doing to render the preview on the right! This script is a JavaScript module so, the global this is undefined... We'll get there!

// Function context
function show() {
  console.log(this); // undefined in strict mode, window in non-strict mode
}
show();

// Method context
let obj = {
  name: 'Alice',
  greet: function () {
    console.log('Hello, ' + this.name); // 'this' refers to 'obj'
  },
};
// When a regular function is called as a method, this refers to the caller, in this case, the object
obj.greet();

// Arrow function context
let obj2 = {
  name: 'Bob',
  greet: () => {
    console.log(this?.name); // In an arrow function the this is inherited from the surrounding context, by default it'll be the global this. We are using the optional chaining ? to avoid crashing since global this is undefined
  },
};
obj2.greet();

console.info('Falling out of scope');
// But do not give up on arrow functions!
let person1 = {
  name: 'Onur',
  hobbies: ['coding', 'reading', 'cooking'],
  listHobbies: function () {
    this.hobbies.forEach(function (hobby) {
      console.log(`My name is ${this?.name} and I like ${hobby}`); // Callback functions are called in the global context, so this is undefined!
    });
  },
};

person1.listHobbies();
console.info('Lexical scope with arrow functions');
let person2 = {
  name: 'Onur',
  hobbies: ['coding', 'reading', 'cooking'],
  listHobbies: function () {
    this.hobbies.forEach((hobby) => {
      console.log(`My name is ${this?.name} and I like ${hobby}`); // An arrow function binds its this context from the surroinding context, in this case the person2 object!
    });
  },
};

person2.listHobbies();
