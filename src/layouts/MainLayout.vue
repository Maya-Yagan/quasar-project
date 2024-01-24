<template>
  <q-layout view="hHh lpR lff">
    <nav-bar :show="true"></nav-bar>
    <q-footer>
      <main-footer></main-footer>
    </q-footer>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import NavBar from 'src/components/NavBar.vue';
import MainFooter from 'src/components/MainFooter.vue';

export default defineComponent({
  name: 'MainLayout',
  data() {
    return {
      tabsServices: [
        { id: 1, label: 'All Services' },
        { id: 2, label: 'Get Inspired' },
        { id: 3, label: 'Auto Care Center Services' },
        { id: 4, label: 'Pharmacy' },
        { id: 5, label: 'Health & Wellness' },
        { id: 6, label: 'Registry, Lists, & Gifts' },
        { id: 7, label: 'Custom Cakes' },
        { id: 8, label: 'Photo Services' },
        { id: 9, label: 'Money Services' },
        { id: 10, label: 'Protection, Home, & Tech' },
        { id: 11, label: 'Community & Giving' },
        { id: 12, label: 'Ordering Online' },
      ],
      tabsDepartments: [
        { id: 1, label: 'All Departments' },
        { id: 2, label: 'Deals' },
        { id: 3, label: 'Grocery' },
        { id: 4, label: 'Christmas Shop' },
        { id: 5, label: 'Gift Finder' },
        { id: 6, label: 'Clothing, Shoes & Accessories' },
        { id: 7, label: 'Electronics' },
        { id: 8, label: 'Home, Furniture & Appliances' },
        { id: 9, label: 'Toys & Video Games' },
        { id: 10, label: 'Baby' },
        { id: 11, label: 'Auto & Tires' },
        { id: 12, label: 'Pharmacy, Health & Wellness' },
        { id: 13, label: 'Personal Care' },
        { id: 14, label: 'Beauty' },
        { id: 15, label: 'Pets' },
        { id: 16, label: 'Home Improvement' },
        { id: 17, label: 'Patio & Garden' },
        { id: 18, label: 'Household Essentials' },
        { id: 19, label: 'Sports & Outdoors' },
        { id: 20, label: 'Seasonal Decor & Party Supplies' },
        { id: 21, label: 'School, Office & Art Supplies' },
        { id: 22, label: 'Movies, Music & Books' },
        { id: 23, label: 'Gift Cards' },
        { id: 24, label: 'Shop With Purpose' },
      ],
    };
  },
  components: {
    NavBar,
    MainFooter,
  },
});
</script>
<style>
a {
  font-weight: 300;
  color: white;
  text-decoration: none;
}
a:hover {
  color: white;
  text-decoration: none;
}
.aa {
  color: black;
  text-decoration: none;
}
.aa:hover {
  color: black;
  text-decoration: underline;
}
.anchorBar {
  color: white;
  margin-left: 4px;
  margin-right: 4px;
  text-decoration: none;
}
.anchorBar:hover {
  color: white;
  text-decoration: underline;
}
.flex {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
