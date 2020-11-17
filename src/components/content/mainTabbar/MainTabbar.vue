<template>
  <tab-bar>
    <tab-bar-item link="/home" activeStyle="deepPink">
      <img src="~/assets/img/tabbar/home.svg" alt="" slot="item-icon">
      <img src="~/assets/img/tabbar/home_active.svg" alt="" slot="item-icon-active">
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item link="/category" activeStyle="deepPink">
      <img src="~/assets/img/tabbar/category.svg" alt="" slot="item-icon">
      <img src="~/assets/img/tabbar/category_active.svg" alt="" slot="item-icon-active">
      <div slot="item-text">分类</div>
    </tab-bar-item>
    <tab-bar-item link="/shopcart" activeStyle="deepPink">
      <img src="~/assets/img/tabbar/cart.svg" alt="" slot="item-icon">
      <img src="~/assets/img/tabbar/cart_active.svg" alt="" slot="item-icon-active">
      <div slot="item-text">购物车</div>
    </tab-bar-item>
    <tab-bar-item link="/profile" activeStyle="deepPink">
      <img src="~/assets/img/tabbar/profile.svg" alt="" slot="item-icon">
      <img src="~/assets/img/tabbar/profile_active.svg" alt="" slot="item-icon-active">
      <div slot="item-text">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
  import TabBar from "components/common/tabbar/TabBar";
  import TabBarItem from "components/common/tabbar/TabBarItem";
  export default {
    name: "MainTabbar",
    components: {
      TabBar,
      TabBarItem
    }
  }
</script>

<style scoped>

</style>
