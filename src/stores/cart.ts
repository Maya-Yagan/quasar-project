import { defineStore } from 'pinia';
import { useFirestore } from 'src/services/useFirestore';
import { onAuthStateChanged, User as FirebaseAuthUser } from 'firebase/auth';
import { auth } from 'src/boot/firebase';
import { onUnmounted } from 'vue';
export interface Product {
  title: string;
  imgLink: string;
  price: number;
  page?: number;
  companyName: string;
  productInfo: string;
  quantity: number;
}

export const useCartStore = defineStore({
  id: 'cart',
  state: () => ({
    cartItems: [] as Product[],
    userEmail: null as string | null,
    firestore: useFirestore(),
  }),
  getters: {
    cartItemsCount(): number {
      return this.cartItems.reduce(
        (count, product) => count + product.quantity,
        0
      );
    },
    totalPrice(): number {
      const total = this.cartItems.reduce(
        (total, product) => total + product.price * product.quantity,
        0
      );
      return Number(total.toFixed(2));
    },
  },
  actions: {
    initAuthObserver() {
      return new Promise<void>((resolve) => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
          this.userEmail = user?.email ?? null;
          resolve();
        });

        // Clean up the observer when the component is unmounted
        onUnmounted(() => {
          unsubscribe();
        });
      });
    },

    async addToCart({ product, page }: { product: Product; page: number }) {
      await this.initAuthObserver();
      const user: FirebaseAuthUser | null = auth.currentUser;
      if (user && user.email) {
        /*previous implementation
        this.cartItems.push({ ...product, page });
        await this.updateFirestoreCart();
        */
        const existingProduct = this.cartItems.find(
          (item) => item.title === product.title
        );
        if (existingProduct) {
          // If the product is already in the cart, update its quantity
          existingProduct.quantity += 1;
          await this.firestore.saveUserCartToFirestore(this.cartItems); // Update the quantity in the database
        } else {
          // If the product is not in the cart, add it with quantity 1
          const userCart = await this.firestore.getUserCartFromFirestore(
            user.email
          );
          userCart.push({ ...product, page, quantity: 1 });
          await this.firestore.saveUserCartToFirestore(userCart);

          // Update the local cart with the new user cart
          this.cartItems = userCart;
        }
      }
    },

    async removeFromCart(product: Product) {
      const index = this.cartItems.findIndex(
        (item) => item.title === product.title
      );

      if (index !== -1) {
        if (this.cartItems[index].quantity > 1) {
          // If the product has a quantity greater than 1, decrease the quantity
          this.cartItems[index].quantity -= 1;
          await this.firestore.saveUserCartToFirestore(this.cartItems);
        } else {
          // If the product has quantity 1, remove it from the cart
          this.cartItems.splice(index, 1);
          console.log('Local Cart after removal:', this.cartItems);
          try {
            await this.firestore.saveUserCartToFirestore(this.cartItems);
          } catch (error) {
            console.error('Error updating Firestore:', error);
          }
        }
      }
    },
    resetCart() {
      this.cartItems = [];
    },

    async removeCompletelyFromCart(product: Product) {
      const index = this.cartItems.findIndex(
        (item) => item.title === product.title
      );

      if (index !== -1) {
        this.cartItems.splice(index, 1);
        console.log('Local Cart after removal:', this.cartItems);
        try {
          await this.firestore.saveUserCartToFirestore(this.cartItems);
        } catch (error) {
          console.error('Error updating Firestore:', error);
        }
      }
    },

    async updateFirestoreCart(): Promise<void> {
      const user: FirebaseAuthUser | null = auth.currentUser;

      if (user && user.email) {
        const userCart = await this.firestore.getUserCartFromFirestore(
          user.email
        );

        // Update the local cart with the fetched user cart
        this.cartItems = userCart;

        //await this.firestore.saveUserCartToFirestore(this.cartItems);
      }
    },
  },
});
