 <template>
  <section class="cart-filled mt-10" v-if="cartItemCount >= 1">
    <div class="flex text-3xl px-10 lg:px-20 md:px-10">// CART</div>
    <div class="flex justify-center my-6">
      <h2
        class="
          fixed
          w-24
          text-xs
          left-0
          p-2
          bg-accent
          rounded-none
          font-semibold
          cursor-pointer
        "
        @click="clearCart()"
      >
        CLEAR CART
      </h2>
      <div
        class="
          flex flex-col
          w-full
          p-8
          text-gray-800
          bg-white
          pin-r pin-y
          md:w-4/5
          lg:w-4/5
        "
      >
        <div class="flex-1">
          <table class="w-full text-sm lg:text-base" cellspacing="0">
            <thead>
              <tr class="h-12 uppercas">
                <th class="hidden md:table-cell"></th>
                <th class="text-left md:text-center">Product</th>
                <th class="text-left md:text-right pl-5 lg:pl-0">
                  <span class="lg:hidden" title="Quantity">Qtd</span>
                  <span class="hidden lg:inline">Quantity</span>
                </th>
                <th class="hidden text-right md:table-cell">Unit price</th>
                <th class="text-right">Total price</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in cart" :key="item.id">
                <td class="hidden pb-4 md:table-cell">
                  <img :src="item.image" class="w-24 rounded" alt="Thumbnail" />
                </td>
                <td class="text-left md:text-center">
                  <p class="mb-2 md:ml-4 text-left md:text-center">
                    {{ item.name }}
                  </p>
                  <button
                    @click="removeProductFromCart(item)"
                    type="submit"
                    class="text-gray-700 md:ml-4"
                  >
                    <small>(Remove item)</small>
                  </button>
                </td>
                <td class="justify-center md:justify-end md:flex mt-14">
                  <div class="w-20 h-10">
                    <div class="relative flex flex-row w-full h-8">
                      <div
                        class="
                          custom-number-input
                          flex
                          justify-center
                          h-10
                          w-20
                          sm:w-20
                          md:w-24
                          lg:w-32
                        "
                      >
                        <div
                          class="
                            flex flex-row
                            h-10
                            w-full
                            rounded-lg
                            relative
                            bg-transparent
                            mt-1
                            -ml-4
                          "
                        >
                          <button
                            min="1"
                            max="10"
                            @click="decreaseQty(item)"
                            data-action="decrement"
                            class="
                              bg-gray-200
                              text-gray-600
                              hover:text-gray-700 hover:bg-gray-400
                              h-full
                              w-20
                              cursor-pointer
                              outline-none
                            "
                          >
                            <span class="m-auto text-2xl font-thin">−</span>
                          </button>
                          <input
                            type="number"
                            :value="item.qty"
                            class="
                              focus:outline-none
                              text-center
                              w-full
                              bg-gray-200
                              font-semibold
                              text-md
                              hover:text-black
                              focus:text-black
                              md:text-basecursor-default
                              flex
                              items-center
                              text-gray-700
                              outline-none
                            "
                            name="custom-input-number"
                          />
                          <button
                            min="1"
                            max="10"
                            @click="increaseQty(item)"
                            data-action="increment"
                            class="
                              bg-gray-200
                              text-gray-600
                              hover:text-gray-700 hover:bg-gray-400
                              h-full
                              w-20
                              cursor-pointer
                            "
                          >
                            <span class="m-auto text-2xl font-thin">+</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </td>
                <td class="hidden text-right md:table-cell">
                  <span class="text-sm lg:text-base font-medium">
                    {{ item.price }} $
                  </span>
                </td>
                <td class="text-right">
                  <span class="text-sm lg:text-base font-medium">
                    {{ item.qty * item.price }} $
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
          <hr class="pb-6 mt-6" />
          <div class="my-4 mt-6 -mx-2 lg:flex">
            <div class="lg:px-2 lg:w-1/2"></div>
            <div class="lg:px-2 lg:w-1/2">
              <div class="p-4">
                <h1 class="ml-2 font-bold uppercase">Order Details</h1>
              </div>
              <div class="p-4">
                <div class="flex justify-between border-b">
                  <div
                    class="
                      lg:px-4 lg:py-2
                      m-2
                      text-base
                      lg:text-lg
                      text-center text-gray-800
                    "
                  >
                    Total Price
                  </div>
                  <div
                    class="
                      lg:px-4 lg:py-2
                      m-2
                      l
                      text-base
                      lg:text-lg
                      text-center text-gray-900
                    "
                  >
                    {{ cartTotalPrice }}.00 $
                  </div>
                </div>
                <div class="flex justify-between border-b">
                  <div
                    class="
                      lg:px-4 lg:py-2
                      m-2
                      text-base
                      lg:text-lg
                      text-center text-gray-800
                    "
                  >
                    Shipping
                  </div>
                  <div
                    class="
                      lg:px-4 lg:py-2
                      m-2
                      text-base
                      lg:text-lg
                      text-center text-gray-900
                    "
                  >
                    {{ shippingRate }}.00 $
                  </div>
                </div>
                <div class="flex justify-between border-b">
                  <div
                    class="
                      lg:px-4 lg:py-2
                      m-2
                      text-lg
                      lg:text-xl
                      font-bold
                      text-center text-gray-800
                    "
                  >
                    Subtotal
                  </div>
                  <div
                    class="
                      lg:px-4 lg:py-2
                      m-2
                      lg:text-lg
                      font-bold
                      text-center text-gray-900
                    "
                  >
                    {{ cartTotalPrice + shippingRate }}.00 $
                  </div>
                </div>

                <button
                  class="
                    w-full
                    py-4
                    mt-6
                    font-medium
                    text-white
                    uppercase
                    btn btn-active
                    rounded-none
                    item-center
                    align-middle
                    hover:bg-gray-700
                    focus:shadow-outline focus:outline-none
                  "
                >
                  <span class="ml-2 mt-5px">Procceed to checkout</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

  <script>
export default {
  data() {
   return{
     shippingRate:50,
   }
  },
  computed: {
    cart(){
      return this.$store.state.cart.cart;
    },
    cartTotalPrice() {
       return this.$store.getters["cart/cartTotalPrice"];
    },
    cartItemCount(){
      return this.$store.getters["cart/cartItemCount"];
    }
  },
  methods: {
    increaseQty(item){
      this.$store.dispatch("cart/increaseQty", item);
    },
    decreaseQty(item){
      this.$store.dispatch("cart/decreaseQty", item);
    },
    removeProductFromCart(item){
      this.$store.dispatch("cart/removeProductFromCart", item);
    },
    clearCart(){
      this.$router.push("cart/clearCart");
    }
  },
};
</script>

<style>
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>