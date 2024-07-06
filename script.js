const prompt = document.querySelector(".prompt-container");
const changeInput = document.querySelector(".change-input");
const confirmBtn = document.querySelector(".btn-confirm");
const closeBtn = document.querySelector(".btn-close");
const form = document.querySelector(".form-container");
const addInput = document.querySelector(".add-input");
const listContainer = document.querySelector(".list-container");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  addToDo();
  form.reset();
});

function addToDo() {
  const toDoItem = document.createElement("p");
  toDoItem.classList.add("item");
  toDoItem.innerHTML = addInput.value;

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
    prompt.style.display = "flex";

    confirmBtn.addEventListener(
      "click",
      function () {
        if (changeInput.value) {
          toDoItem.innerHTML = changeInput.value;
          prompt.style.display = "none";
        } else {
          alert("Please enter something!");
        }
      },
      { once: true }
    );

    closeBtn.addEventListener(
      "click",
      function () {
        prompt.style.display = "none";
      },
      { once: true }
    );

    changeInput.value = "";
  }

  function removeToDo() {
    listContainer.removeChild(list);
  }
}
