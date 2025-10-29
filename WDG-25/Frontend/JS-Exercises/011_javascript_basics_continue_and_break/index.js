console.info('Break statement');
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break; // Stop the loop once i reaches 5
  }
  console.log(i); // This will log 0, 1, 2, 3, 4
}

console.info('Continue statement');
for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    continue; // Skip the rest of the loop for even numbers
  }
  console.log(i); // This will log 1, 3, 5, 7, 9
}
