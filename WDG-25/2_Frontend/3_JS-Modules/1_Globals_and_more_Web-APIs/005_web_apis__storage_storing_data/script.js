// Inspect the storage in developer tools!
document.getElementById('saveString').addEventListener('click', function () {
  localStorage.setItem('myString', 'Hello, World!');
});

document.getElementById('saveArray').addEventListener('click', function () {
  const myArray = [1, 2, 3, 4, 5];
  localStorage.setItem('myArray', JSON.stringify(myArray));
});

document.getElementById('saveObject').addEventListener('click', function () {
  const myObject = { name: 'John', age: 30, city: 'New York' };
  localStorage.setItem('myObject', JSON.stringify(myObject));
});

/* 
Let's say you want to store an array in localStorage and then later retrieve it, add more elements to it, and store the updated array back in localStorage. The spread operator makes this process straightforward.
*/

document.getElementById('addToArray').addEventListener('click', function () {
  const storedArray = JSON.parse(localStorage.getItem('myArray')) || [];
  const newArray = [...storedArray, 6, 7, 8];
  localStorage.setItem('myArray', JSON.stringify(newArray));
});

// Check the console to see all your keys and values!
document.getElementById('logStorage').addEventListener('click', function () {
  console.log('Current LocalStorage:', localStorage);
});
