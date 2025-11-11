JS Variables
============

JavaScript variables are like containers for storing data values. In JavaScript, you can declare variables using three keywords: `var`, `let`, and `const`. Each of these has different usage rules and scope behavior, which is crucial to understand as you start coding.

### Understanding `var`, `let`, and `const`

First we need to understand a tricky thing called **scope**. Scope defines where variables and functions are accessible within the code. In JavaScript, there are two main types of scope: **global**, **function** and **local**.

*   **Global scope variables** are accessible from anywhere in the code.
*   **Block scope variables** exist only within the function or block (like loops or conditionals) where they are declared. Using `let` and `const`, variables are block-scoped, meaning they are confined to the block in which they are defined. This helps prevent variables from being accessed where they shouldn't be, reducing errors and making the code easier to manage and understand.
*   **Function scope variable** are only accessible within the function they are defined in.

1.  **var**
    
    *   **Scope:** `var` declares a variable globally, or locally to an entire function regardless of block scope.
    *   **Issues:** Variables declared with `var` can lead to confusion due to their accessibility outside of the expected block (like a loop or if statement). 
    *   **Use:** It's generally best to avoid using `var` unless you are maintaining older code or working in environments that support only `var`. This is because `var` can pollute the global object and cause unexpected behavior due to its lenient scoping rules.
2.  **let**
    
    *   **Scope:** `let` allows you to declare variables that are limited in scope to the block, statement, or expression where they are used. This is more intuitive and manageable.
    *   **Advantages:** This is the preferred way to declare variables when you expect the value to change, like counters in loops or values in conditional blocks.
    *   **Example:** Using `let` in a loop where each iteration needs its variable.
3.  **const**
    
    *   **Scope:** Similar to `let`, variables declared with `const` are block-scoped.
    *   **Behavior:** The value of a `const` variable cannot change through re-assignment, and it can't be redeclared.
    *   **Best For:** Use `const` for declaring variables that should not change after their initial assignment, like constants used in configurations or settings. This actually includes things like `objects` and `arrays` when simply adding or modifying their properties or values!