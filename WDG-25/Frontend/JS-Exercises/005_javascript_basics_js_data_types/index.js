// String: Stores text
let someName = "Alice";
console.log("String: " + someName);

// Number: Can be an integer or a floating point
let age = 30;
let temperature = 72.5;
console.log("Number: " + age + " and " + temperature);

// BigInt: For very large integers
let largeNumber = 9007199254740991n;
console.log("BigInt: " + largeNumber);

// Boolean: True or false values
let isJavaScriptFun = true;
console.log("Boolean: " + isJavaScriptFun);

// Undefined: A variable not yet assigned a value
let box;
console.log("Undefined: " + box);

// Null: Explicitly nothing
let empty = null;
console.log("Null: " + empty);

// Symbol: Unique and immutable identifier
let mySymbol = Symbol("a unique value");
console.log("Symbol: " + mySymbol.toString());

// Object: Collection of properties
let person = {
  firstName: "John",
  lastName: "Doe",
  age: 28,
};
console.log("Object: " + person);

// Outputting a string that combines different data types. Using template strings https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
console.log(
  `${someName} is ${age} years old, and it's ${
    isJavaScriptFun ? "" : "not "
  }fun to learn JavaScript.`
);
