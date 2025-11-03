Map
===

The `.map()` method in JavaScript is a powerful higher-order function that transforms an array by applying a function to each of its elements and returns a new array containing the results.

It is part of the Array prototype, and it's a staple in functional programming because it allows you to implement transformations cleanly and efficiently without mutating the original array.

### Characteristics of `.map()`

*   **Return Value**: Every execution of the callback function should return a value; this value is then added to the new array that `.map()` returns.
*   **Functionality**: It can be used for any purpose where you need to transform elements of an array into a new set of values, such as converting data formats, applying calculations, or altering data structure.

### Practical Use Cases

*   **Data transformation**: Useful for converting raw data into a more useful formatted data.
*   **Applying calculations**: Calculating values based on array elements, such as pricing after tax, scores adjustments, etc.
*   **Changing structure**: Transforming the structure of objects within an array, like adding new keys to objects or converting objects to arrays.