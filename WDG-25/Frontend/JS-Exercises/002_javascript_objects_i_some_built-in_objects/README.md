Some built-in objects
=====================

JavaScript has a rich library of [built-in objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects) that provide essential functionality for common programming tasks.

These objects come with a variety of properties and methods that allow developers to perform mathematical calculations, manipulate strings, handle dates, and much more.

Here are some key built-in objects in JavaScript that are particularly useful and frequently used in various applications:

### 1\. Math Object

The `Math` object in JavaScript provides properties and methods for mathematical constants and functions. This object isn't a constructor. All properties and methods of `Math` are static and can be called by using `Math` as an object without creating it.

*   **Common Uses**:
    *   **Math.random()**: Returns a pseudo-random number between 0 and 1.
    *   **Math.round()**: Rounds a number to the nearest integer.
    *   **Math.max()**, **Math.min()**: Returns the largest or smallest of zero or more numbers.
    *   **Math.floor()**, **Math.ceil()**: Returns the largest integer less than or equal to a number, or the smallest integer greater than or equal to a number, respectively.
    *   **Math.sqrt()**: Returns the square root of a number.
    *   **Math.pow()**: Returns the base to the exponent power, that is, base^exponent.

### 2\. Date Object

The `Date` object is used to work with dates and times. Date objects are created with the `new Date()` constructor.

*   **Common Uses**:
    *   **new Date()**: Creates a new date object with the current date and time
    *   **Date.now()**: Returns the number of milliseconds since January 1, 1970
    *   **getDate()**, **getMonth()**, **getFullYear()**: Retrieve the day of the month, month, and year from a date object.
    *   **setDate()**, **setMonth()**, **setFullYear()**: Set the day of the month, month, and year of a date object.

### 3\. Array Object

Arrays are list-like objects whose prototype has methods to perform traversal and mutation operations. Arrays are created with either the `new Array()` constructor or the literal notation `[]`.

*   **Common Uses**:
    *   **push()**, **pop()**: Add an item to the end of an array, or remove the last item.
    *   **shift()**, **unshift()**: Remove the first item of an array, or add to the front.
    *   **slice()**, **splice()**: Return a portion of an array, or change the contents of an array by removing or replacing existing elements and/or adding new elements.
    *   **map()**, **filter()**, **reduce()**: Transform items in the array, filter out items based on a test, or reduce the array to a single value.