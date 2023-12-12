<template>
  <q-card class="my-card" flat>
    <q-card-section horizontal>
      <q-card-section class="q-pt-xs">
        <q-btn
          flat
          dense
          icon="favorite_border"
          class="text-black bg-white"
          rounded
          style="float: right; margin-bottom: -25px; z-index: 2"
        />

        <q-img
          class="rounded-borders"
          style="width: 170px; height: 160px"
          :src="imgLink"
        />
        <div class="text-overline text-black text-bold">${{ price }}</div>
        <div class="text-body2 text-grey-7 q-py-sm">{{ title }}</div>
        <q-btn
          outline
          dense
          v-if="isVisible"
          icon="add"
          class="text-capitalize q-pr-md"
          rounded
          color="black"
          label="Add"
          @click="addToCart"
        />
      </q-card-section>
    </q-card-section>
  </q-card>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
interface Product {
  title: string;
  imgLink: string;
  price: number;
}
export default defineComponent({
  props: {
    title: { type: String, required: true },
    imgLink: { type: String, required: true },
    price: { type: Number, required: true },
    currentPage: { type: Number },
    isVisible: { type: Boolean, required: true },
  },
  setup(props, { emit }) {
    const product = ref<Product>({
      title: props.title,
      imgLink: props.imgLink,
      price: props.price,
    });

    const addToCart = () => {
      emit('addToCart', { ...product.value });
    };
    return { product, addToCart };
  },

});
</script>

<style scoped>
.my-card {
  width: 100%;
  max-width: 200px;
  max-height: 450px;
}
</style>
