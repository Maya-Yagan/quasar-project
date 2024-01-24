<template>
  <div class="card-container-wrapper">
    <div class="card-container" ref="cardContainer">
      <product-card
        v-for="(product, index) in visibleProducts"
        :key="'product-' + index"
        :imgLink="product.imgLink"
        :price="product.price"
        :title="product.title"
        :companyName="product.companyName"
        :productInfo="product.productInfo"
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
import { useUserStore } from 'src/stores/user';
import ProductCard from '../components/ProductCard.vue';
import { useCartStore } from 'src/stores/cart';
import { computed, onMounted, ref, toRefs } from 'vue';
import { useAxios } from 'src/services/useAxios';
import { useRouter } from 'vue-router';
interface Product {
  title: string;
  imgLink: string;
  price: number;
  companyName: string;
  productInfo: string;
  quantity: number;
}
export default {
  props: {
    itemsPerPage: {
      type: Number,
      default: 6, // Default value if not provided
    },
  },
  setup(props) {
    const router = useRouter();
    const userStore = useUserStore();
    const { isSignedIn } = toRefs(userStore);
    const { loading, get } = useAxios();
    const currentPage = ref(1);
    // Ref to store the fetched product data
    const products = ref<Product[]>([]);
    // Fetch product data from Express API when component is mounted
    onMounted(async () => {
      try {
        const response = await get<Product[]>('/products');
        // Update with API endpoint
        console.log('Product data:', response.data);
        products.value = response.data;
      } catch (error) {
        console.error('Error fetching product data:', error);
      }
    });
    const showPreviousButton = computed(() => currentPage.value > 1);
    const showNextButton = computed(() => {
      const totalPages = Math.ceil(products.value.length / props.itemsPerPage);
      return currentPage.value < totalPages;
    });
    const visibleProducts = computed(() => {
      const startIndex = (currentPage.value - 1) * props.itemsPerPage;
      const endIndex = Math.min(
        startIndex + props.itemsPerPage,
        products.value.length
      );
      return products.value.slice(startIndex, endIndex);
    });
    const handleAddToCart = (product: Product) => {
      if (isSignedIn.value) {
        useCartStore().addToCart({
          product: { ...product },
          page: currentPage.value,
        });
      } else {
        router.push('/login');
      }
    };
    const goToPreviousPage = () => {
      if (currentPage.value > 1) {
        currentPage.value--;
      }
    };

    const goToNextPage = () => {
      if (showNextButton.value) {
        currentPage.value++;
      }
    };
    return {
      isSignedIn,
      userStore,
      products,
      loading,
      currentPage,
      visibleProducts,
      showPreviousButton,
      showNextButton,
      handleAddToCart,
      goToPreviousPage,
      goToNextPage,
    };
  },
  components: {
    ProductCard,
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
