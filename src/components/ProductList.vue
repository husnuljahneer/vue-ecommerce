<template>
  <section>
    <div class="p-1 mt-10 md:mt-2" id="products_section">
      <div class="p-1 md:p-10">
        <div class="flex text-left text-2xl md:text-3xl p-1 lg:p-0 mb-5">
          LATEST PRODUCTS
        </div>
      </div>

      <div class="px-1 md:px-5">
        <div
          class="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4"
        >
          <ProductLoadingCard v-if="!products" />
          <ProductCard
            v-else
            v-for="product in products"
            :key="product.id"
            :product="product"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ProductCard from "@/components/ProductCard.vue";
import ProductLoadingCard from "@/components/ProductLoadingCard.vue";
import { mapState } from "vuex";
export default {
  name: "Home",
  components: {
    ProductCard,
    ProductLoadingCard,
  },
  computed: mapState({
    products: (state) => state.products.products,
  }),
  created() {
    this.$store.dispatch("products/getAllProducts");
  },
};
</script>

<style>
</style>