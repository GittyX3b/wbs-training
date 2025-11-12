How we used to fix it
=====================

Before arrow functions there where two main ways of working around this issue:

*   **Copying the value of `this`:** Creating a variable while still in the object scope so the internal function can gain access to `this`
    *   If you are really curious about why and how this works the answer is [closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Closures)
*   **Using `bind()`:** the bind method creates a new function with the specified `this` context

So, in a way, on top of our sugar syntax we have a shortcut to binding a `this`context. However, this doesn't mean the `function` keyword is dead! Arrow functions cannot be created with the `new` keyword and therefore cannot be used as constructors