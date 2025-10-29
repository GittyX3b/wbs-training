// For Loop: Printing a multiplication table for number 5
console.info('For loop');
for (let i = 1; i <= 10; i++) {
  console.log(`5 * ${i} = ${5 * i}`);
}
console.info('While loop');
let currentTemperature = 16; // starting temperature in Celsius
const targetTemperature = 22; // target temperature in Celsius

while (currentTemperature < targetTemperature) {
  console.log(`Current temperature is ${currentTemperature}�C - Heating up...`);
  currentTemperature++; // simulate the heating process increasing the temperature
}

console.log(`Target temperature of ${targetTemperature}�C reached.`);

console.info('Do...While loop');
let balance = 0; // Starting balance in the cash register
const minimumBalance = 200; // Minimum required balance to start the day

do {
  // Simulate checking the balance and asking for additional funds if needed
  console.log(`Current balance is $${balance}.`);
  if (balance < minimumBalance) {
    console.log(
      `Minimum balance of $${minimumBalance} is required to start the day.`,
    );
    // Simulate adding funds (for this example, we'll assume an input of $100)
    let addedFunds = 100;
    console.log(`Adding $${addedFunds} to the balance.`);
    balance += addedFunds;
  }
} while (balance < minimumBalance);

console.log('Required balance achieved, ready to start the day!');
