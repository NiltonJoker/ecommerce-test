import { ProductData } from "@/types";

export const fetchProducts = async () => {
  const response = await fetch("https://dummyjson.com/products");
  if (!response.ok) {
    throw new Error("Error al cargar los productos");
  }
  return response.json();
};

// Crea una promesa estable
export const productsPromise:Promise<ProductData> = fetchProducts();