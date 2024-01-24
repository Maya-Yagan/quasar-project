<template>
  <q-page>
    <user-account></user-account>
  </q-page>
</template>

<script lang="ts">
import UserAccount from 'src/components/UserAccount.vue';
import { defineComponent } from 'vue';
export default defineComponent({
  components: {
    UserAccount,
  },
});
</script>
