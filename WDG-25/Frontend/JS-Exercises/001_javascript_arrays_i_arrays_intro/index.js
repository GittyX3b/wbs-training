// Creating an array
console.info('Creating an array');
// Although is possible to create an array with new Array(), we will default to a literal notation
const hobbies = ['coding', 'cooking', 'contemplating existence'];
console.info('Accessing elements');
// Arrays are objects where values can be accessed by a special property called index
// Index is 0-based
console.log(hobbies[0]); // first element
console.log(hobbies[1]);
console.log(hobbies[2]);
console.log(hobbies[3]); // undefined

// Example of using .push() method
console.info('Example of .push() method');
const fruits = ['apple', 'banana'];
fruits.push('orange');
console.log(fruits); // Output: ['apple', 'banana', 'orange']

// Example of using .pop() method
console.info('Example of .pop() method');
const numbers = [1, 2, 3];
const lastElement = numbers.pop();
console.log(lastElement, numbers); // Output: 3, [1, 2]

// Example of using .shift() method
console.info('Example of .shift() method');
const cities = ['New York', 'Los Angeles', 'Chicago'];
const firstCity = cities.shift();
console.log(firstCity, cities); // Output: 'New York', ['Los Angeles', 'Chicago']

// Example of using .unshift() method
console.info('Example of .unshift() method');
const books = ['Book1', 'Book2'];
books.unshift('IntroBook');
console.log(books); // Output: ['IntroBook', 'Book1', 'Book2']

// Example of using .slice() method
console.info('Example of .slice() method');
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
const someAnimals = animals.slice(2, 4);
console.log(someAnimals); // Output: ['camel', 'duck']
