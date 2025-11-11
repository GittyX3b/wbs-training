// Imagine is a hot summer day and you want a beer. You get a Promise for one!
const promisedBeer = new Promise((resolve, reject) => {
  // Let's have a random value determining if you get your beer
  const isThereBeerAvailable = Math.random() > 0.5 ? true : false;
  if (isThereBeerAvailable) {
    resolve("Take your beer");
  } else {
    reject("Sorry, no beer for you");
  }
});

// Right click on the preview and click reload, the promise should randomly reject or fulfill
promisedBeer.then((value) => console.log(value)).catch(console.error);

// Now let's take that idea to the next level. Let's create a funtion that returns a promise
// so we can re use it!

const pizzaPromise = () =>
  new Promise((resolve, reject) => {
    // Let's have a random value determining if you get your pizza
    const isThereBeerAvailable = Math.random() > 0.5 ? true : false;
    if (isThereBeerAvailable) {
      resolve("Here is an hypothetical slice of pizza");
    } else {
      reject("Sorry, no pizza for you");
    }
  });

// Now you can call pizzaPromise multiple times!

pizzaPromise()
  .then((value) => console.log(value))
  .catch(console.error);
pizzaPromise()
  .then((value) => console.log(value))
  .catch(console.error);
pizzaPromise()
  .then((value) => console.log(value))
  .catch(console.error);
pizzaPromise()
  .then((value) => console.log(value))
  .catch(console.error);

// Right click on the preview and click reload, the promise should randomly reject or fulfill

// The fetch API is simply a function, built in in the browser that will let you interact with
// HTTP APIs to get anything from Pokemons, Quotes and Weather info, to chat completions from Open AI
