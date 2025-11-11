// Get references to the form, input field, and todo list
const todoForm = document.getElementById("todo-form");
const newTodoInput = document.getElementById("new-todo");
const todoList = document.getElementById("todo-list");

// Function to create a new todo item
function createTodoItem(task) {
  fetch("https://jsonplaceholder.typicode.com/posts", {
    // We need to explicitly indicate the method
    method: "POST",
    // We need to inform our API, in this case, JSON Placeholder, we are sending data as JSON
    headers: {
      "Content-Type": "application/json",
    },
    // And we send our stringified body!
    body: JSON.stringify({
      userId: 1, //
      title: task,
      completed: false,
    }),
  })
    .then((res) => {
      // this .then method, receives a function as an argument, this function when called
      // has access to the response object!
      // You can check if the response status is OK
      if (!res.ok) throw new Error("Something went wrong");
      // Or access the JSON data in the response
      return res.json(); // Response.json() returns, incidentally, a promise
    })
    .then((data) => {
      // Hence the double .then
      // But here you already have access to the data!
      // This fake API will give us an id of 101 for our new todo!
      console.log(data);
      // Create list item
      const li = createListItem(data);
      // Add to DOM
      todoList.appendChild(li);
      // and voila! Obviously our data is not being stored but all the steps are the same! we will deal with that soon enougH!
    })
    .catch(console.error);
}

// Function to add a new todo item
function addTodoItem(event) {
  // Prevent the form from submitting
  event.preventDefault();

  // Get the task from the input field
  const task = newTodoInput.value.trim();
  if (task) {
    createTodoItem(task);
    newTodoInput.value = "";
  }
}

// Function to edit a todo item
function editTodoItem(span) {
  const newTask = prompt("Edit your task", span.textContent);
  if (newTask !== null) {
    span.textContent = newTask.trim();
  }
}

// Function to delete a todo item
function deleteTodoItem(li) {
  todoList.removeChild(li);
}

// We are separating the logic for the li creation here
function createListItem(todo) {
  const li = document.createElement("li");
  li.className =
    "flex items-center justify-between bg-gray-100 p-2 mt-2 rounded-md";

  // Create the span element to hold the task text
  const span = document.createElement("span");
  span.textContent = todo.title;
  span.className = "flex-grow";

  // Create the edit button
  const editButton = document.createElement("button");
  editButton.textContent = "Edit";
  editButton.className = "text-yellow-500 ml-2";
  editButton.addEventListener("click", () => editTodoItem(span));

  // Create the delete button
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.className = "text-red-500 ml-2";
  deleteButton.addEventListener("click", () => deleteTodoItem(li));

  // Append the span and buttons to the list item
  li.appendChild(span);
  li.appendChild(editButton);
  li.appendChild(deleteButton);

  return li;
}

// Add event listener to the form
todoForm.addEventListener("submit", addTodoItem);
