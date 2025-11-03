Filter
======

The `.filter()` method in JavaScript is an essential array method that creates a new array with all elements that pass the test implemented by the provided function.

Unlike the `.find()` method which stops at the first match, `.filter()` continues to iterate over the entire array, collecting all elements that meet the condition into a new array.

This makes `.filter()` ideal for extracting multiple elements based on specific criteria.

### Characteristics of `.filter()`

*   **Non-mutating**: It does not alter the original array but instead returns a new array.
*   **Selective**: Only elements that return true from the callback function are included in the new array.
*   **Versatile**: Commonly used in data processing, such as extracting subsets of data that match certain criteria.

### Practical Use Cases

*   **Data separation**: Useful for separating or sorting data into different categories based on conditions.
*   **Search functionality**: Implementing search features where multiple items may match the search criteria.
*   **Condition-based processing**: Processing elements that meet specific conditions, useful in applications like rendering lists that fit certain parameters.