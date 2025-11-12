// Inspect the storage in developer tools!
document.getElementById('saveString').addEventListener('click', function () {
  localStorage.setItem('myString', 'Hello, World!');
});

document.getElementById('saveArray').addEventListener('click', function () {
  const myArray = [1, 2, 3, 4, 5];
  localStorage.setItem('myArray', JSON.stringify(myArray));
});

document.getElementById('logStorage').addEventListener('click', function () {
  console.log(localStorage);
});

document.getElementById('removeItem').addEventListener('click', function () {
  localStorage.removeItem('myString');
});

document.getElementById('clearStorage').addEventListener('click', function () {
  localStorage.clear();
});
