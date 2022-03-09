<template>
  <section
    v-if="this.userProducts.length > 1"
    style="background-color: #100d07; min-height: 60vh"
  >
    <div class="flex flex-col pb-6 h-window p-10">
      <div class="flex flex-col">
        <p class="text-md text-left text-white w-3/4 font-semibold">
          Hi,
          <span class="text-yellow-600 font-normal uppercase">{{
            userEmail.split("@")[0]
          }}</span>
        </p>
        <h1
          class="
            text-md text-left
            sm:text-lg
            md:text-3xl
            lg:text3xl
            text-white
            font-serif
          "
        >
          Order History
        </h1>
      </div>
      <div class="-mx-4 sm:-mx-8 w-full px-0 sm:px-4 md:px-4 lg:px-4 py-10">
        <div class="inline-block w-full overflow-hidden">
          <table class="min-w-full leading-normal">
            <thead>
              <tr>
                <th
                  class="
                    rounded-tl-2xl
                    px-5
                    py-4
                    border-b-2 border-gray-200
                    text-left text-xs text-yellow-500
                    font-bold
                    tracking-wider
                  "
                >
                  #Order Id
                </th>
                <th
                  class="
                    px-5
                    py-4
                    border-b-2 border-gray-200
                    text-left text-xs text-yellow-500
                    font-bold
                    tracking-wider
                  "
                >
                  Product Name
                </th>
                <th
                  class="
                    px-5
                    py-4
                    border-b-2 border-gray-200
                    text-left text-xs text-yellow-500
                    font-bold
                    tracking-wider
                  "
                >
                  Quantity
                </th>
                <th
                  class="
                    px-5
                    py-4
                    border-b-2 border-gray-200
                    text-left text-xs text-yellow-500
                    font-bold
                    tracking-wider
                  "
                >
                  Price
                </th>
                <th
                  class="
                    px-5
                    py-4
                    border-b-2 border-gray-200
                    text-left text-xs text-yellow-500
                    font-bold
                    tracking-wider
                  "
                >
                  Status
                </th>
                <th
                  class="
                    rounded-tr-2xl
                    px-5
                    py-4
                    border-b-2 border-gray-200
                    text-left text-xs text-yellow-500
                    font-bold
                    tracking-wider
                  "
                >
                  Invoice
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in userProducts" :key="item.id">
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <div class="flex items-center">
                    <div class="ml-3">
                      <p class="text-black font-bold whitespace-no-wrap">
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
                  <p class="text-black whitespace-no-wrap">
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
                    $ {{ item.price }}.00
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
                  <p class="text-green-700 whitespace-no-wrap">Shipped</p>
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
                  <router-link
                    :to="{
                      name: 'Invoice',
                      params: { order_id: item.order_id },
                    }"
                  >
                    <p class="text-blue-700 whitespace-no-wrap font-semibold">
                      View
                    </p>
                  </router-link>
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
      class="mx-auto flex flex-col p-20 items-center"
      style="background-color: #100d07"
    >
      <div class="flex flex-row justify-between">
        <p class="text-md w-3/4 font-semibold">
          Hi,
          <span class="text-yellow-600 font-normal uppercase">{{
            userEmail.split("@")[0]
          }}</span>
        </p>
      </div>
      <img
        class="w-full md:w-2/3 pointer-events-none select-none"
        alt="empty_cart"
        src="../assets/error_profile.png"
      />
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
      userEmail: this.$store.state.auth.userEmail,
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
