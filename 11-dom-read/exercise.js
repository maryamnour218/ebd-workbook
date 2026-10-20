
/**
 * Return the text of the main heading.
 */
export function pageHeading() {
  return document.querySelector("h1").textContent;
}

/**
 * Count the product cards.
 */
export function productCount() {
  return document.querySelectorAll(".card").length;
}

/**
 * Return all product names in page order.
 */
export function productNames() {
  const cards = Array.from(document.querySelectorAll(".card"));

  return cards.map((card) => card.querySelector("h3").textContent);
}

/**
 * Find the price of a product by its name.
 */
export function priceOf(name) {
  const cards = Array.from(document.querySelectorAll(".card"));

  const card = cards.find(
    (card) => card.querySelector("h3").textContent === name
  );

  if (!card) {
    return null;
  }

  return card.querySelector(".price").textContent;
}

/**
 * Return the names of products marked sold-out.
 */
export function soldOutNames() {
  const soldOutCards = Array.from(
    document.querySelectorAll(".card.sold-out")
  );

  return soldOutCards.map((card) => card.querySelector("h3").textContent);
}
