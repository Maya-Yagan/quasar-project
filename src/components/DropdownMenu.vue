<template>
  <q-list style="min-width: 200px">
    <q-item
      v-for="tab in tabs"
      :key="tab.id"
      @mouseover="handleTabHover(tab.id)"
      clickable
    >
      <q-item-section>{{ tab.label }}</q-item-section>
    </q-item>
  </q-list>
</template>

<script lang="ts">
export default {
  props: {
    tabs: {
      type: Array as () => { id: number; label: string }[],
    },
  },
  methods: {
    handleTabHover(tabId: number) {
      this.$emit('tab-hover', tabId);
    },
  },
};
</script>
