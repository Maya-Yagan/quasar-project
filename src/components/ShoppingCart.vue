<template>
  <div class="row" style="margin-top: 100px">
    <q-card
      v-if="cartProducts.length === 0"
      class="q-ma-md"
      style="width: 100%"
      flat
    >
      <q-card-section>
        <div class="text-h5">Cart ({{ cartItemsCount }} items)</div>
      </q-card-section>
      <q-card class="row justify-center">
        <q-card-section class="text-center">
          <q-img
            class="q-ma-sm"
            style="width: 180px; height: 180px"
            src="//i5.walmartimages.com/dfw/63fd9f59-e0d6/65ab57af-59d6-423a-9500-1fa5ab36d1c7/v1/empty-cart.svg?odnHeight=240&odnWidth=200&odnBg=ffffff"
          ></q-img>
          <div class="text-h6 text-weight-bold">Time to start shopping!</div>
          <div class="text-weight-bold q-mb-sm">Your cart is empty</div>
          <div class="text-grey-8 q-mb-md">
            Hi, {{ userStore.user.firstName }}
            {{ userStore.user.lastName?.charAt(0) }} - fill it up with savings
            from your usual departments.
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
    <!--outer card-->
    <q-card v-else flat class="q-ma-md" style="width: 100%">
      <div class="row">
        <!--Title-->
        <q-card-section class="row full-width">
          <div class="text-h5">
            Cart
            <span class="text-grey-7 text-weight-light"
              >({{ cartItemsCount }} items)</span
            >
          </div>
        </q-card-section>
        <!--left container-->
        <q-card-section class="col-8">
          <!--Pickup and delivery options-->
          <q-expansion-item expand-separator>
            <template v-slot:header>
              <q-item-section avatar>
                <q-avatar
                  ><img
                    src="//i5.walmartimages.com/dfwrs/76316474-2775/k2-_3691ba8c-cbca-4439-9112-adb25c1b1803.v1.svg"
                /></q-avatar>
              </q-item-section>
              <q-item-section class="text-weight-medium text-h5">
                Pickup and Delivery Options
              </q-item-section>
            </template>
            <div class="row">
              <q-item
                class="justify-center q-col"
                clickable
                style="max-width: 250px; width: 100%"
              >
                <q-card-section>
                  <div class="row">
                    <q-avatar class="q-ml-sm">
                      <img
                        src="//i5.walmartimages.com/dfw/63fd9f59-1b5e/5452ae02-a31f-4ef1-9a45-62ac0b06c13b/v1/mci-shipping.svg"
                        alt=""
                      />
                    </q-avatar>
                  </div>
                  <div class="row text-weight-medium">Shipping</div>
                  <div
                    class="row text-grey-7 q-ml-sm"
                    style="font-size: smaller"
                  >
                    Options
                  </div>
                </q-card-section>
              </q-item>
              <q-item
                class="justify-center q-col"
                style="max-width: 250px; width: 100%"
              >
                <q-card-section>
                  <div class="row">
                    <q-avatar class="q-ml-sm">
                      <img
                        src="//i5.walmartimages.com/dfw/4ff9c6c9-d610/k2-_d157e508-3c5c-4c97-b344-51406648661e.v1.svg"
                      />
                    </q-avatar>
                  </div>
                  <div class="row text-grey-7 text-weight-medium q-ml-sm">
                    Pickup
                  </div>
                  <div class="row text-grey-7" style="font-size: smaller">
                    Not available
                  </div>
                </q-card-section>
              </q-item>
              <q-item
                class="justify-center q-col"
                style="max-width: 250px; width: 100%"
              >
                <q-card-section>
                  <div class="row">
                    <q-avatar class="q-ml-sm">
                      <img
                        src="//i5.walmartimages.com/dfw/4ff9c6c9-db63/k2-_08c72d67-7046-4b24-919e-7b5c945ba85d.v1.svg"
                      />
                    </q-avatar>
                  </div>
                  <div class="row text-grey-7 text-weight-medium q-ml-sm">
                    Delivery
                  </div>
                  <div class="row text-grey-7" style="font-size: smaller">
                    Not available
                  </div>
                </q-card-section>
              </q-item>
            </div>
          </q-expansion-item>
          <!--Left card-->
          <q-card class="q-col q-ma-sm" style="max-width: 770px; width: 100%">
            <!--shipping date-->
            <q-card-section class="row full-width bg-light-blue-1">
              <q-avatar class="q-mx-sm">
                <img
                  src="//i5.walmartimages.com/dfw/63fd9f59-1b5e/5452ae02-a31f-4ef1-9a45-62ac0b06c13b/v1/mci-shipping.svg"
                />
              </q-avatar>
              <div class="text-h6 tesxt-weight-medium">
                Shipping, arrives
                {{
                  new Date().toLocaleDateString('en-US', {
                    weekday: 'long',
                    month: 'long',
                    day: 'numeric',
                  })
                }}
              </div>
            </q-card-section>
            <!--products info-->
            <q-expansion-item expand-separator default-opened>
              <template v-slot:header="{ expanded }">
                <q-item-section class="text-weight-bold row">
                  {{ cartItemsCount }} Items
                </q-item-section>
                <div v-if="!expanded" class="row">
                  <div v-for="product in cartProducts" :key="product.imgLink">
                    <q-img
                      :src="product.imgLink"
                      style="width: 50px; height: 50px"
                    ></q-img>
                  </div>
                </div>
              </template>
              <q-card-section
                v-for="product in cartProducts"
                :key="product.title"
                class="row"
                ><q-card-section class="row q-pa-sm" style="width: 100%">
                  <div class="col-11 text-weight-medium">
                    Arrives By
                    {{
                      new Date().toLocaleDateString('en-US', {
                        weekday: 'long',
                        month: 'long',
                        day: 'numeric',
                      })
                    }}
                  </div>
                  <div class="col-1 text-grey-7">
                    {{ product.quantity }} Items
                  </div>
                </q-card-section>
                <hr
                  class="q-mx-sm"
                  style="border: 0.1px solid #f4f4f5; width: 100%"
                />
                <div
                  style="width: 100%"
                  class="text-grey-7 row q-mx-sm caption-text text-weight-light"
                >
                  Sold and shipped by&nbsp;
                  <span class="text-black text-weight-bold">
                    {{ product.companyName }}</span
                  >
                </div>
                <q-card-section class="row full-width">
                  <div class="col-2">
                    <q-img
                      style="width: 100px; height: 100px"
                      :src="product.imgLink"
                    />
                  </div>
                  <div class="col-5 text-grey-7">
                    {{ product.title }} <br />
                    {{ product.productInfo }} <br />
                    <q-img
                      style="width: 16px; height: 16px"
                      src="//i5.walmartimages.com/dfw/63fd9f59-e685/7e6c8c3a-3ba7-437a-a066-de3ad3a6a15a/v1/roundReturn.svg"
                    />
                    Free 90-Day returns
                  </div>
                  <div class="col-5">
                    <div class="q-mr-sm float-right">
                      ${{ product.price.toFixed(2) }}
                    </div>

                    <div class="q-mt-xl float-right">
                      <q-btn
                        flat
                        dense
                        @click="removeCompletely(product)"
                        class="text-capitalize q-pa-none text-weight-light q-mx-lg"
                      >
                        Remove</q-btn
                      >

                      <q-btn-group class="float-right" dense rounded>
                        <q-btn
                          rounded
                          icon="remove"
                          @click="removeFromCart(product)"
                        />
                        <span class="q-pa-xs q-pt-sm">{{
                          product.quantity
                        }}</span>
                        <q-btn
                          rounded
                          icon="add"
                          @click="addProduct(product)"
                        />
                      </q-btn-group>
                    </div>
                  </div>
                </q-card-section>
                <hr
                  class="q-mx-sm q-mb-md"
                  style="border: 0.1px solid #f4f4f5; width: 100%"
                />
              </q-card-section>
            </q-expansion-item>
          </q-card>
        </q-card-section>
        <!--Right container-->
        <q-card-section class="col-4">
          <q-card-section
            class="q-col q-pa-none"
            style="max-width: 380px; width: 100%"
          >
            <q-card class="q-pa-md">
              <q-btn
                dense
                rounded
                color="primary"
                class="text-capitalize full-width q-mx-sm q-mb-md"
              >
                Continue to Checkout
              </q-btn>
              <q-separator></q-separator>
              <q-card-section class="q-px-none">
                <div class="row q-bm-sm">
                  <div class="col-10 text-weight-medium">
                    Subtotal ({{ cartItemsCount }} items)
                  </div>
                  <div class="col-2 text-weight-light">${{ totalPrice }}</div>
                </div>
                <div v-if="hasShippingFee" class="row">
                  <div class="col-10 text-weight-light">
                    Shipping (below $35 order minimum)
                  </div>
                  <div class="col-2 text-weight-light">$6.99</div>
                </div>
                <div class="row q-my-md">
                  <div class="col-7 text-weight-bold">Taxes</div>
                  <div class="col-5">Calculated at checkout</div>
                </div>
                <q-separator></q-separator>
                <div class="row q-my-md">
                  <div class="col-10 text-weight-bold">Estimated total</div>
                  <div v-if="hasShippingFee" class="col-1 text-weight-light">
                    ${{ (totalPrice + 6.99).toFixed(2) }}
                  </div>
                  <div v-else class="col-1 text-weight-light">
                    ${{ totalPrice }}
                  </div>
                </div>
              </q-card-section>
            </q-card>
          </q-card-section>
          <!--walmart plus offer-->
          <q-card class="q-my-md row q-pa-md text-primary text-weight-bold">
            <div class="col-3 q-mt-sm">
              <q-img
                style="width: 60px; height: 20px"
                src="//i5.walmartimages.com/dfw/63fd9f59-3e1b/a3d2466d-fa02-4f2d-a401-aca52a4aac17/v1/walmartPlus-logo-blue.svg"
              ></q-img>
            </div>
            <div class="col-9 q-mt-sm">
              Join Walmart+ annual membership and get $50 Walmart Cash
            </div>
            <div class="text-black">
              <q-checkbox
                v-model="right"
                label="Claim offer now"
                color="black"
              />
            </div>
          </q-card>
          <!--credit card offer-->
          <q-card class="q-my-md row q-pa-sm">
            <div class="col-4">
              <q-img
                class="q-ma-md"
                style="width: 65px; height: 40px"
                src="//i5.walmartimages.com/dfw/63fd9f59-7b6d/d53b5a7a-3eca-4b49-a950-838cb87068b9/v1/wallet-capitalone-cawrc@1.png"
              ></q-img>
            </div>
            <div class="col-8">
              <span class="text-weight-bold">Earn 5% cash back</span> on
              Walmart.com See if you’re pre-approved with no credit risk.
              <a href="#">Learn how</a>
            </div>
          </q-card>
        </q-card-section>
        <!--additional products-->
        <q-card class="row q-mt-xl q-ml-xl">
          <q-card-section class="q-px-lg">
            <div class="text-h5 text-left q-pl-sm">Can't-miss products</div>
            <products-browser
              :itemsPerPage="5"
              class="text-left"
            ></products-browser>
          </q-card-section>
        </q-card>
      </div>
    </q-card>
  </div>
