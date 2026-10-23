import { items } from "./items.js";

export function renderItems(list) {
  const listElement = document.querySelector("#list");
  listElement.replaceChildren();

  list.forEach((item) => {
    const li = document.createElement("li");
    li.classList.add("row");
    li.textContent = `${item.name} - ${item.price} EGP`;
    listElement.append(li);
  });
}

export function matching() {
  return items.filter((item) => item.inStock === true);
}

export function start() {
  renderItems(items);

  const button = document.querySelector("#filter-button");

  button.addEventListener("click", () => {
    renderItems(matching());
  });
}

