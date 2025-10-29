/* Initialize an array ====== */
const myArray = [42, "Hello World!", true, 3.14, "Javascript"];
console.log(myArray);

for (const [i, val] of myArray.entries()) {
  console.log(`[${i}] -> ${val}`);
}

myArray[1] = `changed value`;
console.log(myArray);
