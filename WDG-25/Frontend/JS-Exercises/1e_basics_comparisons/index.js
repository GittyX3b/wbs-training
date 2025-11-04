// You can work here or download the template!
// Strict vs Simple Equality and Inequality
console.log('5 == "5": ' + 5 == "5"); // Simple Equality, should be true
console.log('5 === "5": ' + 5 === "5"); // Strict Equality, should be false

// Task
const compareN = (x, y) => {
  return x == y;
};
const compareS = (x, y) => {
  return x === y;
};
const compG = (x, y) => {
  return x > y;
};
const compGE = (x, y) => {
  return x >= y;
};
const compS = (x, y) => {
  return x < y;
};
const compSE = (x, y) => {
  return x <= y;
};

console.log(
  `5 and '5': simple=${compareN(5, "5")}  / strict=${compareS(5, "5")}`
);
console.log(
  `10 and '10': simple=${compareN(10, "10")}  / strict=${compareS(10, "10")}`
);
console.log(`5 and 3: greater=${compG(5, 3)}`);
console.log(`'5' and '3': greater=${compG("5", "3")}`);
console.log(`10 and 20: less=${compS(10, 20)}`);
console.log(`'10' and '20': less=${compS("10", "20")}`);
console.log(`5 and 5: greaterequal=${compGE(5, 5)}`);
console.log(`'5' and 5: greaterequal=${compGE("5", 5)}`);
console.log(`10 and 20: lessequal=${compSE(10, 20)}`);
console.log(`'10' and '20': lessequal=${compSE("10", "20")}`);
