import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { CartProduct } from "../types/index";

type CartStore = {
  cartItems: CartProduct[];
  addProductToCart: (product: CartProduct) => void;
  removeProductFromCart: (id: CartProduct["id"]) => void;
  updateQuantity: (id: CartProduct["id"], amount: number) => void;
  clearCart: () => void;
};

export const useCartStore = create<CartStore>()(
  persist(
    (set) => ({
      cartItems: [],

      addProductToCart: (product: CartProduct) =>
        set((state) => {
          const existingProduct = state.cartItems.find(
            (item) => item.id === product.id
          );
          if (existingProduct) {
            return {
              cartItems: state.cartItems.map((item) =>
                item.id === product.id
                  ? { ...item, quantity: item.quantity + 1 }
                  : item
              ),
            };
          }
          return {
            cartItems: [...state.cartItems, { ...product, quantity: 1 }],
          };
        }),
      removeProductFromCart: (id: CartProduct["id"]) =>
        set((state) => ({
          cartItems: state.cartItems.filter((item) => item.id !== id),
        })),
      updateQuantity: (id, amount) =>
        set((state) => ({
          cartItems: state.cartItems
            .map((item) =>
              item.id === id
                ? { ...item, quantity: item.quantity + amount }
                : item
            )
            .filter((item) => item.quantity > 0),
        })),
      clearCart: () => set({ cartItems: [] }),
    }),
    {
      name: "cart-store",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
