<template>
  <q-card class="my-card" flat>
    <q-card-section horizontal>
      <q-card-section class="q-pa-sm">
        <q-img
          class="rounded-borders"
          style="max-width: 200px; max-height: 300px"
          :src="props.imgLink"
        />
        <div class="text-black text-h6 q-pa-sm">
          {{ props.title }}
        </div>
        <div class="text-black text-body2 q-py-sm">
          {{ props.info }}
        </div>
        <q-btn
          outline
          class="text-capitalize q-mx-xs"
          rounded
          color="black"
          label="Shop now"
        />
      </q-card-section>
    </q-card-section>
  </q-card>
</template>

<script setup lang="ts">
const props = defineProps(['imgLink', 'info', 'title']);
</script>
<style scoped>
.my-card {
  width: 100%;
  max-width: 200px;
  max-height: 450px;
}
</style>
