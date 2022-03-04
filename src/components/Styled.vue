<template>
  <div class="mx-auto h-full w-full mt-5 md:mt-20">
    <div class="flex p-5 md:p-10 justify-between mb-5">
      <h1 class="text-lg md:text-2xl">As styled by you @outreach</h1>
    </div>
    <div
      class="
        grid grid-cols-2
        sm:grid-cols-2
        md:grid-cols-2
        lg:grid-cols-4
      "
      style="height: 650px"
    >
      <div
        class="
          flex
          h-full
          justify-center
          styled__first
          cursor-pointer
          hover:opacity-80
        "
      ></div>
       <div
        class="
          flex
          h-full
          justify-center
          styled__second
          cursor-pointer
          hover:opacity-80
        "
      ></div>
       <div
        class="
          flex
          h-full
          justify-center
          styled__third
          cursor-pointer
          hover:opacity-80
        "
      ></div>
       <div
        class="
          flex
          h-full
          justify-center
          styled__fourth
          cursor-pointer
          hover:opacity-80
        "
      ></div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.styled__container {
  height: 60vh;
}
.styled__first {
  background-image: url(https://images.unsplash.com/photo-1572112686886-5c0b5bc8dacd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80);
  background-size: cover;
  background-repeat: no-repeat;
}
.styled__second {
  background-image: url(https://images.unsplash.com/photo-1535530705774-695729778c55?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80);
  background-size: cover;
  background-repeat: no-repeat;
}
.styled__third {
  background-image: url(https://images.unsplash.com/photo-1585672221229-70ef2f5b1f5f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80);
  background-size: cover;
  background-repeat: no-repeat;
}
.styled__fourth {
  background-image: url(https://images.unsplash.com/photo-1643308002958-6fc02613aa5c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80);
  background-size: cover;
  background-repeat: no-repeat;
}
</style>