function greet() {
  console.log('Hello, World!');
}

const intervalID = setInterval(greet, 1000); // Executes the greet function every 1 second

setTimeout(
  () =>
    // To cancel the interval
    clearInterval(intervalID),
  10000,
); // a timeout to remove the interval after 10 seconds!
