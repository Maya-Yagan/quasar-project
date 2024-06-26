<template>
  <div class="center-card-content">
    <q-card flat>
      <q-card-section class="center-content">
        <q-avatar size="60px">
          <img
            src="https://i5.walmartimages.com/dfw/4ff9c6c9-d10e/k2-_ef2c8660-96ed-4f64-891d-329fa488c482.v1.png"
          />
        </q-avatar>
      </q-card-section>
      <q-card-section>
        <div class="text-h6 text-bold q-mb-sm">
          Sign in or create your account
        </div>
        <div class="text-body2 text-weight-regular text-grey-8 q-mb-lg">
          Not sure if you have an account?<br />Enter your email and we’ll check
          for you
        </div>
        <div class="text-body2 text-bold">Email Address</div>
        <form @submit.prevent.stop="onSubmit">
          <q-input
            outlined
            v-model="text"
            ref="textRef"
            :rules="textRules"
            :dense="dense"
            class="q-mb-sm"
          />
          <q-btn
            @click="checkAndProceed"
            color="primary"
            label="Continue"
            class="text-capitalize full-width"
            rounded
          >
          </q-btn>
        </form>
        <div class="text-body2 text-weight-regular text-grey-8 q-mb-lg">
          Securing your personal information is our priority.<br />
          <a href="#" class="text-grey-8" style="text-decoration: underline"
            >See our privacy measures.</a
          >
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent, getCurrentInstance } from 'vue';
import { QInput } from 'quasar';
import { useUserStore } from 'src/stores/user';
type Nullable<T> = T | null;
export default defineComponent({
  props: {
    email: String,
  },
  setup() {
    const alert = ref(false);
    const dense = ref();
    const text = ref<Nullable<string>>(null);
    const textRef = ref<Nullable<QInput>>(null);
    const currentInstance = getCurrentInstance();
    const userStore = useUserStore();
    const checkAndProceed = async () => {
      textRef.value?.validate();
      if (textRef.value?.hasError) {
        alert.value = false;
      } else {
        const email = text.value || '';
        console.log(email);
        const emailExists = await userStore.checkEmailExists(email);
        console.log(emailExists);
        console.log(email);
        if (emailExists) {
          // Email exists, proceed to sign in
          currentInstance?.appContext.config.globalProperties.$router.push(
            `/login/signIn/${email}`
          );
        } else {
          // Email doesn't exist, navigate to create account
          currentInstance?.appContext.config.globalProperties.$router.push(
            `/login/createAccount/${email}`
          );
        }
      }
    };
    return {
      checkAndProceed,
      alert,
      dense,
      text,
      textRef,
      textRules: [
        (val: string | null) =>
          (val && val.length > 0) || 'This field cannot be empty',
      ],
      onSubmit() {
        textRef.value?.validate();
        if (textRef.value?.hasError) {
          alert.value = false;
        } else {
          alert.value = true;
        }
      },
    };
  },
});
</script>
<style scoped>
.center-card-content {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
}
.center-content {
  display: flex;
  justify-content: center;
  align-items: center;
}
.myLink .link-text {
  color: white;
  text-decoration: none;
}
</style>
