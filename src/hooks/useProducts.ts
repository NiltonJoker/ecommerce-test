import { ALL_ITEMS_CATEGORY } from "@/constants";
import { productsPromise } from "@/service/fetchProducts";
import { use, useEffect, useState } from "react";

type UseProductsProps = {
  itemsPerPage: number;
  initialCategory: string;
};

export default function useProducts({
  itemsPerPage,
  initialCategory,
}: UseProductsProps) {
  const { products } = use(productsPromise);
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [currentPage, setCurrentPage] = useState(1);

  const filteredProducts =
    selectedCategory === ALL_ITEMS_CATEGORY
      ? products
      : products.filter((product) => product.category === selectedCategory);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedProducts = filteredProducts.slice(
    startIndex,
    startIndex + itemsPerPage
  );
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  const nextPage = () => {
    if (currentPage >= totalPages) return;

    setCurrentPage((currentPage) => currentPage + 1);
  };

  const previousPage = () => {
    if (currentPage <= 1) return;
    setCurrentPage((currentPage) => currentPage - 1);
  };

  // Obtener categorías únicas
  const categories = [ALL_ITEMS_CATEGORY, ...new Set(products.map((p) => p.category))];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  return {
    paginatedProducts,
    categories,
    setSelectedCategory,
    nextPage,
    previousPage,
    currentPage,
    totalPages,
  };
}
