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
    <div class="text-2xl font-serif mb-2">SUPERHERO</div>
    <div class="flex flex-row justify-center">
      <div class="flex">
        <div class="flex mr-2 btn btn-xs rounded-none btn-active">
          <h1 class="text-sm">CART</h1>
        </div>
        <div class="mr-2 text-sm">
          <h1 class="text-sm btn btn-xs rounded-none btn-active">LOGIN</h1>

          <h1 class="text-sm btn btn-xs rounded-none btn-active">PROFILE</h1>
        </div>
        <div
          class="text-sm btn btn-xs rounded-none btn-error"
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
          <!-- <a class="btn btn-ghost btn-sm rounded-btn">
            <router-link to="/">
              <p class="text-green-500">Home</p>
            </router-link>
          </a> -->
          <a class="btn btn-ghost btn-sm rounded-btn font-light"> Women </a>
          <a class="btn btn-ghost btn-sm rounded-btn font-light"> Men </a>
        </div>
      </div>

      <div class="hidden md:flex px-2 mx-2 navbar-center lg:flex">
        <span class="text-4xl font-medium font-serif text-black">
          VUELERPLATE
        </span>
        <!-- <span class="text-4xl font-medium text-yellow-600 font-serif">
          reach
        </span> -->
      </div>

      <div class="navbar-end">
        <div class="fle">
          <div class="flex">
            <!-- <input 

              type="text"
              class="
              
                lg:flex
                hidden
                border-1
                rounded-full
                bg-gray-100
                input
                h-full
              "
              placeholder="Search"
            /> -->

            <button
              class="
                ml-1
                btn btn-ghost
                font-light
                btn-md
                rounded-none
                border-0
                hover:bg-white
              "
            >
              LOGIN
            </button>

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
                fill="text-red-500"
                class="bi bi-person-circle"
                viewBox="0 0 16 16"
              >
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                <path
                  fill-rule="evenodd"
                  d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                />
              </svg>
            </button>

            <button class="ml-1 btn btn-ghost font-light btn-md rounded-none">
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
export default {};
</script>


<style>
#nav a.router-link-exact-active {
  color: rgb(85, 85, 238);
}
</style>
