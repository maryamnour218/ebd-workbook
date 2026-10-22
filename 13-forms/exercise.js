
/**
 * Reads what is currently typed into the two boxes.
 */
export function readForm() {
  const name = document.querySelector("#name").value.trim();
  const price = Number(document.querySelector("#price").value);

  return { name, price };
}

/**
 * Empties both boxes.
 */
export function clearForm() {
  document.querySelector("#name").value = "";
  document.querySelector("#price").value = "";
}

/**
 * Draws the list from an array of items.
 */
export function renderList(items) {
  const list = document.querySelector("#list");
  list.innerHTML = "";

  items.forEach((item) => {
    const card = document.createElement("li");
    card.classList.add("card");

    const heading = document.createElement("h3");
    heading.textContent = item.name;

    const price = document.createElement("p");
    price.classList.add("price");
    price.textContent = `${item.price} EGP`;

    card.append(heading, price);
    list.append(card);
  });
}

/**
 * Connects the form to the page.
 */
export function wireForm() {
  const form = document.querySelector("#product-form");
  const error = document.querySelector("#error");
  const items = [];

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const item = readForm();

    if (!item.name) {
      error.textContent = "Give the product a name.";
      return;
    }

    const priceInput = document.querySelector("#price").value;

    if (priceInput.trim() === "" || !Number.isFinite(item.price) || item.price <= 0) {
      error.textContent = "Give the product a price.";
      return;
    }

    error.textContent = "";
    items.push(item);
    renderList(items);
    clearForm();
  });
}
