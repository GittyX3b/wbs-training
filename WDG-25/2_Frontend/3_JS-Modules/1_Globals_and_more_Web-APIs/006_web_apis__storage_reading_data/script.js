document
  .getElementById('retrieveString')
  .addEventListener('click', function () {
    const myString = localStorage.getItem('myString');
    console.log(myString);
  });

document.getElementById('retrieveArray').addEventListener('click', function () {
  const arrayInStorage = localStorage.getItem('myArray');
  // Before parsing is just a string!
  console.log(arrayInStorage);
  // The next line would fail because the map method only exists in arrays
  // arrayInStorage.forEach((e) => console.log(e));
  const myArray = JSON.parse(arrayInStorage);
  // After parsing, now you have an object of type array!
  console.log(myArray);
  // The next line should work
  // myArray.forEach((e) => console.log(e));
});

document
  .getElementById('retrieveObject')
  .addEventListener('click', function () {
    const objectInStorage = localStorage.getItem('myObject');
    // Same as above, this is just a string
    console.log(typeof objectInStorage);
    const myObject = JSON.parse(objectInStorage);
    // Now is an object
    console.log(typeof myObject);
    console.log(myObject);
  });

document.getElementById('logStorage').addEventListener('click', function () {
  console.log(localStorage);
});
