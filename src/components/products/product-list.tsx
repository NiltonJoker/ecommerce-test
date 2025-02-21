import type { Product as ProductType} from "@/types";
import Product from "./product";

type ProductListProps = {
  products: ProductType[];
};

function ProductList({ products }: ProductListProps) {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-4">
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductList;
