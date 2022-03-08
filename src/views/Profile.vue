<template>
  <section v-if="this.userProducts.length > 1">
    <div class="flex flex-col items-center justify-between pb-6 mt-40 h-window">
      <h1 class="text-lg sm:text-lg md:text-3xl lg:text-6xl">ORDER HISTORY</h1>
      <div class="-mx-4 sm:-mx-8 w-full px-0 sm:px-4 md:px-4 lg:px-4 py-4">
        <div class="inline-block w-full overflow-hidden">
          <table class="min-w-full leading-normal">
            <thead>
              <tr>
                <th
                  class="
                    px-5
                    py-3
                    border-b-2 border-gray-200
                    bg-gray-100
                    text-left text-xs
                    font-semibold
                    text-gray-600
                    uppercase
                    tracking-wider
                  "
                >
                  #Order Id
                </th>
                <th
                  class="
                    px-5
                    py-3
                    border-b-2 border-gray-200
                    bg-gray-100
                    text-left text-xs
                    font-semibold
                    text-gray-600
                    uppercase
                    tracking-wider
                  "
                >
                  Product Name
                </th>
                <th
                  class="
                    px-5
                    py-3
                    border-b-2 border-gray-200
                    bg-gray-100
                    text-left text-xs
                    font-semibold
                    text-gray-600
                    uppercase
                    tracking-wider
                  "
                >
                  Quantity
                </th>
                <th
                  class="
                    px-5
                    py-3
                    border-b-2 border-gray-200
                    bg-gray-100
                    text-left text-xs
                    font-semibold
                    text-gray-600
                    uppercase
                    tracking-wider
                  "
                >
                  Price
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in userProducts" :key="item.id">
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <div class="flex items-center">
                    <div class="ml-3">
                      <p class="text-gray-900 whitespace-no-wrap">
                        {{ item.order_id }}
                      </p>
                    </div>
                  </div>
                </td>
                <td
                  class="
                    px-5
                    py-5
                    border-b
                    text-left
                    border-gray-200
                    bg-white
                    text-sm
                  "
                >
                  <p class="text-gray-900 whitespace-no-wrap">
                    {{ item.product_name }}
                  </p>
                </td>
                <td
                  class="
                    px-5
                    py-5
                    border-b
                    text-left
                    border-gray-200
                    bg-white
                    text-sm
                  "
                >
                  <p class="text-gray-900 whitespace-no-wrap">
                    {{ item.qty }}
                  </p>
                </td>
                <td
                  class="
                    px-5
                    py-5
                    border-b
                    text-left
                    border-gray-200
                    bg-white
                    text-sm
                  "
                >
                  <p class="text-gray-900 whitespace-no-wrap">
                    {{ item.price }}
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </section>

  <section class="text-gray-600 body-font" v-else>
    <div
      class="
        container
        mx-auto
        flex flex-col
        px-5
        py-24
        justify-center
        items-center
      "
    >
      <img
        class="lg:w-1/5 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
        alt="hero"
        src="https://i.imgur.com/ztqw8L5.png"
      />
      <div class="w-full md:w-2/3 flex flex-col mb-16 items-center text-center">
        <h1
          class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900"
        >
          Did you order anything? Your order history is empty.
        </h1>
        <p class="mb-8 leading-relaxed">
          You haven't ordered anything yet. You can order your favourite items
          from the shop.
        </p>
      </div>
    </div>
  </section>
</template>

<script>
import CartService from "@/Services/CartService.js";
export default {
  data() {
    return {
      userProducts: [],
      userId: this.$store.state.auth.userId,
      userLoggedIn: this.$store.state.auth.isLoggedIn,
    };
  },
  methods: {
    getUserProducts(userId) {
      CartService.getUserProducts(userId)
        .then((response) => {
          for (let i = 0; i < response.data.product.length; i++) {
            for (
              let j = 0;
              j < response.data.product[i].order_details.length;
              j++
            ) {
              this.userProducts.push(response.data.product[i].order_details[j]);
            }
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  created() {
    this.getUserProducts(this.userId);
  },
};
</script>
