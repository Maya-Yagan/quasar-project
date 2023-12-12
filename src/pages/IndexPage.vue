<template>
  <q-page>
    <div class="row">
      <div class="q-mt-md q-ml-md q-mr-sm">
        <shopping-image
          imgLink="https://i5.walmartimages.com/dfw/4ff9c6c9-923c/k2-_6538e5fc-7d2c-46e9-9c84-94e8f853a86f.v1.jpg?odnHeight=256&odnWidth=385&odnBg=&odnDynImageQuality=70"
          cardHeight="190"
          cardWidth="280"
          title="Tech gifts up to 30% off"
          textSize="20"
        >
        </shopping-image>
      </div>
      <div class="q-mt-md q-mx-md">
        <shopping-image
          imgLink="https://i5.walmartimages.com/dfw/4ff9c6c9-8d13/k2-_f484ac6f-a825-4c7e-b3c1-094c9986470c.v1.jpg?odnHeight=447&odnWidth=794&odnBg=&odnDynImageQuality=70"
          cardHeight="350"
          cardWidth="600"
        >
        </shopping-image>
      </div>
      <div class="q-mt-md q-mr-md q-ml-sm">
        <shopping-image
          imgLink="https://i5.walmartimages.com/dfw/4ff9c6c9-b6c0/k2-_d371f6f6-bcf2-481f-9be0-ff612502bfae.v1.jpg?odnHeight=216&odnWidth=385&odnBg=&odnDynImageQuality=70"
          cardHeight="160"
          cardWidth="280"
          title="Decor up to 50% off"
          textSize="30"
        >
        </shopping-image>
      </div>

      <div
        class="q-ml-md q-mb-md"
        style="margin-top: -140px !important; display: flex"
      >
        <shopping-image
          imgLink="https://i5.walmartimages.com/dfw/4ff9c6c9-df49/k2-_e8de7561-26ad-4ee0-8f1e-03cca8ade0cd.v1.jpg?odnHeight=216&odnWidth=385&odnBg=&odnDynImageQuality=70"
          cardHeight="160"
          cardWidth="280"
          :isVisible="true"
          title="Toy deals up to 40% off"
        >
        </shopping-image>
      </div>
      <div
        class="q-mb-md"
        style="margin-left: auto; margin-top: -160px; margin-right: 39px"
      >
        <shopping-image
          imgLink="https://i5.walmartimages.com/dfw/4ff9c6c9-338e/k2-_b25004f8-771f-4584-9db5-517471b35839.v1.jpg?odnHeight=256&odnWidth=385&odnBg=&odnDynImageQuality=70"
          cardHeight="190"
          cardWidth="280"
          :isVisible="true"
          title="Beauty & grooming up to 30% off"
          textSize="20"
        >
        </shopping-image>
      </div>
    </div>
    <div class="row q-pb-lg">
      <h5 class="q-mx-md">Products you may like:</h5>
      <products-browser></products-browser>
    </div>
    <div class="row q-pb-lg">
      <h5 class="q-mx-md">More Products:</h5>
      <products-browser></products-browser>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ProductsBrowser from '../components/ProductsBrowser.vue';
import ShoppingImage from 'src/components/ShoppingImage.vue';
export default defineComponent({
  name: 'IndexPage',
  components: { ShoppingImage, ProductsBrowser },
});
</script>
<style></style>
