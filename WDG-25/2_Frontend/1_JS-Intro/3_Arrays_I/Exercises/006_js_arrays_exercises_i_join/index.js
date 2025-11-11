// You can work here or download the template!
const array = ["apple", "banana", "cherry", "date"];
console.log(`original: ${array}`);

// Create different strings by joining the array elements with various delimiters
// Default delimiter (comma)
let str1 = array.join(`,`);
console.log(`, --> ${str1}`);
// Using dash as delimiter
let str2 = array.join(`-`);
console.log(`- --> ${str2}`);
// Using space as delimiter;
let str3 = array.join(` `);
console.log(`space --> ${array}`);
// Using ' and ' as delimiter
let str4 = array.join(` and `);
console.log(`and --> ${str4}`);
// Without any delimiter
let str5 = array.join(``);
console.log(`without --> ${str5}`);
