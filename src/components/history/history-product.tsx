import { CartProduct } from "@/types";

type HistoryProductProps = {
  product: CartProduct;
};

export default function HistoryProduct({ product }: HistoryProductProps) {
  return (
    <div className="flex flex-col gap-2 my-2">
      <div className="flex items-center gap-2">
        <img
          src={product.images[0]}
          alt="product"
          className="h-10 w-10 rounded-full object-contain"
        />
        <div className="grid gap-1.5 items-center">
          <h3 className="font-bold text-base leading-none">{product.title}</h3>
          <div className="flex gap-2 items-center">
            <span className="font-bold">${product.price}</span>
            <span className="text-sm">x {product.quantity}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
