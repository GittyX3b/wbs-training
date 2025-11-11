const button = document.getElementById('fetch-poke');
const ul = document.getElementById('todo-list');
// Path to resource
const path = 'https://pokeapi.co/api/v2/pokemon';
let pokeId = 1;

// Event listener on button
button.addEventListener('click', () => {
  // Disabling button while we fetch to avoid duplicates
  button.disabled = true;
  button.classList.remove('bg-red-500', 'hover:bg-yellow-500');
  button.classList.add('bg-gray-300', 'hover:bg-gray-300');
  // By default, fetch issues a GET request, just like any browser window
  // when acceessing a web page
  // fetch() returns a promise, an object that has a .then() method that will be called once
  // the request has been fulfilled
  fetch(`${path}/${pokeId}`)
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
      const li = document.createElement('li');
      li.classList.add(
        'flex',
        'items-center',
        'justify-around',
        'p-2',
        'bg-gray-100',
        'rounded',
      );
      li.innerHTML = `<div class='capitalize'>${data.species.name}</div><img src='${data.sprites.front_default}'/>`;
      ul.appendChild(li);
      li.scrollIntoView({ behavior: 'smooth', block: 'end' });
      // Increasing counter
      pokeId++;
      // Enabling  button while we fetch to avoid duplicates
      button.classList.remove('bg-gray-300', 'hover:bg-gray-300');
      button.classList.add('bg-red-500', 'hover:bg-yellow-500');
      button.disabled = false;
    })
    .catch(console.error);
});
