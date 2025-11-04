// Simple (Abstract) Comparison
console.info('Simple (Abstract) Comparison');
console.log('10' == 10); // true, because '10' is converted to 10
console.log(0 == false); // true, because 0 and false are equivalent after coercion
console.log('1' != 1); // false, because '1' is converted to 1

// Strict Comparison
console.info('Strict Comparison');
console.log('10' === 10); // false, because the types are different
console.log(0 === false); // false, because the types are different
console.log('1' !== 1); // true, because the types are different

// Greater Than and Less Than Comparison
console.info('Greater Than and Less Than Comparison');
console.log(5 > 3); // true, 5 is greater than 3
console.log(2 < 3); // true, 2 is less than 3

// Greater Than or Equal to and Less Than or Equal to
console.info('Greater Than or Equal to and Less Than or Equal to');
console.log(5 >= 5); // true, 5 is equal to 5
console.log(5 >= 3); // true, 5 is greater than 3
console.log(2 <= 3); // true, 2 is less than or equal to 3
console.log(3 <= 3); // true, 3 is equal to 3

// Combining operators in logical checks
let age = 20;
console.log(age >= 18 && age <= 30); // true, age is between 18 and 30
