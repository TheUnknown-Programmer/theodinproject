const list = document.querySelector("ul");
const input = document.querySelector("input");
const button = document.querySelector("button");

function addItem() {
  const inputValue = input.value;

  if (!inputValue.trim()) return;

  input.value = "";

  const listItem = document.createElement("li");
  const itemText = document.createElement("span");
  const deleteButton = document.createElement("button");

  itemText.textContent = inputValue;
  deleteButton.textContent = "Delete";

  listItem.appendChild(itemText);
  listItem.appendChild(deleteButton);

  list.appendChild(listItem);

  deleteButton.addEventListener("click", () => {
    list.removeChild(listItem);
  });

  input.focus();
}

button.addEventListener("click", addItem);
