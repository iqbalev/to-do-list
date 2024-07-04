const formInput = document.querySelector(".form-input");
const userInput = document.getElementById("user-input");
const listContainer = document.querySelector(".list-container");

formInput.addEventListener("submit", function (event) {
  event.preventDefault();
  addToDo();
  formInput.reset();
});

function addToDo() {
  const toDoItem = document.createElement("p");
  toDoItem.innerHTML = userInput.value;

  const buttonEdit = document.createElement("button");
  buttonEdit.classList.add("button-edit");

  const buttonEditIcon = document.createElement("i");
  buttonEditIcon.classList.add("fa-solid", "fa-pen");

  const buttonRemove = document.createElement("button");
  buttonRemove.classList.add("button-remove");

  const buttonRemoveIcon = document.createElement("i");
  buttonRemoveIcon.classList.add("fa-solid", "fa-trash");

  const list = document.createElement("div");
  list.classList.add("list");

  list.appendChild(toDoItem);

  list.appendChild(buttonEdit);
  buttonEdit.appendChild(buttonEditIcon);

  list.appendChild(buttonRemove);
  buttonRemove.appendChild(buttonRemoveIcon);

  listContainer.appendChild(list);

  toDoItem.addEventListener("click", function () {
    markDoneToDo();
  });

  buttonEdit.addEventListener("click", function () {
    editToDo();
  });

  buttonRemove.addEventListener("click", function () {
    removeToDo();
  });

  function markDoneToDo() {
    toDoItem.style.textDecoration = "line-through";
    toDoItem.style.textDecorationColor = "#ec5151";
    toDoItem.style.textDecorationThickness = "0.2rem";
  }

  function editToDo() {
    const promptInput = prompt("Enter a new things to do");

    if (promptInput) {
      toDoItem.innerHTML = promptInput;
    }
  }

  function removeToDo() {
    listContainer.removeChild(list);
  }
}
