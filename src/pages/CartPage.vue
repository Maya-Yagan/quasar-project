<template>
  <div v-if="isSignedIn">
    <shopping-cart></shopping-cart>
  </div>
  <div class="row" style="margin-top: 100px" v-else>
    <q-card class="q-ma-md" style="width: 100%" flat>
      <q-card-section>
        <div class="text-h5">Cart (0 items)</div>
      </q-card-section>
      <q-card class="row justify-center">
        <q-card-section class="text-center">
          <q-img
            class="q-ma-sm"
            style="width: 180px; height: 180px"
            src="//i5.walmartimages.com/dfw/63fd9f59-e0d6/65ab57af-59d6-423a-9500-1fa5ab36d1c7/v1/empty-cart.svg?odnHeight=240&odnWidth=200&odnBg=ffffff"
          ></q-img>
          <div class="text-h5 text-weight-bold q-mb-md">
            Sign in to see your saved items
          </div>
          <q-btn
            color="primary"
            rounded
            to="/login"
            label="Sign in"
            class="text-capitalize q-my-md"
            style="min-width: 190px; height: 50px"
          ></q-btn>
          <q-separator inset></q-separator>
          <div class="text-weight-bold text-h6 q-my-md">
            Time to start shopping!
          </div>
          <div class="text-grey-8 q-mb-md">
            Fill it up with savings from these popular departments.
          </div>
          <q-btn
            outline
            rounded
            dense
            color="black"
            class="text-capitalize q-mx-md"
            label="Shop Grocery"
          />
          <q-btn
            outline
            rounded
            dense
            color="black"
            class="text-capitalize"
            label="Shop Electronics"
          />
          <q-btn
            outline
            rounded
            dense
            color="black"
            class="text-capitalize q-mx-md"
            label="Shop Toys"
          />
          <div>
            <q-btn
              outline
              rounded
              dense
              color="black"
              class="text-capitalize q-mt-md"
              label="Shop Home"
            />
          </div>
          <q-card class="row q-mt-xl">
            <q-card-section>
              <div class="text-h5 text-left">Can't-miss products</div>
              <products-browser
                :itemsPerPage="5"
                class="text-left"
              ></products-browser>
            </q-card-section>
          </q-card>
        </q-card-section>
      </q-card>
    </q-card>
  </div>
</template>

<script lang="ts">
import ProductsBrowser from 'src/components/ProductsBrowser.vue';
import { defineComponent, toRefs } from 'vue';
import { useUserStore } from '../stores/user';
import ShoppingCart from 'src/components/ShoppingCart.vue';
export default defineComponent({
  setup() {
    const userStore = useUserStore();
    const { isSignedIn } = toRefs(userStore);
    return {
      isSignedIn,
      userStore,
    };
  },
  components: {
    ShoppingCart,
    ProductsBrowser,
  },
});
</script>
