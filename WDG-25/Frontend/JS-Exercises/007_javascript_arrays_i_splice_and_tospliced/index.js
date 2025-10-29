console.info('.splice()');
const fruits = ['Apple', 'Banana', 'Cherry', 'Date'];
// Inserts at index 1
fruits.splice(1, 0, 'Mango');

// Remove 1 element at index 2 and add 2 new elements
const removed = fruits.splice(2, 1, 'Grapes', 'Kiwi');

console.log(fruits); // Output: ['Apple', 'Mango', 'Grapes', 'Kiwi', 'Cherry', 'Date']
console.log(removed); // Output: ['Banana']

console.info('.toSpliced()');
const months = ['Jan', 'Mar', 'Apr', 'May'];

// Inserting an element at index 1
const months2 = months.toSpliced(1, 0, 'Feb');
console.log(months2); // ["Jan", "Feb", "Mar", "Apr", "May"]

// Deleting two elements starting from index 2
const months3 = months2.toSpliced(2, 2);
console.log(months3); // ["Jan", "Feb", "May"]

// Replacing one element at index 1 with two new elements
const months4 = months3.toSpliced(1, 1, 'Feb', 'Mar');
console.log(months4); // ["Jan", "Feb", "Mar", "May"]

// Original array is not modified
console.log(months); // ["Jan", "Mar", "Apr", "May"]
