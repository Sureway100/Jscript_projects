// Get elements from the DOM
const form = document.querySelector("form");
const input = document.querySelector("#input");
const submitButton = document.querySelector("#submit");
const list = document.querySelector("#list");

// Create an array to store tasks
let tasks = [];

// Add a task to the array and update the list
function addTask(task) {
  tasks.push(task);
  const li = document.createElement("li");
  li.textContent = task;
  list.appendChild(li);
}

// Handle form submission
form.addEventListener("submit", function (event) {
  event.preventDefault();
  const task = input.value.trim();
  if (task !== "") {
    addTask(task);
    input.value = "";
    input.focus();
  }
});

// Add some default tasks
addTask("Do laundry");
addTask("Buy groceries");
