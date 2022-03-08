<template>
  <div class="p-1 md:p-10">
    <div class="flex text-left text-3xl lg:p-0 md:p-10">// SHOP MORE</div>
    <div class="px-1 py-6">
      <div
        class="
          grid grid-cols-2
          md:grid-cols-2
          lg:grid-cols-4
          gap-6
          lg:gap-4
          mt-8
        "
      >
        <ProductCard
          v-for="product in products.slice(randomNumber, anotherRandomNumber)"
          :key="product.id"
          :product="product"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ProductCard from "@/components/ProductCard.vue";
import { mapState } from "vuex";
export default {
  components: {
    ProductCard,
  },
  data() {
    return {
      randomNumber: "",
      anotherRandomNumber: "",
    };
  },
  computed: mapState({
    products: (state) => state.products.products,
  }),
  created() {
    this.$store.dispatch("products/getAllProducts");
    this.randomNumber = Math.floor(Math.random() * 10) + 1;
    this.anotherRandomNumber = Math.floor(Math.random() * 20) + 1;

    if (this.randomNumber > this.anotherRandomNumber) {
      let temp = this.randomNumber;
      this.randomNumber = this.anotherRandomNumber;
      this.anotherRandomNumber = temp;
    }
    if (this.anotherRandomNumber < 4) {
      this.anotherRandomNumber = this.randomNumber + 4;
    }
    if (this.randomNumber - this.anotherRandomNumber < 4) {
      this.anotherRandomNumber = this.randomNumber * 4;
    }
    if (this.anotherRandomNumber > 20) {
      this.anotherRandomNumber = 12;
    }
    // alert(this.randomNumber);
    // alert(this.anotherRandomNumber);
  },
};
</script>

<style>
</style>