import { ALL_ITEMS_CATEGORY } from "@/constants";
import { productsPromise } from "@/service/fetchProducts";
import { use, useState } from "react";

type UseProductsProps = {
  initialCategory: string;
};

export default function useProducts({
  initialCategory,
}: UseProductsProps) {
  const { products } = use(productsPromise);
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);

  const filteredProducts =
    selectedCategory === ALL_ITEMS_CATEGORY
      ? products
      : products.filter((product) => product.category === selectedCategory);


  const categories = [ALL_ITEMS_CATEGORY, ...new Set(products.map((p) => p.category))];

  return {
    filteredProducts,
    categories,
    selectedCategory,
    setSelectedCategory,
  };
}
