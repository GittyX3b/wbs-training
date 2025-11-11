console.info('.reverse()');
const numbers = [1, 2, 3, 4, 5];
const reversedNumbers = numbers.reverse();

console.log(reversedNumbers); // Output: [5, 4, 3, 2, 1]
console.log(numbers); // Output: [5, 4, 3, 2, 1] (original array is modified)

console.info('.toReversed()');
const names = ['Jorge', 'Besslan', 'Stephan'];
const namesReversed = names.toReversed();
console.log(namesReversed); // Output: ['Stephan', 'Besslan', 'Jorge']
console.log(names); // Output: ['Jorge', 'Besslan', 'Stephan'] (original is NOT modified)
