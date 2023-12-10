<template>
  <div class="row" style="margin-top: 100px">
    <div class="row no-wrap q-mt-md">
      <div class="col-6 q-mx-md" style="min-width: 300px">
        <q-card style="min-height: 200px">
          <q-card-section class="q-pa-md q-flex-center">
            <h6>
              Products in Cart ({{ cartItemsCount }}) <br />Total: ${{
                totalPrice
              }}
            </h6>
            <q-scroll-area
              style="height: 200px; max-width: 300px"
              class="q-pa-md q-flex-center"
            >
              <q-list>
                <template v-if="cartProducts.length === 0">
                  <q-item class="q-text-center">
                    <q-item-section>
                      <q-item-label class="text-h6 text-grey-6"
                        >Cart is empty</q-item-label
                      >
                    </q-item-section>
                  </q-item>
                </template>
                <q-item v-for="product in cartProducts" :key="product.title">
                  {{ product.title }}: ${{ product.price.toFixed(2) }}
                  <q-item-section class="q-ml-auto" side>
                    <q-btn
                      flat
                      rounded
                      dense
                      icon="remove_circle"
                      @click="removeFromCart(product)"
                    />
                  </q-item-section>
                </q-item>
              </q-list>
            </q-scroll-area>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-6">
        <q-card
          style="min-height: 200px; min-width: 500px"
          class="q-flex-center"
        >
          <q-scroll-area style="height: 390px">
            <template v-if="cartProducts.length === 0">
              <q-item>
                <q-item-section>
                  <q-item-label class="text-h6 text-grey-6 text-center"
                    >Cart is empty</q-item-label
                  >
                </q-item-section>
              </q-item>
            </template>
            <q-card-section
              class="row"
              v-for="product in cartProducts"
              :key="product.title"
            >
              <product-card
                :title="product.title"
                :price="Number(product.price.toFixed(2))"
                :imgLink="product.imgLink"
                :isVisible="false"
              />
            </q-card-section>
          </q-scroll-area>
        </q-card>
      </div>
    </div>
    <div class="row q-mb-lg">
      <h5 class="q-mx-md">You may also like:</h5>
      <products-browser></products-browser>
    </div>
  </div>
</template>

<script lang="ts">
import ProductsBrowser from './ProductsBrowser.vue';
import ProductCard from './ProductCard.vue';
import { defineComponent } from 'vue';
import { useCartStore } from '../stores/cart';
interface Product {
  title: string;
  imgLink: string;
  price: number;
  page?: number;
}
export default defineComponent({
  components: { ProductsBrowser, ProductCard },
  computed: {
    cartItemsCount() {
      return useCartStore().cartItemsCount;
    },
    totalPrice() {
      return useCartStore().totalPrice;
    },
    cartProducts() {
      return useCartStore().cartItems;
    },
  },
  methods: {
    removeFromCart(product: Product) {
      useCartStore().removeFromCart(product);
    },
  },
});
</script>
