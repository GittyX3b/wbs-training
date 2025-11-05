// Select elements using the Element interface
const box1 = document.getElementById("box1");
const box2 = document.getElementById("box2");
const box3 = document.getElementById("box3");

// Manipulate styles
box1.style.backgroundColor = "orange";
box2.style.width = "150px";
box3.style.height = "150px";

// Access and modify children
const container = document.createElement("div");
container.className = "container";
container.appendChild(box1);
document.body.appendChild(container);

// Create a new element and add it as a child
const newBox = document.createElement("div");
newBox.className = "box";
newBox.style.border = "3px dotted red";
newBox.textContent = "New Box";
container.appendChild(newBox);

// Add event listeners to elements. Try to clikc Box 1!
box1.addEventListener("click", () => {
  alert("Box 1 clicked!");
});

// Hover your mouse cursos over Box 2
box2.addEventListener("mouseover", () => {
  box2.style.backgroundColor = "lightgreen";
});

// Move your mouse cursor into Box3 and then move it out
box3.addEventListener("mouseout", () => {
  box3.style.backgroundColor = "red";
});

// adding box by template string DN
const mybox = document.createElement("div");
mybox.classList.add("box");
mybox.style.background = "purple";
mybox.innerHTML = "<div class'box'>my box</div>";
container.appendChild(mybox);

// Manipulate text content
newBox.textContent = "Updated Box";

// Demonstrating children property
console.log("Container children:", container.children);

// Selecting elements from an element
const a = container.querySelector(".box");
console.log(a);
