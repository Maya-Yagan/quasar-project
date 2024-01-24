import { defineStore } from 'pinia';
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  UserCredential,
} from 'firebase/auth';
import { auth, db } from 'src/boot/firebase';
import { Product } from './cart';
import { doc, getDoc, setDoc } from 'firebase/firestore';

interface User {
  uid: string;
  firstName: string | null;
  lastName: string | null;
  email: string;
  cartItems: Product[];
}

export const useUserStore = defineStore({
  id: 'user',
  state: () => ({
    user: {} as User,
    cartItems: [] as Product[],
    isSignedIn: false,
  }),
  actions: {
    setUser(user: User) {
      this.user = user;
      this.isSignedIn = user.uid !== '';
    },
    async getUserCartFromFirestore(email: string) {
      try {
        const userDoc = await getDoc(doc(db, 'users', email));

        if (userDoc.exists()) {
          return userDoc.data().cartItems;
        }
        return [];
      } catch (error) {
        console.error('Error retrieving user cart from Firestore:', error);
        return [];
      }
    },
    async addUserToFirestore(user: User): Promise<void> {
      try {
        const userDocRef = doc(db, 'users', user.email);
        await setDoc(userDocRef, {
          uid: user.uid,
          email: user.email,
          cartItems: user.cartItems,
          firstName: user.firstName,
          lastName: user.lastName,
        });
      } catch (error) {
        console.error('Error adding user to Firestore:', error);
        throw error; // Make sure to rethrow the error
      }
    },

    async checkEmailExists(email: string): Promise<boolean> {
      try {
        const userDoc = await getDoc(doc(db, 'users', email));
        return userDoc.exists();
      } catch (error) {
        console.error('Error checking email existence:', error);
        return false;
      }
    },

    async loginWithEmailAndPassword(
      email: string,
      password: string
    ): Promise<UserCredential> {
      return signInWithEmailAndPassword(auth, email, password);
    },

    async registerWithEmailAndPassword(
      email: string,
      password: string
    ): Promise<UserCredential> {
      try {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );

        const user = {
          uid: userCredential.user?.uid ?? '',
          email: email,
          firstName: null,
          lastName: null,
          cartItems: [],
        };

        // Set user information in the user store
        this.setUser(user);

        return userCredential;
      } catch (error) {
        console.error('Error creating user:', error);
        throw error; // Make sure to rethrow the error
      }
    },

    async logout(): Promise<void> {
      console.log('Logout called');
      await signOut(auth);
      this.setUser({
        uid: '',
        email: '',
        firstName: null,
        lastName: null,
        cartItems: [],
      });
    },

    async updateUserInfoInFirestore(): Promise<void> {
      const user = auth.currentUser;
      if (user) {
        const userDoc = await getDoc(doc(db, 'users', user.email ?? ''));
        if (userDoc.exists()) {
          const userData = userDoc.data();
          const userCart = userData?.cartItems ?? [];
          console.log('User Cart from Firestore:', userCart);
          console.log('Local Cart before update:', this.cartItems);
          if (this.cartItems.length === 0) {
            this.setUser({
              uid: user.uid,
              email: user.email ?? '',
              firstName: userData?.firstName ?? null,
              lastName: userData?.lastName ?? null,
              cartItems: userCart,
            });
            this.cartItems = userCart;
          }
          console.log('Local Cart after update:', this.cartItems);
        }
      }
    },
  },
});
