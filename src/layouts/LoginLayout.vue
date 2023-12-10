<template>
  <q-layout view="hHh Lpr lff">
    <q-page-container>
      <router-view />
    </q-page-container>
    <slot></slot>
    <q-footer bordered class="bg-white">
      <div class="text-no-wrap row justify-center q-pt-md">
        <q-item class="text-weight-thin text-caption text-black">
          © 2023 Walmart. All Rights Reserved.
        </q-item>
        <q-item class="text-weight-light">
          <a href="#">Give feedback</a>
        </q-item>
        <q-item class="text-weight-light">
          <a href="#">CA Privacy</a>
        </q-item>
        <q-item class="text-weight-light">
          <a href="#">Your Privacy Choices</a>
        </q-item>
        <q-item class="text-weight-light">
          <a href="#">Notice at Collection</a>
        </q-item>
        <q-item class="text-weight-light">
          <a href="#">Request My Personal Information</a>
        </q-item>
        <q-item class="text-weight-light">
          <a href="#">California Supply Chains Act</a>
        </q-item>
      </div>
    </q-footer>
  </q-layout>
</template>
<style scoped>
a {
  color: black;
}
a:hover {
  color: black;
}
</style>
