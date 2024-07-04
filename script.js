const formInput = document.querySelector(".form-input");
const userInput = document.getElementById("user-input");
const buttonInput = document.getElementById("button-input");
const list = document.querySelector(".list");

formInput.addEventListener("submit", function (event) {
  event.preventDefault();
  addToDo();
  formInput.reset();
});

function addToDo() {
  const toDoItem = document.createElement("p");
  toDoItem.innerHTML = userInput.value;

  list.appendChild(toDoItem);

  toDoItem.addEventListener("click", function () {
    markDoneToDo();
  });

  toDoItem.addEventListener("dblclick", function () {
    removeToDo();
  });

  function markDoneToDo() {
    toDoItem.style.textDecoration = "line-through";
    toDoItem.style.textDecorationColor = "#ec5151";
    toDoItem.style.textDecorationThickness = "0.2rem";
  }

  function removeToDo() {
    list.removeChild(toDoItem);
  }
}
