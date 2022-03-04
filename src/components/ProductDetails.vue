<template>
  <div
    class="
      min-w-screen
      flex
      items-center
      p-5
      lg:p-10
      mt-10
      overflow-hidden
      relative
    "
  >
    <div
      class="
        w-full
        max-w-6xl
        rounded
        bg-white
        p-10
        lg:p-20
        mx-auto
        text-gray-800
        relative
        md:text-left
      "
    >
      <div class="md:flex items-center -mx-10">
        <div class="lg:w-2/5 md:w-1/2 px-10 mb-10 md:mb-0">
          <div
            class="
              hover:width-full
              transition
              duration-500
              ease-in-out
              transform
              hover:scale-110
              relative
            "
          >
            <img src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" class="w-full relative z-10" alt="" />
          </div>
        </div>

        <div class="w-full md:w-1/2 px-10">
          <!-- star ratings here -->
          <div class="flex flex-row justify-center md:justify-start mb-5">
          <star-rating read-only :max-rating=6 :show-rating='false' :rating=ratingCount star-size='20'/>
          </div>
          <div class="mb-10">
            <h1 class="font-bold uppercase text-2xl mb-5">
             Test Product
            </h1>

            <p class="text-sm">
                Ut ad veniam adipisicing occaecat nisi non excepteur magna consequat excepteur qui irure aute aute. Est ex occaecat id fugiat magna sit culpa esse ea eu ut veniam tempor. Magna id et nostrud laboris dolor consectetur. Excepteur velit quis cupidatat reprehenderit aute consectetur tempor incididunt commodo occaecat commodo adipisicing veniam sit.
            </p>
          </div>
          <div>
            <div class="inline-block align-bottom mr-5">
              <span class="text-2xl leading-none align-baseline">$</span>
              <span class="font-bold text-5xl leading-none align-baseline">123</span>
              <span class="text-2xl leading-none align-baseline">.00</span>
            </div>
            <div class="inline-block align-bottom mt-5">
              <button
               
                class="
                  btn btn-accent
                  rounded-sm
                  bg-green-500
                  opacity-75
                  hover:opacity-100
                  text-black-900
                  hover:text-white
                  px-10
                  py-2
                  font-semibold
                "
              >
                <i class="mdi mdi-cart -ml-2 mr-2"></i> BUY NOW
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
<style>
</style>