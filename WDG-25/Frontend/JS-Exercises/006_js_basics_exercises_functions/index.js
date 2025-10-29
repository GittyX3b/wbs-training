// Function Declarations
function greet() {
  console.log(`Hi, this is greet().`);
}
greet();

function square(x) {
  console.log(`The square of ${x} is ${x * x}.`);
}
square(3);

function getDayName(num) {
  switch (true) {
    case num === 1:
      console.log(`1 represents monday`);
      break;
    case num === 2:
      console.log(`2 represents tuesday`);
      break;
    case num === 3:
      console.log(`3 represents wednesday`);
      break;
    case num === 4:
      console.log(`4 represents thursday`);
      break;
    case num === 5:
      console.log(`5 represents friday`);
      break;
    case num === 6:
      console.log(`6 represents saturday`);
      break;
    case num === 7:
      console.log(`7 represents sunday`);
      break;
    default:
      console.log(`check input`);
      break;
  }
}
getDayName(3);

// Function Expressions

let greetE = () => {
  console.log(`Hello, this is the expressed greetE().`);
};
greetE();

let squareE = (x) => {
  console.log(`The expressed square of ${x} is ${x * x}.`);
};
squareE(4);

let getDayNameE = (num) => {
  num === 1 ? console.log(`1 is for monday E`) : null;
  num === 2 ? console.log(`2 is for tuesday E`) : null;
  num === 3 ? console.log(`3 is for wednesday E`) : null;
  num === 4 ? console.log(`4 is for thursday E`) : null;
  num === 5 ? console.log(`5 is for friday E`) : null;
  num === 6 ? console.log(`6 is for saturday E`) : null;
  num === 7 ? console.log(`7 is for sunday E`) : null;
  !(num >= 1 && num <= 7) ? console.log(`check input E`) : null;
};
getDayNameE(6);
