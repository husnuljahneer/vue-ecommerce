<template>
  <section>
    <div class="p-1 mt-10 md:mt-20" id="products_section">
      <div class="p-1 md:p-10">
        <div class="flex text-left text-2xl md:text-3xl p-1 lg:p-0 mb-5">
          // LATEST PRODUCTS
        </div>
      </div>

      <div class="px-1 md:px-5">
        <div
          class="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4"
        >
          <router-link to="/productDetails"> 
          <ProductCard />
          </router-link>
          <router-link to="/productDetails"> 
          <ProductCard />
          </router-link>
           <router-link to="/productDetails"> 
          <ProductCard />
          </router-link>
           <router-link to="/productDetails"> 
          <ProductCard />
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ProductCard from "@/components/ProductCard.vue";
export default {
  data() {
    return {
      products: null,
    };
  },
  components: {
    ProductCard,
  },
};
</script>

<style>
</style>