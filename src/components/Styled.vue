<template>
  <div class="mx-auto h-full w-full mt-5 md:mt-20">
    <div class="flex p-5 md:p-10 justify-between mb-5">
      <h1 class="text-lg md:text-2xl">As styled by you @outreach</h1>
    </div>
    <div
      class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4"
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
  background-image: url(https://marketplace.canva.com/EAE56TzbMO4/1/0/900w/canva-new-arrivals-fashion-weeks-instagram-story-FTYH1GRY-n4.jpg);
  background-size: cover;
  background-repeat: no-repeat;
}
.styled__second {
  background-image: url(https://marketplace.canva.com/EAE56fibVLc/1/0/900w/canva-trends-fashion-instagram-story-dRui5-jvLc8.jpg);
  background-size: cover;
  background-repeat: no-repeat;
}
.styled__third {
  background-image: url(https://marketplace.canva.com/EAE6Fay_rd0/1/0/900w/canva-street-style-casual-retso-fashion-instagram-story-IqzxIaY4Ecg.jpg);
  background-size: cover;
  background-repeat: no-repeat;
}
.styled__fourth {
  background-image: url(https://marketplace.canva.com/EAE58Zna2yA/1/0/900w/canva-fashion-style-latest-brands-instagram-story-k2b-v3PCniM.jpg);
  background-size: cover;
  background-repeat: no-repeat;
}
</style>