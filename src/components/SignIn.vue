<template>
  <div class="center-card-content">
    <q-card flat>
      <q-card-section class="center-content">
        <q-avatar size="40px">
          <img
            src="https://i5.walmartimages.com/dfw/4ff9c6c9-d10e/k2-_ef2c8660-96ed-4f64-891d-329fa488c482.v1.png"
          />
        </q-avatar>
      </q-card-section>
      <q-card-section>
        <div class="text-h6 text-bold q-mb-sm">Welcome Back!</div>
        <div class="text-body2 text-weight-regular q-mb-md">
          Email Address<br />{{ $route.params.email }}
          <a
            href="#"
            class="text-weight-light text-black"
            style="text-decoration: underline"
            >Change</a
          >
        </div>
        <form @submit.prevent.stop="signIn">
          <div class="text-body2 text-bold">Enter your password</div>
          <q-input
            v-model="password"
            :rules="passwordRules"
            ref="passwordRef"
            class="q-mb-sm"
            outlined
            :type="isPwd ? 'password' : 'text'"
          >
            <template v-slot:append>
              <q-icon
                :name="isPwd ? 'visibility_off' : 'visibility'"
                class="cursor-pointer"
                @click="isPwd = !isPwd"
              />
            </template>
          </q-input>
          <div class="text-weight-bold">
            <q-checkbox
              v-model="right1"
              color="black"
              label="Keep me signed in"
            />
          </div>

          <div class="text-body2 text-weight-light q-mb-lg">
            Uncheck if using a public device.
            <a
              href="#"
              class="text-black text-weigth-regular"
              style="text-decoration: underline"
              >More</a
            >
          </div>
          <q-btn
            @click="signIn"
            color="primary"
            class="text-capitalize full-width"
            rounded
            type="submit"
            >Sign in</q-btn
          >
        </form>
      </q-card-section>
    </q-card>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent, getCurrentInstance } from 'vue';
import { useRoute } from 'vue-router';
import { useUserStore } from 'src/stores/user';
import { QInput } from 'quasar';
import { useCartStore } from 'src/stores/cart';

type Nullable<T> = T | null;
export default defineComponent({
  setup() {
    const route = useRoute();
    const alert = ref(false);
    const password = ref<Nullable<string>>(null);
    const passwordRef = ref<Nullable<QInput>>(null);
    const userStore = useUserStore();
    const userCart = useCartStore();
    const currentInstance = getCurrentInstance();
    //const cartStore = useCartStore();
    const signIn = async () => {
      try {
        const email = Array.isArray(route.params.email)
          ? route.params.email.join('') // If it's an array, join the elements into a string
          : route.params.email;

        // Sign in the user
        await userStore.loginWithEmailAndPassword(email, password.value ?? '');

        // Validate inputs
        passwordRef.value?.validate();

        if (passwordRef.value?.hasError) {
          alert.value = false;
        } else {
          alert.value = true;
          await userStore.updateUserInfoInFirestore();
          // Wait for a short duration to ensure the user info is updated
          //await new Promise((resolve) => setTimeout(resolve, 500));
          await userCart.updateFirestoreCart();
          //await cartStore.updateFirestoreCart();
          currentInstance?.appContext.config.globalProperties.$router.push('/');
        }
      } catch (error) {
        console.error('Error signing in:', error);
      }
    };

    return {
      alert,
      right1: ref(true),
      right2: ref(true),
      password,
      passwordRef,
      passwordRules: [
        (val: string | null) =>
          (val && val.length > 0) || 'This field cannot be empty',
      ],
      dense: ref(),
      isPwd: ref(true),
      signIn,
    };
  },
});
</script>
<style>
.center-card-content {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 120vh;
}
.center-content {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
