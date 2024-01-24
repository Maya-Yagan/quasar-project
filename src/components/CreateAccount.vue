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
        <div class="text-h6 text-bold q-mb-sm">Create your Walmart account</div>
        <div class="text-body2 text-weight-regular text-grey-7 q-mb-md">
          Email Address<br />{{ $route.params.email }}
          <a
            href="#"
            class="text-weight-bold text-black"
            style="text-decoration: underline"
            >Change</a
          >
        </div>
        <div class="text-body2 text-bold">First name</div>
        <form @submit.prevent.stop="onSubmit">
          <q-input
            outlined
            v-model="firstName"
            :rules="firstNameRules"
            ref="firstNameRef"
            :dense="dense"
          />
          <div class="text-body2 text-bold">Last name</div>
          <q-input
            outlined
            v-model="lastName"
            :rules="lastNameRules"
            ref="lastNameRef"
            :dense="dense"
          />
          <div class="text-body2 text-bold">Create a password</div>
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
          <div class="text-weight-thin text-grey-8">
            <q-checkbox
              v-model="right2"
              color="black"
              label="Send me emails about new arrivals & more."
            />
          </div>
          <div class="text-body2 text-weight-thin text-grey-8 q-mb-lg">
            By clicking Create Account, you <br />
            acknowledge you have read and agreed to our <br />
            <a
              href="#"
              class="text-black text-weigth-regular"
              style="text-decoration: underline"
              >Terms of Use and Privacy Policy.</a
            >
          </div>
          <q-btn
            @click="alert = true"
            color="primary"
            class="text-capitalize full-width"
            rounded
            type="submit"
            >Create Account</q-btn
          >
        </form>
      </q-card-section>
    </q-card>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent, getCurrentInstance } from 'vue';
import { useRoute } from 'vue-router';
import { QInput } from 'quasar';
import { useUserStore } from 'src/stores/user';

type Nullable<T> = T | null;
export default defineComponent({
  setup() {
    const currentInstance = getCurrentInstance();
    const route = useRoute();
    const alert = ref(false);
    const firstName = ref<Nullable<string>>(null);
    const lastName = ref<Nullable<string>>(null);
    const password = ref<Nullable<string>>(null);
    const firstNameRef = ref<Nullable<QInput>>(null);
    const lastNameRef = ref<Nullable<QInput>>(null);
    const passwordRef = ref<Nullable<QInput>>(null);
    const userStore = useUserStore();
    //const { addUserToFirestore } = useFirestore();
    const createAccount = async (email: string) => {
      try {
        const userCredential = await userStore.registerWithEmailAndPassword(
          email,
          password.value ?? ''
        );
        // Validate inputs
        firstNameRef.value?.validate();
        lastNameRef.value?.validate();
        passwordRef.value?.validate();

        if (
          firstNameRef.value?.hasError ||
          lastNameRef.value?.hasError ||
          passwordRef.value?.hasError
        ) {
          alert.value = false;
        } else {
          alert.value = true;
          const userUid = userCredential.user?.uid;
          const user = {
            uid: userUid,
            firstName: firstName.value ?? '',
            lastName: lastName.value ?? '',
            email: email,
            cartItems: [], // Initialize an empty cart
          };
          userStore.setUser(user);
          await userStore.addUserToFirestore(user);
          const userCart = await userStore.getUserCartFromFirestore(email);
          userStore.cartItems = userCart ?? [];
          currentInstance?.appContext.config.globalProperties.$router.push('/');
        }
      } catch (error) {
        console.error('Error creating user:', error);
      }
    };
    return {
      alert,
      right1: ref(true),
      right2: ref(true),
      firstName,
      firstNameRef,
      firstNameRules: [
        (val: string | null) =>
          (val && val.length > 0) || 'This field cannot be empty',
      ],
      lastName,
      lastNameRef,
      lastNameRules: [
        (val: string | null) =>
          (val && val.length > 0) || 'This field cannot be empty',
      ],
      password,
      passwordRef,
      passwordRules: [
        (val: string | null) =>
          (val && val.length > 0) || 'This field cannot be empty',
      ],
      dense: ref(),
      isPwd: ref(true),
      async onSubmit() {
        const email = Array.isArray(route.params.email)
          ? route.params.email.join('') // If it's an array, join the elements into a string
          : route.params.email;
        await createAccount(email);
      },
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
