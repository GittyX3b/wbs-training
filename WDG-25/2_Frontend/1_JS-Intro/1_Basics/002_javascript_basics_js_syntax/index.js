// Values
console.log(10); // In this case, 10, is a literal value
const a = 20;
console.log(a); // In this case, a is a variable that holds a value

// Declaring variables
var myName = 'Jorge'; // uses the `var` keyword
let sum = 0; // uses the `let` keyword
const taxRate = 0.15; // uses the `const` keyword for constant values

console.log(myName);
console.log(sum);
console.log(taxRate);

/* 
In short:
- `let` allows the value to be reassigned durin the life of the script
- `const` stands for constant, doesn't allow reassignment
- `var` is the original way of declaring a variable, however has some pitfalls when it comes to scope. We will discuss this later
*/

// Simple arithmetic operations and assignment
sum = 5 + 6; // addition, remember `let` allows reassignment
sum = sum - 1; // subtraction
console.log(sum); // did you guess the current value for `sum` at this point?
let product = sum * taxRate; // multiplication
let finalValue = product / 2; // division
console.log(product);
console.log(finalValue);

// Expression that uses variables, values, and operators
let result = (sum + product) * taxRate;
console.log(result);

// Single line comment uses two forward slashes
/* Multi-line Comment
   More detailed explanation can go here. */

// Demonstrating case sensitivity
let CaseSensitive = 'not the same as';
let casesensitive = 'this';
// If you try to use a variable that's not declared, you'll get a Reference Error
// Uncomment the next line
// console.log(undeclared);
