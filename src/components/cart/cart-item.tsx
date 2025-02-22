import type { CartProduct } from "@/types";
import { MinusIcon, PlusIcon, TrashIcon } from "lucide-react";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Skeleton } from "../ui/skeleton";
import { useCartStore } from "@/stores/useCartStore";

type CartItemProps = {
  item: CartProduct;
};

export default function CartItem({ item }: CartItemProps) {
  const { updateQuantity, removeProductFromCart } = useCartStore();

  const handleDecrease = () => {
    updateQuantity(item.id, -1);
  };
  const handleIncrease = () => {
    updateQuantity(item.id, 1);
  };

  const handleDelete = () => {
    removeProductFromCart(item.id);
  }
  

  return (
    <Card className="w-full max-w-xs">
      <div className="grid gap-2.5 p-4">
        <div className="flex items-center gap-4">
          <LazyLoadImage
            src={item.images[0]}
            alt={item.title}
            width={80}
            height={80}
            placeholder={<Skeleton className="h-10 w-10" />}
            className="aspect-square object-contain rounded-lg overflow-hidden basis-[80px] shrink-0"
          />
          <div className="grid gap-1.5">
            <h3 className="font-bold text-base leading-none" data-cart-item={item.id} >{item.title}</h3>
            <div className="font-bold">${item.price}</div>
            <div className="text-sm text-muted">Color: Blue</div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 text-sm">
            <Button
              size="sm"
              variant="outline"
              className="rounded-full"
              data-button-decrease={item.id}
              onClick={handleDecrease}
            >
              <MinusIcon className="w-3 h-3" />
              <span className="sr-only">Decrease</span>
            </Button>
            <span className="font-bold" data-cart-item-quantity={item.id}>{item.quantity}</span>
            <Button
              size="sm"
              variant="outline"
              className="rounded-full"
              data-button-increase={item.id}
              onClick={handleIncrease}
            >
              <PlusIcon className="w-3 h-3" />
              <span className="sr-only">Increase</span>
            </Button>
          </div>
          <Button size="sm" variant="outline" className="rounded-full" onClick={handleDelete}>
            <TrashIcon className="w-4 h-4" />
            <span className="sr-only">Remove</span>
          </Button>
        </div>
      </div>
    </Card>
  );
}
