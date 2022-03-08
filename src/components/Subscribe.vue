<template>
  <section class="text-gray-600 body-font bg-black">
    <div
      class="
        container
        px-5
        py-24
        mx-auto
        flex
        items-center
        md:flex-row
        flex-col
      "
    >
      <div
        class="
          flex flex-col
          md:pr-10 md:mb-0
          mb-6
          pr-0
          w-full
          md:w-auto md:text-left
        "
      >
        <h2
          class="text-sm tracking-widest font-medium text-white title-font mb-1"
        >
          SUBSCRIBE
        </h2>
        <h1
          class="
            md:text-sm
            text-center text-sm
            font-medium
            text-white
            lg:text-left
          "
        >
          Exclusive content & weekly update
        </h1>
      </div>
      <div
        class="
          flex
          md:ml-auto md:mr-0
          mx-auto
          items-center
          flex-shrink-0
          space-x-4
        "
      >
        <div class="relative flex-grow w-full">
          <input
            type="email"
            id="email"
            name="email"
            placeholder="ENTER YOUR EMAIL"
            class="
              text-sm
              w-full
              border-b-2
              bg-black
              otline-none
              text-white
              py-1
              px-3
              focus:outline-none
              focus-within:border-opacity-0
              placeholder-white
            "
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style>
</style>