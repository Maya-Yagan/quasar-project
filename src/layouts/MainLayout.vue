<template>
  <q-layout view="hHh Lpr lff">
    <nav-bar :show="true"></nav-bar>
    <q-footer>
      <div class="column content-around bg-blue-1 text-black q-py-lg">
        <q-item class="text-body2">We’d love to hear what you think!</q-item>
        <q-btn
          outline
          dense
          rounded
          color="black"
          class="bg-white text-capitalize q-mx-xl"
          label="Give feedback!"
          @click="(inception = true), open('right')"
        />
        <q-dialog v-model="inception" :position="position">
          <q-card class="column full-height" style="width: 400px">
            <q-card-section class="row q-py-md">
              <div class="text-h6">Feedback</div>
              <q-space></q-space>
              <q-btn icon="close" flat round dense v-close-popup />
            </q-card-section>
            <q-separator />
            <q-card
              class="q-ma-lg"
              style="
                box-shadow: 1px 2px 2px 2px rgba(0, 0, 0, 0.2);
                transition: 0.3s;
                border-radius: 5px;
              "
            >
              <q-card-section>
                <div
                  class="text-h6 q-pa-md q-ml-lg text-weight-bold"
                  style="font-size: larger"
                >
                  Your feedback matters! Help us improve the Walmart website
                </div>
                <q-rating
                  v-model="ratingModel"
                  size="2rem"
                  color="black"
                  icon="star_border"
                  icon-selected="star"
                  no-dimming
                  class="q-pl-xl q-ml-lg q-pb-md"
                />
                <p class="text-grey-6 flex">
                  {{ feedbackText }}
                </p>
                <q-input
                  v-if="showInput"
                  v-model="inputModel"
                  filled
                  class="q-ml-md q-mt-md"
                  placeholder="Enter your feedback..."
                />
                <br />
                <q-btn
                  rounded
                  v-if="showInput"
                  class="flex text-capitalize bg-primary text-white q-ma-sm"
                  >Share with Walmart</q-btn
                >
              </q-card-section>
            </q-card>
            <q-footer class="bg-white text-black">
              <div style="display: grid; place-items: center">
                <p>
                  Questions or concerns? We are here <br />to help. Visit the
                  <a href="#" class="text-blue" style="display: inline-block"
                    >Help Center</a
                  >
                </p>
              </div>
            </q-footer>
          </q-card>
        </q-dialog>
      </div>
      <div class="text-no-wrap row justify-center q-pt-md bg-blue-10">
        <q-item dense>
          <a href="#">All Departments</a>
        </q-item>
        <q-item dense>
          <a href="#">Store Directory</a>
        </q-item>
        <q-item dense>
          <a href="#">Careers</a>
        </q-item>
        <q-item dense>
          <a href="#">Our Company</a>
        </q-item>
        <q-item dense>
          <a href="#">Sell on Wallmart.com</a>
        </q-item>
        <q-item dense>
          <a href="#">Help</a>
        </q-item>
        <q-item dense>
          <a href="#">COVID-19 Vaccine Scheduler</a>
        </q-item>
        <q-item dense>
          <a href="#">Product Recalls</a>
        </q-item>
        <q-item dense>
          <a href="#">Accessibility</a>
        </q-item>
        <q-item dense>
          <a href="#">Tax Exempt Program</a>
        </q-item>
        <q-item dense>
          <a href="#">Get the Walmart App</a>
        </q-item>
        <q-item dense>
          <a href="#">Sign Up for Email</a>
        </q-item>
        <q-item dense>
          <a href="#">Safety Data Sheet</a>
        </q-item>
        <q-item dense>
          <a href="#">Terms of Use</a>
        </q-item>
        <q-item dense>
          <a href="#">Privacy & Security</a>
        </q-item>
        <q-item dense>
          <a href="#">California Supply Chain Act</a>
        </q-item>
        <q-item>
          <div class="text-caption">© 2023 Walmart. All Rights Reserved.</div>
        </q-item>
      </div>
    </q-footer>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import NavBar from 'src/components/NavBar.vue';

export default defineComponent({
  name: 'MainLayout',
  data() {
    return {
      inputModel: '',
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
  },
  setup() {
    const feedbackText = ref('(1 = Very poor, 5 = Excellent!)');
    const showInput = ref(false);
    const dialog = ref(false);
    const position = ref<
      'top' | 'bottom' | 'left' | 'right' | 'standard' | undefined
    >('top');
    return {
      ratingModel: ref(0),
      feedbackText,
      showInput,
      text: ref(''),
      inception: ref(false),
      close: ref(false),
      onItemClick() {
        console.log('Clicked on an Item');
      },
      dialog,
      position,

      open(pos: 'top' | 'bottom' | 'left' | 'right') {
        position.value = pos;
        dialog.value = true;
      },
    };
  },
  watch: {
    ratingModel(newValue) {
      switch (newValue) {
        case 1:
          this.feedbackText = 'Very poor';
          this.showInput = true;
          break;
        case 2:
          this.feedbackText = 'Poor';
          this.showInput = true;
          break;
        case 3:
          this.feedbackText = 'Fair';
          this.showInput = true;
          break;
        case 4:
          this.feedbackText = 'Good';
          this.showInput = true;
          break;
        case 5:
          this.feedbackText = 'Excellent!';
          this.showInput = true;
          break;
        default:
          this.feedbackText = '(1 = Very poor, 5 = Excellent!)';
          this.showInput = false;
      }
    },
  },
});
</script>
<style>
.MyBtn:hover {
  background-color: #0d47a1;
}
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
