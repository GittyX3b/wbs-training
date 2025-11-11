// Accessing an element by ID
const myDiv = document.getElementById('myDiv');
console.log(myDiv.textContent); // Outputs: Hello!

// Creating a new element
const newParagraph = document.createElement('p');
newParagraph.textContent = 'This is a new paragraph.';

// Adding the new element to the document
document.body.appendChild(newParagraph);

// Adding an event listener to a button
const myButton = document.getElementById('myButton');
myButton.addEventListener('click', function () {
  alert('Button clicked!');
});
