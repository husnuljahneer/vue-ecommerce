<template>
  <section>
    <div class="mx-auto h-full w-full mt-10 md:mt-20">
      <div class="flex p-10 sm:p-10 md:p-10 lg:p-10 justify-between">
        <div class="flex text-left text-xl sm:text-lg md:text-2xl lg:text-3xl">
          OUTREACH World
        </div>
        <div
          class="
            flex
            text-left text-sm
            sm:text-base
            md:text-2xl
            lg:text-3xl
            underline
            cursor-pointer
          "
        >
          Explore the blog
        </div>
      </div>
      <div
        class="
          grid grid-cols-2
          px-1
          sm:grid-cols-2
          md:grid-cols-2
          lg:grid-cols-4
          gap-2
        "
        style="height: 650px"
      >
        <div class="flex flex-col">
          <div
            class="
              flex
              h-full
              justify-center
              styled_opener_first
              cursor-pointer
              hover:opacity-80
            "
          ></div>
          <div class="flex px-1 text-2xs sm:text-lg md:text-lg lg:text-lg">
            A WARM ESCAPE
          </div>
        </div>
        <div class="flex flex-col">
          <div
            class="
              flex
              h-full
              justify-center
              styled_opener_second
              cursor-pointer
              hover:opacity-80
            "
          ></div>
          <div class="flex px-1 text-2xs sm:text-lg md:text-lg lg:text-lg">
            WHERE COMFORT MEETS STYLE
          </div>
        </div>
        <div class="flex flex-col">
          <div
            class="
              flex
              h-full
              justify-center
              styled_opener_third
              cursor-pointer
              hover:opacity-80
            "
          ></div>
          <div class="flex px-1 text-2xs sm:text-lg md:text-lg lg:text-lg">
            BEAUTY STARTS WITHIN
          </div>
        </div>
        <div class="flex flex-col">
          <div
            class="
              flex
              h-full
              justify-center
              styled_opener_fourth
              cursor-pointer
              hover:opacity-80
            "
          ></div>
          <div class="flex px-1 text-2xs sm:text-lg md:text-lg lg:text-lg">
            GEARING UP FOR FALL
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style>
.styled_opener_first {
  background-image: url('../assets/opener_1.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
.styled_opener_second {
    background-image: url('../assets/opener_2.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
.styled_opener_third {
     background-image: url('../assets/opener_3.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
.styled_opener_fourth {
    background-image: url('../assets/opener_4.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
</style>