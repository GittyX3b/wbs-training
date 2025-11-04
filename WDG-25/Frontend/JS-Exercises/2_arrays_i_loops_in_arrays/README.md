Loops in arrays
===============

Let's talk about using `for` loops and `for...of` loops to iterate over arrays in JavaScript. These are fundamental techniques for traversing arrays and performing operations on each element.

### `for` Loop

The traditional `for` loop is useful for accessing each element in an array by index. It provides control over the iteration process, such as specifying the start and end points or changing the increment value. This loop is especially handy when you need access to the index of the elements during the loop.

**Use Cases:**

*   Accessing each element's index.
*   Modifying the array during iteration.
*   Using the index for calculations or accessing another parallel array.

### `for...of` Loop

The `for...of` loop provides a simpler and cleaner way to iterate over the elements of an array without accessing the indices. It's part of the ES6 specification and is great for situations where you only need the values and not the indices.

**Use Cases:**

*   When you need each element but not the index.
*   Less error-prone as you do not manage the loop counter or access the array out of bounds.
*   Makes code shorter and more readable.