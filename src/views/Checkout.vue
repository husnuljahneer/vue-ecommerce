<template >
  <section v-if="cartTotalPrice > 0">
    <div
      class="
        flex flex-row
        justify-center
        h-full
        sm:h-screen
        md:h-screen
        lg:h-screen
        overflow-hidden
      "
    >
      <div
        class="
          lg:w-1/2
          md:w-full
          sm:w-full
          xs:w-full
          lg:p-48 lg:-mt-10
          md:p-1
          sm:p-1
          xs:p-1
        "
      >
        <div
          class="
            flex flex-col
            sm:flex-row
            md:flex-row
            lg:flex-row
            p-10
            justify-between
          "
        >
          <div class="mb-5">
            <h1 class="font-sans text-left mb-5 text-4xl text-black">
              CHECKOUT
            </h1>
          </div>
          <div>
            <h1 class="text-right text-base text-black">
              Total Price :
              <span class="font-bold text-yellow-800"
                >{{ cartTotalPrice + shippingRate }}.00 $</span
              >
            </h1>
            <h1 class="text-right text-sm text-black">
              Checkout Expire :
              <span class="font-semibold"
                >{{ countDown }} : {{ secondsCountDown }} minutes
              </span>
            </h1>
          </div>
        </div>
        <form class="rounded px-8 pt-6 pb-8 mb-4">
          <div class="flex flex-row">
            <div class="mb-4">
              <input
                class="
                  appearance-none
                  border-b-2 border-black
                  w-full
                  py-4
                  px-4
                  text-black
                  leading-tight
                  focus:outline-none focus:bg-gray focus:border-purple-500
                  placeholder-black
                "
                required
                type="text"
                name="first_name"
                placeholder="First Name"
                v-model="first_name"
              />
            </div>
            <div class="mb-4">
              <input
                class="
                  appearance-none
                  border-b-2 border-black
                  w-full
                  ml-2
                  py-4
                  px-4
                  text-black
                  leading-tight
                  focus:outline-none focus:bg-gray focus:border-purple-500
                  placeholder-black
                "
                required
                type="text"
                name="last_name"
                placeholder="Last Name"
                v-model="last_name"
              />
            </div>
          </div>
          <div class="mb-6">
            <input
              class="
                appearance-none
                border-b-2 border-black
                w-full
                py-4
                px-4
                text-black
                leading-tight
                focus:outline-none focus:bg-gray focus:border-purple-500
                placeholder-black
              "
              required
              type="text"
              name="address"
              placeholder="Address"
              v-model="address"
            />
          </div>
          <div class="mb-6">
            <input
              class="
                appearance-none
                border-b-2 border-black
                w-full
                py-4
                px-4
                text-black
                leading-tight
                focus:outline-none focus:bg-gray focus:border-purple-500
                placeholder-black
              "
              required
              type="number"
              name="phone"
              placeholder="Phone Number"
              v-model="phone"
            />
          </div>
          <div class="mb-6">
            <input
              class="
                appearance-none
                border-b-2 border-black
                w-full
                py-4
                px-4
                text-black
                leading-tight
                focus:outline-none focus:bg-gray focus:border-purple-500
                placeholder-black
              "
              required
              type="email"
              name="email"
              placeholder="Email"
              :value="userEmail"
              disabled
            />
          </div>
          <div class="flex flex-row">
            <div class="mb-4">
              <input
                class="
                  appearance-none
                  border-b-2 border-black
                  w-full
                  py-4
                  px-4
                  text-black
                  leading-tight
                  focus:outline-none focus:bg-gray focus:border-purple-500
                  placeholder-black
                "
                required
                type="text"
                name="town"
                placeholder="Town"
                v-model="town"
              />
            </div>
            <div class="mb-4">
              <input
                class="
                  appearance-none
                  border-b-2 border-black
                  w-full
                  ml-2
                  py-4
                  px-4
                  text-black
                  leading-tight
                  focus:outline-none focus:bg-gray focus:border-purple-500
                  placeholder-black
                "
                required
                type="text"
                name="zipcode"
                placeholder="Zip Code"
                v-model="zipcode"
                max="6"
                min="5"
              />
            </div>
          </div>
          <div class="flex items-center justify-between">
            <button
              @click="confirmOrder()"
              class="
                mt-10
                w-full
                bg-gray-800
                hover:opacity-100
                text-white
                hover:bg-yellow-500 hover:text-gray-700
                font-semibold
                text-sm
                py-3
                px-4
                focus:outline-none focus:shadow-outline
              "
              type="button"
            >
              CONFIRM ORDER
            </button>
          </div>
        </form>
      </div>
      <div class="w-0 lg:w-1/2 md:w-0 sm:w-0 xs:w-0 image_checkout_div">
        &nbsp;
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
          Oops! Add some items to your cart to checkout.
        </h1>
        <p class="mb-8 leading-relaxed">
          You have no items in your shopping cart. Let's go buy something.
        </p>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters, mapState } from "vuex";
import CartService from "@/Services/CartService.js";
import { useToast, POSITION } from "vue-toastification";

export default {
  data() {
    return {
      userLoggedIn: this.$store.state.auth.isLoggedIn,
      first_name: "",
      last_name: "",
      address: "",
      phone: "",
      email: "",
      town: "",
      zipcode: "",
      shippingRate: 50,
      userEmail: this.$store.state.auth.userEmail,
      userId: this.$store.state.auth.userId,
      countDown: Math.floor(10),
      secondsCountDown: Math.floor(60),
    };
  },
  setup() {
    const toast = useToast();
    return { toast };
  },
  computed: {
    ...mapState("cart", ["cart"]),
    ...mapGetters("cart", ["cartItemCount", "cartTotalPrice"]),
  },
  methods: {
    async confirmOrder() {
      CartService.checkOut({
        first_name: this.first_name,
        last_name: this.last_name,
        address: this.address,
        phone: this.phone,
        town: this.town,
        pincode: this.zipcode,
        customer_id: this.userId,
        email: this.userEmail,
        cart: this.$store.state.cart.cart,
        grand_total: this.$store.getters["cart/cartTotalPrice"],
      })
        .then((response) => {
          this.$store.dispatch("cart/clearCart");
          this.toast.success(response.data.message, {
            position: POSITION.BOTTOM_RIGHT,
          });
          this.$router.push("/profile");
        })
        .catch((error) => {
          this.toast.error(
            error.response.data.message || error.response.data.status,
            { position: POSITION.BOTTOM_RIGHT }
          );
        });
    },
    startTimer() {
      this.interval = setInterval(() => {
        this.countDown--;
        if (this.countDown == 0) {
          this.$router.push("/cart");
        }
      }, 60000);
      this.interval = setInterval(() => {
        this.secondsCountDown--;
        if (this.secondsCountDown == 0) {
          this.secondsCountDown = 60;
        }
      }, 1000);
    },
  },
  created() {
    this.startTimer();
  },
};
</script>

<style>
.image_checkout_div {
  background-image: url("https://images.unsplash.com/photo-1611042553484-d61f84d22784?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80");
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
}
</style>