<template>
  <q-card
    class="my-card"
    :style="{ width: cardWidth + 'px', height: cardHeight + 'px' }"
  >
    <q-btn
      outline
      class="text-capitalize q-mx-md q-mb-sm bg-white"
      rounded
      color="black"
      label="Shop now"
      v-if="isVisible"
      :style="{ position: 'absolute', bottom: '10px', left: '10px', zIndex: 1 }"
    />
    <q-img :src="imgLink" class="image-container">
      <p
        class="text-white q-ma-md text-wrap text-weight-bold q-mr-xl"
        :style="{ fontSize: textSize + 'px' }"
      >
        {{ title }}
      </p>
    </q-img>
  </q-card>
</template>

<script lang="ts">
export default {
  props: {
    imgLink: { type: String, required: true },
    cardWidth: { type: [String, Number], default: '100%' },
    cardHeight: { type: [String, Number], default: 'auto' },
    title: { type: String },
    textSize: { type: [String, Number], default: '30' },
    isVisible: {
      type: Boolean,
      required: true,
    },
  },
};
</script>

<style scoped>
.image-container {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
