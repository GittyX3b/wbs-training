// `var`
var variableWithVar = 'This is a value set with var';

if (true) {
  // This block will always execute since the condition is a literal true
  var variableWithVar = 'This is another value set with var';
}

/* 
We initially declared a variable with `var` but:
 - `var` allows re-declaration
 - `var` is always global to the entire script
 - So we can accidentally overwrite a variable 
*/
console.log(variableWithVar);
// `let`
let variableWithLet = 'This is a value set with let';

if (true) {
  // This block will always execute since the condition is a literal true
  let variableWithLet = 'This is another value set with let';
}

/* 
We initially declared a variable with `let` but:
 - `let` is block-scoped, only exists in the block it's declared
 - The `variableWithLet` inside the if block is by all means different to the one in line 17
 - No more overwritten variables!
 - We can also reassign a value into it 
*/
variableWithLet = 'New value';
console.log(variableWithLet);

// `let`
const variableWithConst = 'This is a value set with const';

if (true) {
  // This block will always execute since the condition is a literal true
  const variableWithConst = 'This is another value set with const';
}

/* 
We initially declared a variable with `const` but:
 - `const` is block-scoped, only exists in the block it's declared
 - The `variableWithConst` inside the if block is by all means different to the one in line 35
 - No more overwritten variables!
 - `const` doesn't allow reassignment, uncomment line 49 to see everything crash
*/
// variableWithConst = 'New value';
console.log(variableWithConst);
