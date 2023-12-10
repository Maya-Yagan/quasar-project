import { defineStore } from 'pinia';
interface Product {
  title: string;
  imgLink: string;
  price: number;
  page?: number;
}

export const useCartStore = defineStore({
  id: 'cart',
  state: () => ({
    cartItems: [] as Product[],
  }),
  getters: {
    cartItemsCount(): number {
      return this.cartItems.length;
    },
    totalPrice(): number {
      const total = this.cartItems.reduce(
        (total, product) => total + product.price,
        0
      );
      return Number(total.toFixed(2));
    },
  },
  actions: {
    addToCart({ product, page }: { product: Product; page: number }) {
      this.cartItems.push({ ...product, page });
    },
    removeFromCart(product: Product) {
      const index = this.cartItems.findIndex(
        (item) => item.title === product.title
      );
      if (index !== -1) {
        this.cartItems.splice(index, 1);
      }
    },
  },
});
