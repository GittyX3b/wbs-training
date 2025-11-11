// You can work here or download the template
let counter = 1;

const ini = setInterval(() => {
  fetch(`https://pokeapi.co/api/v2/pokemon/${counter}`)
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));

  counter === 15 ? counter++ : clearInterval(ini);
}, 1000);
