import CategoryList from "@/components/category-list";
import ProductList from "@/components/products/product-list";
import { Button } from "@/components/ui/button";
import { ALL_ITEMS_CATEGORY, LIMIT_PER_PAGE } from "@/constants";
import useProducts from "@/hooks/useProducts";
import { useCartStore } from "@/stores/useCartStore";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useSearchParams } from "react-router";

export default function Home() {
  const [searchParams] = useSearchParams();

  const initialCategory = searchParams.get("category") || ALL_ITEMS_CATEGORY;

  const { cartItems } = useCartStore();

  const {
    paginatedProducts,
    categories,
    nextPage,
    previousPage,
    currentPage,
    totalPages,
    setSelectedCategory,
  } = useProducts({
    itemsPerPage: LIMIT_PER_PAGE,
    initialCategory,
  });

  return (
    <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4 container mx-auto p-4">
      <CategoryList
        categories={categories}
        setSelectedCategory={setSelectedCategory}
      />

      <div className="flex flex-col gap-6">
        <ProductList products={paginatedProducts} />

        {totalPages === 0 && <p className="text-center">No hay productos disponibles</p>}

        {totalPages > 1 && (
          <div className="flex justify-center gap-4 items-center">
            <Button
              className="cursor-pointer"
              onClick={previousPage}
              disabled={currentPage === 1}
            >
              <ChevronLeft />
            </Button>
            <span>
              Página {currentPage} de {totalPages}
            </span>
            <Button
              className="cursor-pointer"
              onClick={nextPage}
              disabled={currentPage === totalPages}
            >
              <ChevronRight />
            </Button>
          </div>
        )}
      </div>


      <div>
        {
          cartItems.map((item) => (
            <div key={item.id}>
              <p>{item.title}</p>
              <p>{item.quantity}</p>
            </div>
          ))
        }
      </div>
    </div>
  );
}
