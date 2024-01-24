<template>
  <q-btn
    rounded
    flat
    icon="grid_view"
    class="text-capitalize MyBtn"
    :label="props.label"
  >
    <q-menu
      anchor="bottom start"
      self="top left"
      max-height="400px"
      :offset="[0, 23]"
    >
      <q-item class="q-pa-none">
        <q-card-section class="scroll-container q-pa-none">
          <dropdown-menu
            :tabs="props.tabs"
            @tab-hover="handleTabHover"
          ></dropdown-menu>
        </q-card-section>
        <q-card
          class="bg-blue-1 row scroll-container"
          style="width: 400px"
          flat
        >
          <q-card-section v-for="link in currentMiddleLinks" :key="link">
            <q-item>
              <a :href="link">{{ link }}</a>
            </q-item>
          </q-card-section>
        </q-card>
        <dropdown-info
          imgLink="https://i5.walmartimages.com/dfw/4ff9c6c9-5977/k2-_e9468413-fe29-4fb3-8ff5-aab0f25d4023.v1.jpg?odnHeight=142px&odnWidth=142px&odnBg=FFFFFF"
          :title="currentInfo.title"
          :info="currentInfo.info"
        >
        </dropdown-info>
      </q-item> </q-menu
  ></q-btn>
</template>

<script setup lang="ts">
import DropdownMenu from '../components/DropdownMenu.vue';
import DropdownInfo from '../components/DropdownInfo.vue';
import { reactive, ref } from 'vue';

const props = defineProps(['label', 'tabs']);
const currentMiddleLinks = ref([] as string[]);
const currentInfo = ref({ imgLink: '', title: '', info: '' });
const state = reactive({
  currentMiddleLinks,
  currentInfo,
});

const handleTabHover = (tabId: number) => {
  state.currentInfo = generateInfoForTab(tabId);
  state.currentMiddleLinks = generateLinksForTab(tabId);
};

const generateLinksForTab = (tabId: number) => {
  return Array.from(
    { length: 10 },
    (_, index) => `Link ${index + 1} for Tab ${tabId}`
  );
};

const generateInfoForTab = (tabId: number) => {
  return {
    imgLink:
      'https://i5.walmartimages.com/dfw/4ff9c6c9-5977/k2-_e9468413-fe29-4fb3-8ff5-aab0f25d4023.v1.jpg?odnHeight=142px&odnWidth=142px&odnBg=FFFFFF',
    title: `Title for Tab ${tabId}`,
    info: `Info for Tab ${tabId}`,
  };
};
</script>
<style scoped>
.MyBtn:hover {
  background-color: #0d47a1;
  padding-bottom: 10px;
  padding-top: 10px;
}
.scroll-container {
  height: 400px;
  overflow-y: auto;
  overflow-x: hidden;
  border: 1px solid #ccc;
}
a {
  color: black;
}
a:hover {
  color: black;
  text-decoration: underline;
}
</style>
