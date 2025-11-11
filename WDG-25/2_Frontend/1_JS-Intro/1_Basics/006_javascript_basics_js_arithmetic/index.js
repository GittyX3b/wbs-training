// We'll create a scenario involving a shopping cart where we apply discounts, calculate tax, and update the total cost
// Shopping cart initial total
let total = 200; // Initial total in dollars

// Applying a coupon discount
let discount = 20; // Discount in dollars
total -= discount; // Subtraction assignment
console.log('Total after discount: $' + total);

// Adding tax to the total
let taxRate = 0.07; // 7% sales tax
total += total * taxRate; // Addition assignment
console.log('Total after tax: $' + total.toFixed(2)); // Two decimal positions

// Multiplying a rewards multiplier
let rewardsMultiplier = 2; // Double points event
let rewardPoints = 50; // Initial reward points
rewardPoints *= rewardsMultiplier; // Multiplication assignment
console.log('Total reward points: ' + rewardPoints);

// Applying a bulk purchase discount (10 items or more, get 5% off)
let items = 10; // Number of items purchased
let bulkDiscount = 0.05; // 5% bulk purchase discount
if (items >= 10) {
  total *= 1 - bulkDiscount; // Multiplication assignment
}
console.log('Total after bulk discount: $' + total.toFixed(2));

// Processing a refund
let refund = 15; // Amount to refund
total -= refund; // Subtraction assignment
console.log('Total after refund: $' + total.toFixed(2));

// Calculating remaining balance after payment
let payment = 100; // Payment made
total -= payment; // Subtraction assignment
console.log('Remaining balance: $' + total.toFixed(2));

let x = 3;
const y = x++; // posfix returns the number before the increment

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a; // prefix returns the number after the increment

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"
