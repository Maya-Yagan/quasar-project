<template>
  <div class="card-container-wrapper">
    <div class="card-container" ref="cardContainer">
      <product-card
        v-for="(product, index) in visibleProducts"
        :key="'product-' + index"
        :imgLink="product.imgLink"
        :price="product.price"
        :title="product.title"
        :currentPage="currentPage"
        @addToCart="handleAddToCart(product)"
        class="product-card"
        :isVisible="true"
      ></product-card>
    </div>
    <div>
      <q-btn
        @click="goToPreviousPage"
        round
        dense
        icon="arrow_back_ios_new"
        class="bg-white nav-button prev-button"
        v-show="showPreviousButton"
      ></q-btn>
      <q-btn
        @click="goToNextPage"
        round
        dense
        icon="arrow_forward_ios"
        class="bg-white nav-button next-button"
        v-show="showNextButton"
      ></q-btn>
    </div>
  </div>
</template>

<script lang="ts">
import ProductCard from '../components/ProductCard.vue';
import { useCartStore } from 'src/stores/cart';
interface Product {
  title: string;
  imgLink: string;
  price: number;
}
export default {
  components: {
    ProductCard,
  },
  data() {
    return {
      itemsPerPage: 6,
      currentPage: 1,
      products: [
        {
          imgLink:
            'https://i5.walmartimages.com/seo/Chaps-Boys-Crewneck-Sweater-with-Long-Sleeves-Sizes-4-18_8ee98f21-87fd-4736-bb34-f001f0e12304.3160b22e6022b3f519be538a824346d9.jpeg?odnHeight=350&odnWidth=350&odnBg=FFFFFF',
          price: 29.5,
          title: 'Title 1',
        },
        {
          imgLink:
            'https://i5.walmartimages.com/asr/c249b58e-e499-4e86-8846-b45bd4d42656.96b4164afd60e863ecfe440373ff72d0.jpeg?odnHeight=350&odnWidth=350&odnBg=FFFFFF',
          price: 19.99,
          title: 'Title 2',
        },
        {
          imgLink:
            'https://i5.walmartimages.com/asr/07ac91bd-de83-423d-b478-b6e8d5f83a1c.677093a85ec4621848e2809493c6edde.jpeg?odnHeight=350&odnWidth=350&odnBg=FFFFFF',
          price: 9.99,
          title: 'Title 3',
        },
        {
          imgLink:
            'https://i5.walmartimages.com/asr/c249b58e-e499-4e86-8846-b45bd4d42656.96b4164afd60e863ecfe440373ff72d0.jpeg?odnHeight=350&odnWidth=350&odnBg=FFFFFF',
          price: 19.99,
          title: 'Title 4',
        },
        {
          imgLink:
            'https://i5.walmartimages.com/asr/07ac91bd-de83-423d-b478-b6e8d5f83a1c.677093a85ec4621848e2809493c6edde.jpeg?odnHeight=350&odnWidth=350&odnBg=FFFFFF',
          price: 9.99,
          title: 'Title 5',
        },
        {
          imgLink:
            'https://i5.walmartimages.com/asr/c249b58e-e499-4e86-8846-b45bd4d42656.96b4164afd60e863ecfe440373ff72d0.jpeg?odnHeight=350&odnWidth=350&odnBg=FFFFFF',
          price: 19.99,
          title: 'Title 6',
        },
        {
          imgLink:
            'https://i5.walmartimages.com/asr/07ac91bd-de83-423d-b478-b6e8d5f83a1c.677093a85ec4621848e2809493c6edde.jpeg?odnHeight=350&odnWidth=350&odnBg=FFFFFF',
          price: 9.99,
          title: 'Title 7',
        },
        {
          imgLink:
            'https://i5.walmartimages.com/seo/Chaps-Boys-Crewneck-Sweater-with-Long-Sleeves-Sizes-4-18_8ee98f21-87fd-4736-bb34-f001f0e12304.3160b22e6022b3f519be538a824346d9.jpeg?odnHeight=350&odnWidth=350&odnBg=FFFFFF',
          price: 29.5,
          title: 'Title 8',
        },
        {
          imgLink:
            'https://i5.walmartimages.com/seo/Chaps-Boys-Crewneck-Sweater-with-Long-Sleeves-Sizes-4-18_8ee98f21-87fd-4736-bb34-f001f0e12304.3160b22e6022b3f519be538a824346d9.jpeg?odnHeight=350&odnWidth=350&odnBg=FFFFFF',
          price: 29.5,
          title: 'Title 9',
        },
        {
          imgLink:
            'https://i5.walmartimages.com/asr/07ac91bd-de83-423d-b478-b6e8d5f83a1c.677093a85ec4621848e2809493c6edde.jpeg?odnHeight=350&odnWidth=350&odnBg=FFFFFF',
          price: 9.99,
          title: 'Title 10',
        },
        {
          imgLink:
            'https://i5.walmartimages.com/asr/c249b58e-e499-4e86-8846-b45bd4d42656.96b4164afd60e863ecfe440373ff72d0.jpeg?odnHeight=350&odnWidth=350&odnBg=FFFFFF',
          price: 19.99,
          title: 'Title 11',
        },
        {
          imgLink:
            'https://i5.walmartimages.com/asr/07ac91bd-de83-423d-b478-b6e8d5f83a1c.677093a85ec4621848e2809493c6edde.jpeg?odnHeight=350&odnWidth=350&odnBg=FFFFFF',
          price: 9.99,
          title: 'Title 12',
        },
        {
          imgLink:
            'https://i5.walmartimages.com/seo/Chaps-Boys-Crewneck-Sweater-with-Long-Sleeves-Sizes-4-18_8ee98f21-87fd-4736-bb34-f001f0e12304.3160b22e6022b3f519be538a824346d9.jpeg?odnHeight=350&odnWidth=350&odnBg=FFFFFF',
          price: 29.5,
          title: 'Title 13',
        },
        {
          imgLink:
            'https://i5.walmartimages.com/asr/c249b58e-e499-4e86-8846-b45bd4d42656.96b4164afd60e863ecfe440373ff72d0.jpeg?odnHeight=350&odnWidth=350&odnBg=FFFFFF',
          price: 19.99,
          title: 'Title 14',
        },
        {
          imgLink:
            'https://i5.walmartimages.com/asr/07ac91bd-de83-423d-b478-b6e8d5f83a1c.677093a85ec4621848e2809493c6edde.jpeg?odnHeight=350&odnWidth=350&odnBg=FFFFFF',
          price: 9.99,
          title: 'Title 15',
        },
        {
          imgLink:
            'https://i5.walmartimages.com/asr/c249b58e-e499-4e86-8846-b45bd4d42656.96b4164afd60e863ecfe440373ff72d0.jpeg?odnHeight=350&odnWidth=350&odnBg=FFFFFF',
          price: 19.99,
          title: 'Title 16',
        },
        {
          imgLink:
            'https://i5.walmartimages.com/asr/07ac91bd-de83-423d-b478-b6e8d5f83a1c.677093a85ec4621848e2809493c6edde.jpeg?odnHeight=350&odnWidth=350&odnBg=FFFFFF',
          price: 9.99,
          title: 'Title 17',
        },
        {
          imgLink:
            'https://i5.walmartimages.com/asr/c249b58e-e499-4e86-8846-b45bd4d42656.96b4164afd60e863ecfe440373ff72d0.jpeg?odnHeight=350&odnWidth=350&odnBg=FFFFFF',
          price: 19.99,
          title: 'Title 18',
        },
        {
          imgLink:
            'https://i5.walmartimages.com/asr/07ac91bd-de83-423d-b478-b6e8d5f83a1c.677093a85ec4621848e2809493c6edde.jpeg?odnHeight=350&odnWidth=350&odnBg=FFFFFF',
          price: 9.99,
          title: 'Title 19',
        },
        {
          imgLink:
            'https://i5.walmartimages.com/seo/Chaps-Boys-Crewneck-Sweater-with-Long-Sleeves-Sizes-4-18_8ee98f21-87fd-4736-bb34-f001f0e12304.3160b22e6022b3f519be538a824346d9.jpeg?odnHeight=350&odnWidth=350&odnBg=FFFFFF',
          price: 29.5,
          title: 'Title 20',
        },
        {
          imgLink:
            'https://i5.walmartimages.com/seo/Chaps-Boys-Crewneck-Sweater-with-Long-Sleeves-Sizes-4-18_8ee98f21-87fd-4736-bb34-f001f0e12304.3160b22e6022b3f519be538a824346d9.jpeg?odnHeight=350&odnWidth=350&odnBg=FFFFFF',
          price: 29.5,
          title: 'Title 21',
        },
        {
          imgLink:
            'https://i5.walmartimages.com/asr/07ac91bd-de83-423d-b478-b6e8d5f83a1c.677093a85ec4621848e2809493c6edde.jpeg?odnHeight=350&odnWidth=350&odnBg=FFFFFF',
          price: 9.99,
          title: 'Title 22',
        },
        {
          imgLink:
            'https://i5.walmartimages.com/asr/c249b58e-e499-4e86-8846-b45bd4d42656.96b4164afd60e863ecfe440373ff72d0.jpeg?odnHeight=350&odnWidth=350&odnBg=FFFFFF',
          price: 19.99,
          title: 'Title 23',
        },
        {
          imgLink:
            'https://i5.walmartimages.com/asr/07ac91bd-de83-423d-b478-b6e8d5f83a1c.677093a85ec4621848e2809493c6edde.jpeg?odnHeight=350&odnWidth=350&odnBg=FFFFFF',
          price: 9.99,
          title: 'Title 24',
        },
      ],
    };
  },
  computed: {
    visibleProducts() {
      const startIndex = (this.currentPage - 1) * this.itemsPerPage;
      const endIndex = Math.min(
        startIndex + this.itemsPerPage,
        this.products.length
      );
      return this.products.slice(startIndex, endIndex);
    },
    showPreviousButton() {
      return this.currentPage > 1;
    },
    showNextButton() {
      const totalPages = Math.ceil(this.products.length / this.itemsPerPage);
      return this.currentPage < totalPages;
    },
  },
  methods: {
    handleAddToCart(product: Product) {
      useCartStore().addToCart({
        product: { ...product },
        page: this.currentPage,
      });
    },
    goToPreviousPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
    goToNextPage() {
      if (this.showNextButton) {
        this.currentPage++;
      }
    },
  },
};
</script>

<style scoped>
.card-container-wrapper {
  position: relative;
}

.card-container {
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  overflow-y: hidden;
}

.product-card {
  margin-right: 10px;
}

.nav-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}

.prev-button {
  left: 10px;
}

.next-button {
  right: 10px;
}
</style>
