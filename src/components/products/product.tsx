import type { Product as ProductType } from "@/types";
import { Button } from "../ui/button";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Skeleton } from "../ui/skeleton";
import { useCartStore } from "@/stores/useCartStore";
import { createNewProductToCart } from "@/utils";
import { toast } from "sonner";

type ProductProps = {
  product: ProductType;
};

export default function Product({ product }: ProductProps) {
  const { addProductToCart } = useCartStore();

  const handleClick = (product: ProductType) => {
    addProductToCart(createNewProductToCart(product));
    toast("🚀 Producto añadido al carrito");
  };

  return (
    <div
      className="flex flex-col justify-center items-center p-4 border-2 border-gray-300 rounded-md gap-4"
      data-item="product"
      data-product-id={product.id}
    >
      <LazyLoadImage
        alt={product.title}
        height={100}
        src={product.images[0]} // use normal <img> attributes as props
        width={100}
        className="h-[100px] w-full object-contain"
        placeholder={<Skeleton className="h-[100px] w-full" />}
      />
      {/* <span>{image.caption}</span> */}
      <h2 className="text-lg text-center font-bold line-clamp-1 leading-tight">
        {product.title}
      </h2>
      <p className="text-sm">{product.price} USD</p>

      <Button className="cursor-pointer" id={`product-${product.id}`} data-product={product.id} data-item="add-to-cart" onClick={() => handleClick(product)}>
        Añadir al carrito
      </Button>
    </div>
  );
}
