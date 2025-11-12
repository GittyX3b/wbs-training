// A regular function declaration
function sayHello(name) {
  if (new Date().getHours() < 12) {
    return `Good morning, my name is ${name}`;
  } else {
    return `Good afternoon, my name is ${name}`;
  }
}

console.log(sayHello('Anoj'));

// Now consider its arrow version
const sayHelloArrow = (name) =>
  new Date().getHours() < 12
    ? `Good morning, my name is ${name}`
    : `Good afternoon, my name is ${name}`;

console.log(sayHelloArrow('Stephan'));

/* 
 Neat right? An arrow function can: 
  - Implicitly return by ommiting the return keyword if it returns an expression 
  - Omit the parentheses in the parameter list if there's only one parameter (although we are enforcing the style here!)
*/

// Even a refactor of the function declaration with a ternary operator would look like this
function sayHelloTernary(name) {
  return new Date().getHours() < 12
    ? `Good morning, my name is ${name}`
    : `Good afternoon, my name is ${name}`;
}
// The arrow function still takes the cake in terms of being more concise in its syntax, more elegant even. But not everything is clever one-liners.
