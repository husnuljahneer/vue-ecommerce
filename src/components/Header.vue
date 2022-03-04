<template>
  <div
    class="flex flex-row custom-header w-full items-center mx-auto p-0 sm:p-20 md:p-20 lg-20"
  >
    <div class="flex flex-col">
      <div
        class="
          text-white
          sm:text-white
          md:text-black
          lg:text-black
          text-center sm:text-left md:text-left lg:text-left text-5xl
          mx-12 sm:mx-0 md:mx-0 lg:mx-0 
        "
      >
        Made for everyday, <br />for everyone
      </div>
      <div
        class="
          flex
          justify-center
          sm:justify-center
          md:justify-start
          lg:justify-start
          mt-5
        "
      >
        <a
          class="
            btn btn-outline
            hover:bg-green-500
            bg-white
            border-0
            hover:border-opacity-0
            rounded-none
            px-16
            lowercase
          "
          href="#products_section"
          v-smooth-scroll
          >Shop and discover</a
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.custom-header {
  background-color: #f5f5f5;
  height: 600px;
  background-image: url(https://images.unsplash.com/photo-1523950704592-ee4866469b4c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1664&q=80);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
</style>