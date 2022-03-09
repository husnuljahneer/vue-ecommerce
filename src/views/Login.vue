<template >
  <div class="flex flex-row justify-center mt-10 sm:mt-0 md:mt-0 lg:mt-0">
    <div class="w-0 sm:w-0 md:w-0 lg:w-1/2 image__div">&nbsp;</div>
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
        Login
      </h1>
      <form class="rounded px-8 pt-6 pb-8 mb-4" @submit="setUser">
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
            type="text"
            name="email"
            placeholder="Email"
            v-model="email"
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
            type="password"
            name="password"
            placeholder="Password"
            v-model="password"
          />
        </div>
        <div class="flex items-center justify-between">
          <button
            @click="signin"
            class="
              w-full
              border-2 border-green-500
              hover:bg-green-500 hover:border-green-500 hover:text-white
              text-black
              font-semibold
              text-sm
              py-3
              px-4
              focus:outline-none focus:shadow-outline
            "
            type="button"
          >
            Log In
          </button>
        </div>
      </form>
      <div class="bottom-40 p-10 static">
        <p class="text-center text-black text-xl">
          Not yet signed up?
          <router-link to="/register" class="underline"
            >Create Account</router-link
          >
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import AuthService from "@/Services/AuthService.js";
import { useToast, POSITION } from "vue-toastification";
import { mapState } from "vuex";

export default {
  data() {
    return {
      email: "",
      password: "",
      userEmail: "",
      userId: "",
      accessToken: "",
      userLoggedIn: null,
    };
  },
  setup() {
    const toast = useToast();
    return { toast };
  },
  methods: {
    async signin() {
      AuthService.login({
        email: this.email.toLowerCase(),
        password: this.password,
      })
        .then((response) => {
          localStorage.setItem("accessToken", response.data.accessToken);
          this.accessToken = response.data.accessToken;
          this.userEmail = response.data.email;
          this.userId = response.data.id;

          this.$store.dispatch("auth/setUser", this.accessToken);
          this.$store.dispatch("auth/setUserEmail", this.userEmail);
          this.$store.dispatch("auth/setUserId", this.userId);

          this.$router.push("/");
          this.$router.go();

          this.toast.success("Welcome " + this.userEmail, {
            position: POSITION.BOTTOM_RIGHT,
          });
        })
        .catch((error) => {
          this.toast.error(
            error.response.data.message || error.response.data.status,
            { position: POSITION.BOTTOM_RIGHT }
          );
        });
    },
    ...mapState({
      // deepcode ignore HardcodedNonCryptoSecret: <Not Hardcoded: Sync Error>
      accessToken: "auth/user",
    }),
  },
  components: {},
  created() {
    this.userLoggedIn = this.$store.state.auth.isLoggedIn;
    if (this.userLoggedIn) {
      this.$router.push("/");
    }
  },
};
</script>

<style>
.image__div {
  background-image: url("../assets/login.png");
  height: 90vh;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
</style>
