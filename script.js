const dialog = document.querySelector(".dialog-container");
const editForm = document.querySelector(".form-edit");
const editInput = document.querySelector(".edit-input");
const closeBtn = document.querySelector(".btn-close");
const addForm = document.querySelector(".form-add");
const addInput = document.querySelector(".add-input");
const listContainer = document.querySelector(".list-container");

addForm.addEventListener("submit", function (event) {
  event.preventDefault();
  addToDo();
  addForm.reset();
});

function addToDo() {
  const toDoItem = document.createElement("p");
  toDoItem.classList.add("item");
  toDoItem.textContent = addInput.value;

  const editBtn = document.createElement("button");
  editBtn.classList.add("btn-edit");

  const editBtnIcon = document.createElement("i");
  editBtnIcon.classList.add("fa-solid", "fa-pen");

  const removeBtn = document.createElement("button");
  removeBtn.classList.add("btn-remove");

  const removeBtnIcon = document.createElement("i");
  removeBtnIcon.classList.add("fa-solid", "fa-ban");

  const list = document.createElement("div");
  list.classList.add("list");

  const listAction = document.createElement("div");
  listAction.classList.add("list-action");

  editBtn.appendChild(editBtnIcon);
  removeBtn.appendChild(removeBtnIcon);
  listAction.appendChild(editBtn);
  listAction.appendChild(removeBtn);
  list.appendChild(toDoItem);
  list.appendChild(listAction);
  listContainer.appendChild(list);

  toDoItem.addEventListener("click", () => markAndUnmarkDoneToDo());
  editBtn.addEventListener("click", () => editToDo());
  removeBtn.addEventListener("click", () => removeToDo());

  function markAndUnmarkDoneToDo() {
    if (toDoItem.style.textDecoration.includes("line-through")) {
      toDoItem.style.textDecoration = "none";
    } else {
      toDoItem.style.textDecoration = "line-through";
      toDoItem.style.textDecorationColor = "#ec5151";
      toDoItem.style.textDecorationThickness = "0.2rem";
    }
  }

  function editToDo() {
    dialog.showModal();
    editForm.addEventListener(
      "submit",
      () => (toDoItem.textContent = editInput.value),
      { once: true }
    );
    closeBtn.addEventListener("click", () => dialog.close(), { once: true });
    editInput.value = "";
  }

  const removeToDo = () => listContainer.removeChild(list);
}
