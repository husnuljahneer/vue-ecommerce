<template>
  <section>
    <div class="mx-auto h-full w-full mt-10 md:mt-20">
      <div class="flex p-10 sm:p-10 md:p-10 lg:p-10 justify-between">
        <div class="flex text-left text-xl sm:text-lg md:text-2xl lg:text-3xl">
          // OUTREACH World
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
  background-image: url(https://images.unsplash.com/photo-1574201635302-388dd92a4c3f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80);
  background-size: cover;
  background-repeat: no-repeat;
}
.styled_opener_second {
  background-image: url(https://images.unsplash.com/photo-1617551307538-c9cdb9d71289?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80);
  background-size: cover;
  background-repeat: no-repeat;
}
.styled_opener_third {
  background-image: url(https://images.unsplash.com/photo-1520975661595-6453be3f7070?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80);
  background-size: cover;
  background-repeat: no-repeat;
}
.styled_opener_fourth {
  background-image: url(https://images.unsplash.com/photo-1516762689617-e1cffcef479d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=711&q=80);
  background-size: cover;
  background-repeat: no-repeat;
}
</style>