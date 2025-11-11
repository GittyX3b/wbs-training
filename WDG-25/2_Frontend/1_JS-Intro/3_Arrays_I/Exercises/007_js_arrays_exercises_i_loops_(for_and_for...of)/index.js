const numberArray = [10, 20, 30, 40, 50];

for (let i = numberArray.length; i > 0; i--) {
  console.log(numberArray[numberArray.length - i]);
}

for (const [i, val] of numberArray.entries()) {
  console.log(`[${i}] -> ${val}`);
}
