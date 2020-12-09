<template>
  <div id="shop-cart">
    <nav-bar class="shop-cart-navbar">
      <div slot="center">购物车({{getShopCartLength}})</div>
    </nav-bar>
    <cart-list :shopCart="getShopCart"/>
    <cart-bottom/>
  </div>
</template>

<script>
  import {mapGetters} from "vuex";
  import NavBar from "components/common/navbar/NavBar";
  import CartList from "./childComps/CartList";
  import CartBottom from "./childComps/CartBottom";
  export default {
    name: "ShopCart",
    components: {
      CartList,
      NavBar,
      CartBottom
    },
    computed: {
      ...mapGetters([
        'getShopCartLength',
        "getShopCart"
      ])
    }
  }
</script>

<style scoped>
  .shop-cart-navbar {
    background-color: var(--color-tint);
    color: #fff;
    font-size: 16px;
    font-weight: 800;
  }
</style>
