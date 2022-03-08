<template>
  <div id="home_top">
    <Header />
    <ScrollToTop/>
    <!-- <Shipping /> -->
    <TheOpener/>
    <ProductList />
    <Styled />
    <Subscribe/>
    <!-- <MobileApp /> -->
  </div>
</template>

<script>
import ScrollToTop from "@/components/ScrollToTop.vue";
import Header from '@/components/Header.vue'
import TheOpener from '@/components/TheOpener.vue'
// import Shipping from '@/components/Shipping.vue'
import ProductList from '@/components/ProductList.vue'
// import MobileApp from '@/components/MobileApp.vue'
import Subscribe from '@/components/Subscribe.vue'
import Styled from '@/components/Styled.vue'
export default {
  components: {
    ScrollToTop,
    Header,
    TheOpener,
    // Shipping,
    ProductList,
    Styled,
    // MobileApp,
    Subscribe
  }
}
</script>
