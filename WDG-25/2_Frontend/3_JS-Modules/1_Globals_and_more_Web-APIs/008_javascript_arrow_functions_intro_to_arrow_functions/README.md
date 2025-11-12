Intro to arrow functions
========================

Arrow functions, introduced in ECMAScript 6 (ES6), provide a concise syntax for writing functions in JavaScript. They use the `=>` syntax and offer several benefits:

*   **Conciseness**: Arrow functions are shorter and easier to read. For example, `(x) => x * 2` is an arrow function that doubles its input.
*   **No parentheses in paremeter list:** If an arrow function takes only one parameter, the parentheses are not mandatory, this are both valid ways:  
    *   `x => x * 2`
    *   `(x) => x * 2`

However, there's a far more interesting feature of arrow functions beyond syntax sugar: **lexical scope!**