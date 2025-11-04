JS Functions
============

A function in JavaScript is a block of code designed to perform a particular task. It executes when "something" invokes or calls it. Functions are reusable, can be passed data to operate on (i.e., parameters), and can optionally return data (output).

By the way: **A parameter is the variable listed inside the parentheses in the function definition.** **An argument is the actual value that is sent to the function when it is called**.

🌈The more you know🌈

### Function Declarations

This is one of the ways to define a function. You start with the `function` keyword, followed by the name of the function, parentheses that may include parameters, and a block of code enclosed in curly braces that defines the function body.

### Function Expressions

A function expression stores a function inside a variable. This can be an anonymous function (a function without a name) or a named function. Function expressions are not hoisted, meaning they cannot be called before they are defined in the code.  
  
Choosing between function declarations vs function expressions, again, has to do with scope!

### ES5 vs ES6+ Functions

ECMAScript 6 (also known as ES6 and ECMAScript 2015) introduced several new features for writing cleaner and more concise functions:

*   **ES5 Functions**: Traditional functions, either as declarations or expressions, without the enhancements found in ES6.
    
*   **ES6+ Functions**:
    
    *   **Arrow Functions**: They allow a short syntax. They are always anonymous.
    *   **Default Parameters**: Parameters can now have default values if not provided.
    *   **Rest Parameters**: Functions can accept a variable number of arguments without specifying them explicitly in the function definition.