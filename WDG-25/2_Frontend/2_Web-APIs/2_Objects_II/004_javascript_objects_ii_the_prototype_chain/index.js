// Let's take an array as an example
const myArray = [1, 2, 3, 4];
console.log(myArray);
/* Inspect the browser console because this is not visible in or preview window

If you expand the array output in the console, you'll be able to see a couple things:

0: 1
1: 2
2: 3
3: 4
length: 4
[[Prototype]]: Array(0)

This is simply stating that we have an array with 4 elements, indexed from 0 to 3 and a length of 4. But what is this Prototype thing? Expand it!

Now you see a list of all the possible methods that ALL arrays share. This is because every array inherits from the Array class, or in more correctly in JS, the Array prototype.

That's why the official docs for say, the forEach method, lists it as Array.prototype.forEach https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach You can be sure every array will have all those methods. Let's try
*/
myArray.forEach((el) => console.log(el));
const higherThanThree = myArray.filter((el) => el > 3);
console.log(higherThanThree);

/* 
Ultimately every object in JS inherits from the Object prototype, that's why if you scroll to the bottom of the list of methods in the Array prototype in the browser's console, you'll see [[Prototype]]: Object

The Object prototype sits at the top of the prototype chain

This is true for built-in objects but also for custom ones
*/

class Student {
  #name;
  #bootcamp;

  constructor(name, bootcamp) {
    this.#name = name;
    this.#bootcamp = bootcamp;
  }

  intro() {
    return `Hi, my name is ${this.#name} and I study ${this.#bootcamp}`;
  }
}

const alex = new Student("Alex", "Web Development");
console.log(alex);
console.log(alex.intro());
// Check the browser console and see how the intro method is part of the Student prototype, therefore, every instance of Student will share this method :D
