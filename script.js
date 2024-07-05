const form = document.querySelector(".form-container");
const userInput = document.getElementById("user-input");
const listContainer = document.querySelector(".list-container");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  addToDo();
  form.reset();
});

function addToDo() {
  const toDoItem = document.createElement("p");
  toDoItem.classList.add("item");
  toDoItem.innerHTML = userInput.value;

  const editBtn = document.createElement("button");
  editBtn.classList.add("btn-edit");

  const editBtnIcon = document.createElement("i");
  editBtnIcon.classList.add("fa-solid", "fa-pen");

  const removeBtn = document.createElement("button");
  removeBtn.classList.add("btn-remove");

  const removeBtnIcon = document.createElement("i");
  removeBtnIcon.classList.add("fa-solid", "fa-trash");

  const list = document.createElement("div");
  list.classList.add("list");

  const action = document.createElement("div");
  action.classList.add("action");

  editBtn.appendChild(editBtnIcon);
  removeBtn.appendChild(removeBtnIcon);
  action.appendChild(editBtn);
  action.appendChild(removeBtn);
  list.appendChild(toDoItem);
  list.appendChild(action);
  listContainer.appendChild(list);

  toDoItem.addEventListener("click", function () {
    markDoneToDo();
  });

  editBtn.addEventListener("click", function () {
    editToDo();
  });

  removeBtn.addEventListener("click", function () {
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
