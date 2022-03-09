<template>
  <div class="mb-7">
    <!-- //after loading -->

    <div class="flex justify-end items-start" style="z-index: 1">
      <div class="flex flex-row absolute justify-end space-x-2">
        <button
          @click="addProductToCart(product)"
          class="btn btn-ghost hover:bg-gray-700 btn-lg"
          style="z-index: 2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            fill="currentColor "
            class="bi bi-bag-plus-fill text-yellow-500"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5v-.5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0zM8.5 8a.5.5 0 0 0-1 0v1.5H6a.5.5 0 0 0 0 1h1.5V12a.5.5 0 0 0 1 0v-1.5H10a.5.5 0 0 0 0-1H8.5V8z"
            />
          </svg>
        </button>
      </div>
      <router-link :to="{ name: 'ProductDetails', params: { id: product.id } }">
        <img
          class="h-72 sm:h-96 md:h-full"
          :src="product.image"
          alt=""
          role="img"
        />
      </router-link>
    </div>
    <div class="flex flex-col sm:flex-row justify-between">
      <h2
        class="
          text-sm
          md:text-base
          text-black
          dark:text-white
          mt-0
          sm:mt-5
          font-normal
        "
      >
        <router-link
          :to="{ name: 'ProductDetails', params: { id: product.id } }"
          >{{ product.name }}</router-link
        >
      </h2>
      <p
        class="text-2xs md:text-base font-semibold dark:text-white mt-0 sm:mt-5"
      >
        $ {{ product.price }}
      </p>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: ["product"],

  methods: {
    ...mapActions("cart", ["addProductToCart"]),
  },
};
</script>

<style>
</style>