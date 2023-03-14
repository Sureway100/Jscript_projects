let taskList = document.getElementById("taskList");
let taskInput = document.getElementById("taskInput");

function addTask() {
  let taskText = taskInput.value.trim();
  if (taskText === "") {
    alert("Please enter a task.");
    return;
  }

  let taskItem = document.createElement("li");
  taskItem.innerText = taskText;
  taskList.appendChild(taskItem);
  taskInput.value = "";
}
