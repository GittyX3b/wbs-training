// Using getElementById to get a single element
const container = document.getElementById("container");
console.log(container);

// Using getElementsByClassName to get a live HTMLCollection
const items = document.getElementsByClassName("item");
console.log(items);

// Using getElementsByTagName to get a live HTMLCollection
const paragraphs = document.getElementsByTagName("p");
console.log(paragraphs);

// Using querySelector to get the first matching element
const firstHighlight = document.querySelector(".highlight");
console.log(firstHighlight);

// Using querySelectorAll to get a static NodeList
const allHighlights = document.querySelectorAll(".highlight");
console.log(allHighlights);

// Demonstrating live vs static collections
console.log("Initial number of .item elements:", items.length);
console.log("Initial number of .highlight elements:", allHighlights.length);

const newParagraph = document.createElement("p");
newParagraph.className = "item highlight";
newParagraph.textContent = "Item 4";
container.appendChild(newParagraph);

console.log("After adding new item:");
console.log("Updated number of .item elements:", items.length); // Live collection updates
console.log("Updated number of .highlight elements:", allHighlights.length); // Static collection does not update
