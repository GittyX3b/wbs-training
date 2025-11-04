console.info('First-class functions');
// A function can be assigned to a variable
const myFunc = (param) => console.log(param);
myFunc('Hello');
// A function can be passed as a parameter to another function
const anotherFunction = (callback, value) => {
  // This is a callback because the function passed down is called back in the body of this function!
  callback(value);
};
anotherFunction(myFunc, 'Jorge');
// A function can be returned by another function
const addFactory = (add) => {
  return (num) => num + add;
};
const addTwo = addFactory(2);
const addThree = addFactory(3);
const addFour = addFactory(4);
console.log(addTwo(3)); // Outputs: 5
console.log(addThree(3)); // Outputs: 6
console.log(addFour(3)); // Outputs: 7
// And that kiddos, is a function factory
console.info('Higher-order array methods');
// Observe how each method takes a function as parameter!
const numbers = [1, 2, 3, 4, 5, 6];
const squares = numbers.map((x) => x * x);
console.log(squares); // [1, 4, 9, 16, 25, 36]

const even = numbers.filter((x) => x % 2 === 0);
console.log(even); // [2, 4, 6]

numbers.forEach((x) => console.log(x)); // 1, 2, 3, 4, 5, 6
