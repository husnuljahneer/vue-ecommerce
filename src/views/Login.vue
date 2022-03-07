<template >
  <div class="flex flex-row justify-center mt-10 sm:mt-0 md:mt-0 lg:mt-0 ">
    <div class="w-0  sm:w-0 md:w-0 lg:w-1/2 image__div">&nbsp;</div>
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
      <h1 class="font-sans text-left ml-10 mb-5 text-4xl text-black">// Login</h1>
      <form class="rounded px-8 pt-6 pb-8 mb-4" >
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

          <!-- <p class="mt-4 text-red-500 text-xs italic">
              {{ ExistError }} this is the exist errror
            </p>
            <p class="mt-4 text-red-500 text-xs italic">
              {{ error }} this is the error
            </p> -->
        </div>
        <div class="flex items-center justify-between">
          <button
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
      <div class="bottom-40 p-10 static ">
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

export default {
  data() {
      return {

      }
  }
};
</script>

<style>
.image__div {
  background-image: url("https://images.unsplash.com/photo-1637499948395-9b4bb51c76a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80");
  height: 90vh;
  background-size: cover;
  background-repeat: no-repeat;
}
</style>