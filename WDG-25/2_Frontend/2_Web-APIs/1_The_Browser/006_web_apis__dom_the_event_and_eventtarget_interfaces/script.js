/*
Elements and event the document itself are target for events

You can use the addEventListener on a valid target, e.g. the window (an object representing the entire window)

You need to specified a valid event type as the first argument

For a full reference on events: 
https://developer.mozilla.org/en-US/docs/Web/Events

the second parameter is called the listener, is an object that has access to an event object with all the information about the current event
*/
window.addEventListener("resize", (e) => {
  console.log(e); // Open the console to see the event object
  // Different events have different properties
  // from the target property, we can get the target that triggered the event, in this case the window itself
  console.log(
    "Window resized to:",
    e.target.innerWidth,
    "x",
    e.target.innerHeight
  );
  // And with a little DOM magic
  const widthContainer = document.getElementById("window-width");
  widthContainer.textContent = `Current width: ${e.target.innerWidth} x ${e.target.innerHeight}`;
  // Chef kiss
});

// You can of course also add listener to elements
let i = 1;
const aboutImg = document.querySelector("#about-img");
aboutImg.addEventListener("click", (e) => {
  console.log(e); // A click event gives us a PointerEvent which has information about, for example, the coordinates of the click
  // Because the target is the img element, we can alter its properties
  e.target.src
    ? (e.target.src = `https://placedog.net/400/300?id=${i++}`)
    : console.log("nö");
});

// Forms are very special
const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault(); // We want to prevent the form from actually trying to navigate
  // We can access the form elements!
  console.dir(e.target.elements);
  // And if the inputs have an id or name, we can access them by it
  if (
    !e.target.elements.name.value ||
    !e.target.elements.email.value ||
    !e.target.elements.message.value
  ) {
    alert("Please fill all the fields!");
  } else {
    console.log(
      e.target.elements.name.value,
      e.target.elements.email.value,
      e.target.elements.message.value
    );
  }
});
