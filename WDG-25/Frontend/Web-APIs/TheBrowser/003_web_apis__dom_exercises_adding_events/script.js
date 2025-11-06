// You can work here or download the template
// Array of 10 random tasks as strings
const tasks = [
  "Complete the project",
  "Attend the meeting",
  "Write a report",
  "Review the code",
  "Fix the bugs",
  "Update the documentation",
  "Plan the next sprint",
  "Conduct user testing",
  "Optimize the performance",
  "Design",
];

// DECLARATIONS
const btnAdd = document.getElementById("add-item-btn");
const btnAlert = document.getElementById("alert-btn");
const btnLog = document.getElementById("console-btn");
const ul = document.getElementById("item-list");

// TASK HANDLING ================================================
const TASK = {
  getRandom: () => {
    let ranVal = Number(Math.floor(Math.random() * tasks.length));
    tasks.length > 0
      ? (output = tasks.splice(ranVal, 1).join())
      : (output = null);

    return output;
  },
};

// ==============================================================

// FIRST BUTTON
btnAdd.addEventListener("mouseup", () => {
  let tempItem = document.createElement("li");
  let tempTask = TASK.getRandom();

  if (tempTask) {
    tempItem.textContent = tempTask;
    ul.append(tempItem);
  } else {
    alert("task array empty");
  }
});

// SECOND BUTTON
btnAlert.addEventListener("mouseup", () => {
  prompt("type some stuff");
});

// THIRD BUTTON
btnLog.addEventListener("mouseup", () => {
  console.log("ah, you can see...");
});
