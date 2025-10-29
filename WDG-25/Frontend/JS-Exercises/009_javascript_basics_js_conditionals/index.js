// If, Else, and Else If
console.info('If, Else, and Else If');
let score = 85; // Change the value of score
if (score >= 90) {
  console.log('Grade: A');
} else if (score >= 80) {
  console.log('Grade: B');
} else if (score >= 70) {
  console.log('Grade: C');
} else {
  console.log('Grade: F');
}

// Switch Statement
console.info('Switch Statement');
let day = 3; // Change the value of day
switch (day) {
  case 1:
    console.log('Monday');
    break;
  case 2:
    console.log('Tuesday');
    break;
  case 3:
    console.log('Wednesday');
    break;
  case 6:
  case 7:
    console.log('Weekend');
  default:
    console.log('Another day');
}

// Ternary Operator
console.info('Ternary Operator');
let age = 18;
let isAdult = age >= 18 ? true : false;
console.log(isAdult);
