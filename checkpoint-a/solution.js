
import { findAllOrders, findOrderById } from "./orders-db.js";

// 1. Load all orders from the database
export async function loadOrders() {
  return await findAllOrders();
}

// 2. Return orders from Mansoura that are pending
export function myOrders(orders) {
  return orders.filter(
    (order) => order.city === "Mansoura" && order.status === "pending"
  );
}

// 3. Return the highest price of one item
export function summarize(orders) {
  if (orders.length === 0) {
    return 0;
  }

  return Math.max(...orders.map((order) => order.price));
}

// 4. Find an order and describe it without throwing an error
export async function describeOrder(id) {
  try {
    const order = await findOrderById(id);
    return `${order.student}: ${order.item} x${order.quantity}`;
  } catch {
    return `No order with id ${id}`;
  }
}

// 5. Convert orders into JSON containing only student and item
export function toJsonLines(orders) {
  return JSON.stringify(
    orders.map(({ student, item }) => ({ student, item }))
  );
}
