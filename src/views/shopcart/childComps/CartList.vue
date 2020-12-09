<template>
  <scroll class="content" ref="scroll">
    <cart-list-item v-for="item in shopCart" :item-info="item"/>
  </scroll>
</template>

<script>
  import CartListItem from "./CartListItem";
  import Scroll from "components/common/scroll/Scroll";
  export default {
    name: "CartList",
    components: {
      Scroll,
      CartListItem
    },
    props: {
      shopCart: {
        type: Array,
        default() {
          return []
        }
      }
    },
    activated() {
      this.$refs.scroll.refresh();
    }
  }
</script>

<style scoped>
  .content {
    position: absolute;
    bottom: 93px;
    left: 0;
    right: 0;
    top: 44px;
    overflow: hidden;
  }
</style>
