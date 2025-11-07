// Path to resource
const path = 'https://jsonplaceholder.typicode.com/todos/1';

// By default, fetch issues a GET request, just like any browser window
// when acceessing a web page
// fetch() returns a promise, an object that has a .then() method that will be called once
// the request has been fulfilled
fetch(path)
  .then((res) => {
    // this .then method, receives a function as an argument, this function when called
    // has access to the response object!
    // You can check if the response status is OK
    if (!res.ok) throw new Error('Something went wrong');
    // Or access the JSON data in the response
    return res.json(); // Response.json() returns, incidentally, a promise
  })
  .then((data) => {
    // Hence the double .then
    // But here you already have access to the data!
    console.log(data);
  })
  .catch(console.error);
