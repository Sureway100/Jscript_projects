// select the HTML elements
const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

// create an array to store the todos
let todos = [];

// add an event listener to the form to handle form submission
form.addEventListener("submit", function (event) {
  event.preventDefault(); // prevent the form from refreshing the page

  // create a new todo object
  const todo = {
    id: Date.now(),
    text: input.value,
    completed: false,
  };

  // add the todo to the todos array
  todos.push(todo);

  // clear the input field
  input.value = "";

  // update the UI
  renderTodos();
});

// function to render the todos in the UI
function renderTodos() {
  // clear the existing todos
  ul.innerHTML = "";

  // render each todo
  todos.forEach(function (todo) {
    // create a new list item for the todo
    const li = document.createElement("li");

    // set the text of the list item to the todo text
    li.textContent = todo.text;

    // add a data-id attribute to the list item
    li.setAttribute("data-id", todo.id);

    // add a class of 'completed' to the list item if the todo is completed
    if (todo.completed) {
      li.classList.add("completed");
    }

    // add event listener to toggle the 'completed' class on click
    li.addEventListener("click", function () {
      todo.completed = !todo.completed;
      renderTodos();
    });

    // append the list item to the ul
    ul.appendChild(li);
  });
}

// initial render
renderTodos();
