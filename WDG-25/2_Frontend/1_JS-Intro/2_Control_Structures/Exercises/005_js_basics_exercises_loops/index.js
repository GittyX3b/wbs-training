// You can work here or download the template!
// Array of animals in the zoo
const animals = ["lion", "tiger", "bear", "giraffe", "zebra", "moanianimals"];
let counter_a = 0;
let counter_b = 0;
let counter_c = 0;

// For loop
for (let i = 0; i < animals.length; i++) {
  counter_a++;
}
console.log(`A: I counted ${counter_a} animals.`);

// While loop
while (counter_b < animals.length) {
  counter_b++;
}
console.log(`B: I counted ${counter_b} animals.`);

// Do…while loop
do {
  counter_c++;
} while (counter_c < animals.length);
console.log(`C: I counted ${counter_c} animals.`);
