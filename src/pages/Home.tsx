import CategoryFilter from "@/components/category/category-filter";
import CategoryList from "@/components/category/category-list";
import PaginateButtons from "@/components/paginate-buttons";
import ProductList from "@/components/products/product-list";
import { ALL_ITEMS_CATEGORY, LIMIT_PER_PAGE } from "@/constants";
import usePaginate from "@/hooks/usePaginate";
import useProducts from "@/hooks/useProducts";
import { useSearchParams } from "react-router";

export default function Home() {
  const [searchParams] = useSearchParams();

  const initialCategory = searchParams.get("category") || ALL_ITEMS_CATEGORY;

  const {
    filteredProducts,
    categories,
    selectedCategory,
    setSelectedCategory,
  } = useProducts({
    initialCategory,
  });

  const { paginatedItems, nextPage, previousPage, currentPage, totalPages } =
    usePaginate({ itemsPerPage: LIMIT_PER_PAGE, items: filteredProducts });

  return (
    <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] gap-4 container mx-auto p-4">
      <aside className="hidden md:block">
        <CategoryList
          categories={categories}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      </aside>

      <div className="flex flex-col gap-6">
        <CategoryFilter
          categories={categories}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        <ProductList products={paginatedItems} />

        {totalPages === 0 && (
          <p className="text-center">No hay productos disponibles</p>
        )}

        {totalPages > 1 && (
          <PaginateButtons
            currentPage={currentPage}
            nextPage={nextPage}
            previousPage={previousPage}
            totalPages={totalPages}
          />
        )}
      </div>
    </div>
  );
}
