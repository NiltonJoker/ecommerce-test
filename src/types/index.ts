export type ProductData = {
  products: Product[];
  limit: number;
};

export type Product = {
  id: number;
  title: string;
  price: number;
  images: string[];
  stock: number;
  category: string;
};

export type CartProduct = Product & {
  quantity: number;
};

export type HistoryItem = {
  id: string;
  date: string;
  products: CartProduct[];
  totalAmount: number;
}