import type { CartProduct, HistoryItem, Product } from "@/types";
import dayjs from "dayjs";

export const createNewProductToCart = (product: Product): CartProduct => {
  const newProduct: CartProduct = {
    ...product,
    quantity: 1,
  };
  return newProduct;
};

export const getHistoryItemFromCart = (
  cartItems: CartProduct[],
  totalAmount: number
): HistoryItem => {
  const historyItem: HistoryItem = {
    id: dayjs().format(),
    date: dayjs().format("YYYY-MM-DD HH:mm:ss"),
    products: cartItems,
    totalAmount,
  };
  return historyItem;
};
