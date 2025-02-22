import { useCartStore } from "@/stores/useCartStore";
import { useHistoryStore } from "@/stores/useHistoryStore";
import { getHistoryItemFromCart } from "@/utils";
import { ShoppingCart as ShoppingCartIcon } from "lucide-react";
import { useMemo } from "react";
import { Button } from "../ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import CartItem from "./cart-item";
import { toast } from "sonner";

export default function ShoppingCart() {
  const { cartItems, clearCart } = useCartStore();

  const { addToHistory } = useHistoryStore();

  const totalAmount = useMemo(() => {
    if (cartItems.length === 0) return 0;

    return cartItems.reduce((acc, item) => acc + item.quantity * item.price, 0);
  }, [cartItems]);

  const handlePurchase = () => {
    const newHistoryItem = getHistoryItemFromCart(cartItems, totalAmount);

    addToHistory(newHistoryItem);
    clearCart();
    toast("✅ Compra realizada exitosamente");
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="relative"
          data-item="cart-button"
        >
          <span className="sr-only">Cart</span>
          <ShoppingCartIcon className="h-6 w-6" />
          {cartItems.length !== 0 && (
            <span
              className="absolute top-0 right-0 -mt-1 -mr-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs font-medium text-primary-foreground "
              data-item="cart-badge"
            >
              {cartItems.length}
            </span>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="p-4 overflow-auto">
        <div className="flex flex-col gap-4">
          <SheetTitle className="text-lg font-bold">Carrito</SheetTitle>
          <SheetDescription className="text-sm" data-item="cart-items-quantity">
            {cartItems.length} productos
          </SheetDescription>

          {/* list of product from the cart */}
          <div className="flex flex-col gap-2">
            {cartItems.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>
          <SheetClose asChild>
            <Button
              className="w-full"
              disabled={cartItems.length === 0}
              onClick={handlePurchase}
              
              data-item="purchase-button"
            >
              Comprar {totalAmount !== 0 && `$${totalAmount.toFixed(2)}`}
            </Button>
          </SheetClose>
          <Button
            className="w-full"
            onClick={clearCart}
            disabled={cartItems.length === 0}
            data-item="clear-cart-button"
          >
            Vaciar carrito
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}