</template>

<script lang="ts">
import ProductsBrowser from './ProductsBrowser.vue';
import { computed, defineComponent, ref } from 'vue';
import { useCartStore } from '../stores/cart';
import { useUserStore } from '../stores/user';
interface Product {
  title: string;
  imgLink: string;
  price: number;
  page?: number;
  companyName: string;
  productInfo: string;
  quantity: number;
}
export default defineComponent({
  setup() {
    const userStore = useUserStore();
    const right = ref(true);

    const cartItemsCount = computed(() => useCartStore().cartItemsCount);
    const totalPrice = computed(() => useCartStore().totalPrice);
    const cartProducts = computed(() => useCartStore().cartItems);
    const hasShippingFee = computed(() => totalPrice.value < 35);

    const removeFromCart = (product: Product) => {
      useCartStore().removeFromCart(product);
    };

    const removeCompletely = (product: Product) => {
      useCartStore().removeCompletelyFromCart(product);
    };

    const addProduct = (product: Product) => {
      useCartStore().addToCart({ product, page: product.page || 0 });
    };

    return {
      userStore,
      ProductsBrowser,
      right,
      cartItemsCount,
      totalPrice,
      cartProducts,
      hasShippingFee,
      removeFromCart,
      removeCompletely,
      addProduct,
    };
  },
  components: { ProductsBrowser },
});
</script>
<style scoped>
a {
  color: black;
  text-decoration: underline;
}
a:hover {
  color: black;
  text-decoration: underline;
}
</style>
