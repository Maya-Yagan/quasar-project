<template>
  <q-list style="min-width: 200px">
    <q-item
      v-for="tab in tabs"
      :to="tab.route"
      :key="tab.id"
      @mouseover="handleTabHover(tab.id)"
      clickable
      class="text-black"
    >
      <q-item-section>{{ tab.label }}</q-item-section>
    </q-item>
  </q-list>
</template>

<script lang="ts">
export default {
  props: {
    tabs: {
      type: Array as () => { id: number; label: string; route: string }[],
    },
  },
  setup(props, { emit }) {
    const handleTabHover = (tabId: number) => {
      emit('tab-hover', tabId);
    };

    return {
      handleTabHover,
    };
  },
};
</script>
