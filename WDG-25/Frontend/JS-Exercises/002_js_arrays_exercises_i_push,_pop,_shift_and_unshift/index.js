const myArray = [1, 2, 3, 4, 5];

console.log(`before push(): ${myArray}`);
myArray.push(6, 7);
console.log(`after push(): ${myArray}`);

let lastValue = myArray.pop();
console.log(`after pop(): ${myArray} and ${lastValue}`);

let firstValue = myArray.shift();
console.log(`after shift(): ${myArray} and ${firstValue}`);

myArray.unshift(-1, 0, 1);
console.log(`after unshift(): ${myArray}`);
