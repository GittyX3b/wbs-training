// Addition
let a = 5;
let b = "4";

let sum = a + b;
console.log(`a: ${a} + b: ${b} = Sum: ${sum}`); // JS not converts a to a string and concatenates

// Subtraction
let diff = a - b;
console.log(`a: ${a} - b: ${b} = Diff: ${diff}`); // JS converts b to number

// Multiplication
let c = 7;

let pro = b * c;
console.log(`b: ${b} * c: ${c} = Pro: ${pro}`); // JS converts b to number

// Division
let quo = c / b;
console.log(`c: ${c} / b: ${b} = Quo: ${quo}`); // JS converts b to number

// Modulus
let rem = c % a;
console.log(`c: ${c} % a: ${a}  = Rem: ${rem}`); // JS converts b to number
let rem2 = c % b;
console.log(`c: ${c} % b: ${b}  = Rem: ${rem2}`); // JS converts b to number

// Series of Operations
let w = 2;
let x = 3;
let y = 5;
let z = 8;

console.log(`w: ${w} + x: ${x} + y: ${y} + z: ${z} = res: ${w + x + y + z}`);
console.log(`w: ${w} - x: ${x} - y: ${y} - z: ${z} = res: ${w - x - y - z}`);
console.log(`w: ${w} * x: ${x} * y: ${y} * z: ${z} = res: ${w * x * y * z}`);
console.log(`w: ${w} / x: ${x} / y: ${y} / z: ${z} = res: ${w / x / y / z}`);
console.log(
  `w: ${w} % x: ${x} % y: ${y} % z: ${z} = res: ${((w % x) % y) % z}`
);
