// Get references to the form, input field, and todo list
const todoForm = document.getElementById('todo-form');
const newTodoInput = document.getElementById('new-todo');
const todoList = document.getElementById('todo-list');

// Function to create a new todo item
function createTodoItem(task) {
  // Create the list item element
  const li = document.createElement('li');
  li.className =
    'flex items-center justify-between bg-gray-100 p-2 mt-2 rounded-md';

  // Create the span element to hold the task text
  const span = document.createElement('span');
  span.textContent = task;
  span.className = 'flex-grow';

  // Create the edit button
  const editButton = document.createElement('button');
  editButton.textContent = 'Edit';
  editButton.className = 'text-yellow-500 ml-2';
  editButton.addEventListener('click', () => editTodoItem(span));

  // Create the delete button
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.className = 'text-red-500 ml-2';
  deleteButton.addEventListener('click', () => deleteTodoItem(li));

  // Append the span and buttons to the list item
  li.appendChild(span);
  li.appendChild(editButton);
  li.appendChild(deleteButton);

  // Append the list item to the todo list
  todoList.appendChild(li);
}

// Function to add a new todo item
function addTodoItem(event) {
  // Prevent the form from submitting
  event.preventDefault();

  // Get the task from the input field
  const task = newTodoInput.value.trim();
  if (task) {
    createTodoItem(task);
    newTodoInput.value = '';
  }
}

// Function to edit a todo item
function editTodoItem(span) {
  const newTask = prompt('Edit your task', span.textContent);
  if (newTask !== null) {
    span.textContent = newTask.trim();
  }
}

// Function to delete a todo item
function deleteTodoItem(li) {
  todoList.removeChild(li);
}

// Add event listener to the form
todoForm.addEventListener('submit', addTodoItem);
