<template>
  <q-layout view="hHh lpR fFf">
    <header>
      <nav-bar></nav-bar>
    </header>
    <footer>
      <login-layout>
        <template></template>
      </login-layout>
    </footer>
  </q-layout>
</template>

<script lang="ts">
import LoginLayout from './LoginLayout.vue';
import NavBar from 'src/components/NavBar.vue';
export default {
  name: 'CartLayout',
  components: {
    NavBar,
    LoginLayout,
  },
};
</script>
