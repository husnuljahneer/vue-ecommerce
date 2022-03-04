<template>
<section>
  <div class="p-1  mt-10 md:mt-20 " id="products_section">
    <div class="p-1 md:p-10">

    <div class="flex text-left text-2xl md:text-3xl p-1 lg:p-0 mb-5">// LATEST PRODUCTS</div>
    </div>

    <div class="px-1 md:px-5 ">
      <div
        class="
          grid grid-cols-2
          md:grid-cols-2
          lg:grid-cols-4
          gap-6
          lg:gap-4
        "
      >
        <ProductLoadingCard v-if="!products"/>
        <ProductCard v-else v-for="product in products" :key="product.id" :product="product"/>
      </div>
    </div>
  </div>
  </section>
</template>

<script>
export default {
 data () {
   return {
     products: null
   }
 },
};
</script>

<style>
</style>