<template>
  <q-layout view="hHh Lpr lff">
    <nav-bar></nav-bar>
    <q-footer>
      <main-footer></main-footer>
    </q-footer>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import NavBar from 'src/components/NavBar.vue';
import MainFooter from 'src/components/MainFooter.vue';
export default {
  name: 'CartLayout',
  components: {
    NavBar,
    MainFooter,
  },
};
</script>
