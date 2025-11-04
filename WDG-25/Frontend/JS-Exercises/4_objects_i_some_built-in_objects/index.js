console.info('Math');
console.log(Math.random()); // random number
console.log(Math.round(4.7)); // 5
console.log(Math.sqrt(16)); // 4
console.log(Math.pow(2, 3)); // 8

console.info('Date');
let now = new Date();
console.log(now.toDateString()); // current date
console.log(now.getFullYear()); // returns the year
console.log(Date.now()); // milliseconds since Jan 1, 1970

console.info('Arrays');
let fruits = ['Apple', 'Banana', 'Cherry'];
fruits.push('Date'); // adds Date to the end
console.log(fruits); // Apple, Banana, Cherry, Date
let first = fruits.shift(); // removes Apple from the front
console.log(first); // Apple
console.log(fruits); // Banana, Cherry, Date
