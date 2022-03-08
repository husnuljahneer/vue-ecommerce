<template >
  <div class="flex flex-row justify-center mt-10 sm:mt-0 md:mt-0 lg:mt-0">
    <div class="w-0 sm:w-0 md:w-0 lg:w-1/2 image__reg__div">&nbsp;</div>
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
      <h1 class="font-sans text-left ml-10 mb-5 text-4xl text-black">
        // Create Account
      </h1>

      <form class="rounded px-8 pt-6 pb-8 mb-4">
        <div class="mb-4">
          <input
            class="
              placeholder-black
              appearance-none
              border-b-2 border-black
              w-full
              py-4
              px-4
              text-black
              leading-tight
              focus:outline-none focus:bg-gray focus:border-purple-500
            "
            type="text"
            name="email"
            placeholder="Email"
            v-model="email"
          />
        </div>
        <div class="mb-4">
          <input
            class="
              appearance-none
              border-b-2 border-black
              placeholder-black
              w-full
              py-4
              px-4
              text-black
              leading-tight
              focus:outline-none focus:bg-gray focus:border-purple-500
            "
            type="text"
            name="username"
            placeholder="Username"
            v-model="username"
          />
        </div>
        <div class="mb-6">
          <input
            class="
              appearance-none
              border-b-2 border-black
              placeholder-black
              w-full
              py-4
              px-4
              text-black
              leading-tight
              focus:outline-none focus:bg-gray focus:border-purple-500
            "
            type="password"
            name="password"
            placeholder="Password"
            v-model="password"
          />

          <!-- <p class="mt-4 text-red-500 text-xs italic">
            {{ ExistError }}
          </p>
          <p class="mt-4 text-red-500 text-xs italic">
            {{ error }}
          </p> -->
        </div>
        <div class="flex items-center justify-between">
          <button
            @click="signup"
            class="
              hover:bg-green-500 hover:border-green-500 hover:text-white
              text-black
              border-2 border-green-500
              font-semibold
              text-sm
              py-3
              px-4
              focus:outline-none focus:shadow-outline
              w-full
            "
            type="button"
          >
            Create Account
          </button>
        </div>
      </form>
      <div class="bottom-40 p-10 static">
        <p class="text-center text-black text-xl">
          Already have an account?
          <router-link to="/login" class="underline">Login</router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import AuthService from "@/Services/AuthService.js";
import { useToast, POSITION } from "vue-toastification";
// import Axios from 'axios'
export default {
  data() {
    return {
      email: "",
      password: "",
      username: "",
      error: null,
      ExistError: null,
    };
  },
  setup() {
    const toast = useToast();
    return { toast };
  },
  methods: {
    async signup() {
      AuthService.signup({
        email: this.email,
        password: this.password,
        username: this.username,
      })
        .then((response) => {
          console.log("This is the response", response);
          this.$router.push("/login");
           this.toast.success("You have successfully registered", { position: POSITION.BOTTOM_RIGHT });
          //   this.error = response.response.data.message;
        })
        .catch((error) => {
          // console.log("This is the response", error);
          //   this.ExistError = error.response.data.status;
          //   this.error = error.response.data.message;
          this.toast.error(error.response.data.message || error.response.data.status, { position: POSITION.BOTTOM_RIGHT });
        });
    },
    components: {},
    created() {
      this.userLoggedIn = this.$store.state.auth.isLoggedIn;
      if (this.userLoggedIn) {
        this.$router.push("/");
      }
    },
  },
};
</script>

<style>
.image__reg__div {
  background-image: url("https://i.imgur.com/573cwHY.jpg");
  height: 90vh;
  background-size: cover;
  background-repeat: no-repeat;
}
</style>