import { db } from 'src/boot/firebase';
import { doc, setDoc, getDoc, updateDoc } from 'firebase/firestore';
import { Product } from 'src/stores/cart';
import { useUserStore } from 'src/stores/user';

export function useFirestore() {
  const userStore = useUserStore();

  const addUserToFirestore = async (user: {
    uid: string;
    firstName: string | null;
    lastName: string | null;
    email: string;
    cartItems: Product[];
  }) => {
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
    }
  };

  const saveUserCartToFirestore = async (cartItems: Product[]) => {
    try {
      const user = userStore.user;
      if (user.email) {
        const userDocRef = doc(db, 'users', user.email);
        await updateDoc(userDocRef, {
          uid: user.uid,
          email: user.email,
          cartItems: cartItems,
          firstName: user.firstName,
          lastName: user.lastName,
        });
      }
    } catch (error) {
      console.error('Error saving user cart to Firestore:', error);
    }
  };

  const getUserCartFromFirestore = async (email: string) => {
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
  };

  return {
    saveUserCartToFirestore,
    getUserCartFromFirestore,
    addUserToFirestore,
  };
}
