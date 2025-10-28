// Declaration
const birthYear = 1999;
const isStudent = true;

let age = 25;
let name = "John Doe";

const allValues = [name, age, birthYear, isStudent];
console.log("Declaration: " + allValues);

// Reassignment
age = 26;
name = "Jane Doe";
try {
  birthYear = 2000;
} catch (error) {
  console.log(" !! birthYear could not be reassigned");
}
try {
  isStudent = false;
} catch (error) {
  console.log(" !! isStudent could not be reassigned");
}

console.log("Reassignment: " + allValues);

// New Variable
let favoriteColor = "blue";
console.log("Favorite Color init: " + favoriteColor);
favoriteColor = "green";
console.log("Favorite Color reassiged: " + favoriteColor);
