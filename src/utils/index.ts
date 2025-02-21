import type { CartProduct, Product } from "@/types";

export const createNewProductToCart = (product: Product): CartProduct => {
  const newProduct: CartProduct = {
    ...product,
    quantity: 1,
  };
  return newProduct;
};