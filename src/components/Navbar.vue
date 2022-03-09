<template>
  <!-- mobile navigation bar -->

  <div
    class="
      sticky
      top-0
      bg-white
      z-50
      flex flex-col
      sm:flex
      md:hidden
      lg:hidden
      justify-around
      py-2
      shadow-sm
    "
  >
    <div class="flex flex-row justify-center text-2xl font-serif mb-2">
      <router-link to="/" class="z-20">
          <img src="@/assets/icon.png" alt="" class="h-12" />
      </router-link>
    </div>
    <div class="flex flex-row justify-center">
      <div class="flex">
        <div class="flex mr-2 btn btn-xs rounded-none btn-ghost">
          <h1 class="mr-2 text-sm" v-if="cartCount !== 0">{{ cartCount }}</h1>
          <router-link to="/cart" class="z-20">
            <h1 class="text-sm">CART</h1>
          </router-link>
        </div>
        <div class="mr-2 text-sm">
          <router-link v-if="!userLoggedIn" to="/login" class="z-10">
            <h1 class="text-sm btn btn-xs rounded-none btn-ghost">LOGIN</h1>
          </router-link>
          <router-link v-if="userLoggedIn" to="/profile" class="z-10">
            <h1 class="text-sm btn btn-xs rounded-none btn-ghost">PROFILE</h1>
          </router-link>
        </div>
        <div
          class="text-sm btn btn-xs rounded-none btn-ghost"
          v-if="userLoggedIn"
          @click="logout"
        >
          LOG OUT
        </div>
      </div>
    </div>
  </div>

  <!-- large navigation bar -->

  <div
    class="
      sticky
      hidden
      sm:hidden
      md:flex
      lg:flex
      bg-white
      justify-center
      w-full
      py-1
      top-0
      z-20
      px-1
      sm:px-1
      md:px-20
      lg:px-20
    "
  >
    <div class="navbar bg-white text-black w-11/12" id="nav">
      <div class="px-2 mx-2 navbar-start">
        <div class="hidden md:flex lg:flex items-stretch">
          <a class="btn btn-ghost btn-sm rounded-btn font-normal"> Women </a>
          <a class="btn btn-ghost btn-sm rounded-btn font-normal"> Men </a>
        </div>
      </div>
      <router-link to="/">
        <div class="hidden md:flex px-2 mx-2 navbar-center lg:flex">
          <span class="text-4xl font-medium font-serif text-black">
            <img src="@/assets/icon.png" alt="" class="h-12" />
          </span>
        </div>
      </router-link>

      <div class="navbar-end">
        <div class="fle">
          <div class="flex">
            <router-link to="/cart" class="z-20">
              <button
                class="
                  ml-5
                  btn btn-ghost
                  text-white
                  w-full
                  btn-md
                  rounded-none
                  focus-within:text-white
                  focus:text-white
                  hover:bg-white
                "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="text-white currentColor"
                  class="bi bi-bag-heart"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5v-.5Zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0ZM14 14V5H2v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1ZM8 7.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132Z"
                  />
                </svg>
                <div
                  class="relative -mt-5 ml-1 p-1 w-5 bg-gray-900 z-10"
                  v-if="cartCount !== 0"
                >
                  {{ cartCount }}
                </div>
              </button>
            </router-link>
            <router-link v-if="!userLoggedIn" to="/login" class="z-10">
              <button
                class="
                  ml-1
                  btn btn-ghost
                  font-normal
                  btn-md
                  rounded-none
                  border-0
                  hover:bg-white
                "
              >
                LOGIN
              </button>
            </router-link>
            <router-link v-else-if="userLoggedIn" to="/profile" class="z-10">
              <button
                class="
                  ml-1
                  btn btn-ghost btn-md
                  rounded-none
                  border-0
                  hover:bg-white
                "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="text-white currentColor"
                  class="bi bi-person-badge"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M6.5 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3zM11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"
                  />
                  <path
                    d="M4.5 0A2.5 2.5 0 0 0 2 2.5V14a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2.5A2.5 2.5 0 0 0 11.5 0h-7zM3 2.5A1.5 1.5 0 0 1 4.5 1h7A1.5 1.5 0 0 1 13 2.5v10.795a4.2 4.2 0 0 0-.776-.492C11.392 12.387 10.063 12 8 12s-3.392.387-4.224.803a4.2 4.2 0 0 0-.776.492V2.5z"
                  />
                </svg>
              </button>
            </router-link>
            <button
              v-if="userLoggedIn"
              @click="logout"
              class="ml-1 btn btn-ghost font-normal btn-md rounded-none"
            >
              LogOut
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <router-view :key="$route.fullPath"></router-view>
</template>

<script>
import { mapGetters, mapState } from "vuex";
export default {
  data() {
    return {
      search: "",
      userLoggedIn: null,
    };
  },

  computed: {
    ...mapGetters({
      cartCount: "cart/cartItemCount",
      products: "products/products",
      auth: "auth/isLoggedIn",
    }),
    ...mapState({
      products: "products/products",
      isLoggedIn: "auth/isLoggedIn",
    }),
  },
  methods: {
    logout() {
      this.$store.dispatch("auth/logout");
      this.$router.go();
    },
  },
  created() {
    this.userLoggedIn = this.$store.state.auth.isLoggedIn;
  },
};
</script>


<style>
#nav a.router-link-exact-active {
  color: rgb(85, 85, 238);
}
</style>
