<template>
  <div
    class="
      min-w-screen
      flex
      items-center
      p-5
      lg:p-10
      mt-10
      overflow-hidden
      relative
    "
  >
    <div
      class="
        w-full
        max-w-6xl
        rounded
        bg-white
        p-10
        lg:p-20
        mx-auto
        text-gray-800
        relative
        md:text-left
      "
    >
      <div class="md:flex items-center -mx-10">
        <div class="lg:w-2/5 md:w-1/2 px-10 mb-10 md:mb-0">
          <div
            class="
              hover:width-full
              transition
              duration-500
              ease-in-out
              transform
              hover:scale-110
              relative
            "
          >
            <img :src="product.image" class="w-full relative z-10" alt="" />
          </div>
        </div>

        <div class="w-full md:w-1/2 px-10">
          <!-- star ratings here -->
          <div class="flex flex-row justify-center md:justify-start mb-5">
            <star-rating
              read-only
              :max-rating="6"
              :show-rating="false"
              :rating="ratingCount"
              star-size="20"
            />
          </div>
          <div class="mb-10">
            <h1 class="font-bold uppercase text-2xl mb-5">
              {{ product.name }}
            </h1>

            <p class="text-sm">
              {{ product.description }}
            </p>
          </div>
          <div>
            <div class="inline-block align-bottom mr-5">
              <span class="text-2xl leading-none align-baseline">$</span>
              <span class="font-bold text-5xl leading-none align-baseline">{{
                product.price
              }}</span>
              <span class="text-2xl leading-none align-baseline">.00</span>
            </div>
            <div class="inline-block align-bottom mt-5">
              <button
                @click="addProductToCart(product)"
                class="
                  btn btn-accent
                  rounded-sm
                  bg-green-500
                  opacity-75
                  hover:opacity-100
                  text-black-900
                  hover:text-white
                  px-10
                  py-2
                  font-semibold
                "
              >
                <i class="mdi mdi-cart -ml-2 mr-2"></i> BUY NOW
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <RelatedProducts />
</template>

<script>
import RelatedProducts from "@/components/RelatedProducts.vue";
import StarRating from "vue-star-rating";

export default {
  props: ["id"],
  data() {
    return {
      //generate a random number for rating
      ratingCount: Math.floor(Math.random() * 6) + 3,
    };
  },
  components: {
    RelatedProducts,
    StarRating,
  },
  computed: {
    product() {
      return this.$store.state.products.product;
    },
  },
  methods: {
    addProductToCart(product) {
      this.$store.dispatch("cart/addProductToCart", product);
    },
  },
  created() {
    //scroll to top
    window.scrollTo(0, 0);
    this.$store.dispatch("products/getProductById", this.id);
  },
};
</script>

<style>
@import url(https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/5.3.45/css/materialdesignicons.min.css);
</style>