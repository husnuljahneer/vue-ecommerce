<template>
  <div
    class="p-1 sm:p-20 w-full sm:w-2/3 mx-auto"
    style="background-color: #1d2238"
  >
    <div class="flex flex-row justify-center">
      <p class="text-white text-center">Outreach Fashion</p>
    </div>
    <div class="flex flex-row justify-between">
      <p class="text-white">#order Id : {{ order_id }}</p>
    </div>
    <div class="flex flex-col text-left mt-10">
      <p class="text-white text-sm">Invoice Date</p>
      <p class="text-white font-bold">
        {{ new Date().toLocaleDateString("en-US") }}
      </p>
    </div>
    <div class="flex flex-col text-left mt-10">
      <p class="text-white">Bill To:</p>
      <p class="text-white text-xl font-bold">
        {{ first_name + " " + last_name }}
      </p>
      <p class="text-white font-light text-sm">{{ address }}</p>
      <p class="text-white font-light text-sm">{{ town }}</p>
      <p class="text-white font-light text-sm">{{ phone }}</p>
      <p class="text-white font-light text-sm">{{ pincode }}</p>
    </div>
    <div class="sm:-mx-8 w-full px-0 sm:px-4 md:px-4 lg:px-4 py-4">
      <div class="inline-block w-full overflow-hidden">
        <table class="min-w-full leading-normal">
          <thead>
            <tr>
              <th
                class="
                  rounded-tl-2xl
                  px-5
                  py-4
                  spcl
                  text-left text-xs text-white
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
                  spcl
                  text-left text-xs text-white
                  font-bold
                  tracking-wider
                "
              >
                Quantity
              </th>
              <th
                class="
                  rounded-tr-2xl
                  px-5
                  py-4
                  spcl
                  text-left text-xs text-white
                  font-bold
                  tracking-wider
                "
              >
                Price
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in userProducts" :key="item.order_id">
              <td class="px-5 py-5 text-left spcl text-sm">
                <p class="text-white whitespace-no-wrap">
                  {{ item.product_name }}
                </p>
              </td>
              <td class="px-5 py-5 spcl text-sm text-left">
                <p class="text-white whitespace-no-wrap">
                  {{ item.qty }}
                </p>
              </td>
              <td class="px-5 py-5 text-left spcl text-sm">
                <p class="text-white whitespace-no-wrap">${{ item.price }}</p>
              </td>
            </tr>
            <tr>
              <td class="px-5 py-5 text-left bg-black text-sm text-white">
                Total
              </td>
              <td class="px-5 py-5 text-left bg-black text-sm"></td>
              <td
                class="
                  px-5
                  py-5
                  text-left
                  bg-black
                  text-xl
                  font-serif
                  text-white
                  font-bold
                "
              >
                ${{ grand_total }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import CartService from "@/Services/CartService.js";
export default {
  props: ["order_id"],
  data() {
    return {
      userProducts: [],
      userId: this.$store.state.auth.userId,
      address: "",
      first_name: "",
      last_name: "",
      phone: "",
      pincode: "",
      town: "",
      grand_total: 0,
    };
  },
  methods: {
    getInvoice() {
      CartService.getInvoice(this.userId, this.order_id)
        .then((response) => {
          console.log(response.data.shippingDetails);
          this.address = response.data.shippingDetails.address;
          this.first_name = response.data.shippingDetails.first_name;
          this.last_name = response.data.shippingDetails.last_name;
          this.phone = response.data.shippingDetails.phone;
          this.pincode = response.data.shippingDetails.pincode;
          this.town = response.data.shippingDetails.town;
          this.grand_total = response.data.shippingDetails.grand_total;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getUserProducts(userId) {
      CartService.getUserProducts(userId)
        .then((response) => {
          for (let i = 0; i < response.data.product.length; i++) {
            for (
              let j = 0;
              j < response.data.product[i].order_details.length;
              j++
            ) {
              if (
                response.data.product[i].order_details[j].order_id ==
                this.order_id
              ) {
                this.userProducts.push(
                  response.data.product[i].order_details[j]
                );
              }
            }
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  created() {
    this.getInvoice();
    this.getUserProducts(this.userId);
  },
};
</script>
<style>
.spcl {
  background-color: #252946;
}
</style>