// Take this familiar looking code
const pizzaPromise = () =>
  new Promise((resolve, reject) => {
    const isThereBeerAvailable = Math.random() > 0.5 ? true : false;
    if (isThereBeerAvailable) {
      resolve('Here is an hypothetical slice of pizza');
    } else {
      reject('Sorry, no pizza for you');
    }
  });
// You'd use it like this
pizzaPromise()
  .then((value) => console.log(value))
  .catch(console.error);

// Now, let's refactor it
const pizzaPromiseWithAsync = async () => {
  const isThereBeerAvailable = Math.random() > 0.5 ? true : false;
  if (isThereBeerAvailable) {
    return 'Here is an hypothetical slice of pizza';
  } else {
    throw 'Sorry, no pizza for you';
  }
};
// You'd use it like this
try {
  const result = await pizzaPromiseWithAsync();
  console.log(result);
} catch (e) {
  console.error(e);
}
// Easier to read and understanding! Specially if there'd be subsequent promises to resolve, like is the case with the Fetch API

try {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  if (!res.ok) throw new Error('Something went wrong');
  const data = await res.json();
  console.log(data);
} catch (e) {
  console.error(e);
}

// Chef kiss...
