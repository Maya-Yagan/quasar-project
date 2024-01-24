<template>
  <create-account></create-account>
</template>

<script lang="ts">
import CreateAccount from 'src/components/CreateAccount.vue';
import { defineComponent } from 'vue';
export default defineComponent({
  components: {
    CreateAccount,
  },
});
</script>
