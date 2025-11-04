/* Global and function scope with var ========= */
var a = `global var `;
console.log(a);

function var1() {
  var a = `var inside function`;
  console.log(a);
}
var1();

/* Block scope with let and const ======== */
if (true) {
  let b = `block let`;
  const c = `block const`;

  console.log(b);
  console.log(c);

  //   let b = `redeclared block let`; already declared
  //   const c = `redeclared block const`; already declared
}

// console.log(b); outside not defined
// console.log(c); outside not defined

/* Redeclaration with var ========= */
if (true) {
  var a = `redeclared global var`;
  console.log(a); // overwrites global var a
}

/* Usage of const for arrays and objects ======== */
const arr1 = [1, 2, 3, 4, 5];
const obj1 = { name: `Hugo`, age: 23, active: true };

console.log("arr1 (before): ", arr1);
console.log("obj1 (before): ", obj1);

arr1[3] = "changed value";
obj1.active = false;

console.log("arr1 (after): ", arr1);
console.log("obj1 (after): ", obj1);
