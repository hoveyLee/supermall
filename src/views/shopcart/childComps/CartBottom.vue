<template>
  <div class="cart-bottom">
    <div class="cart-bottom-left">
      <check-button :isChecked="isChecked" @click.native="checkClick"/>
      <span>全选</span>
    </div>
    <div class="cart-bottom-center">
      <span>合计：{{getShopCartPrice}}</span>
    </div>
    <div class="cart-bottom-right">
      去结算({{getShopCartChecked}})
    </div>
  </div>
</template>

<script>
  import {mapGetters} from "vuex";
  import CheckButton from "components/content/checkButton/CheckButton";
  export default {
    name: "CartBottom",
    components: {
      CheckButton
    },
    computed: {
      ...mapGetters([
        "getShopCartPrice",
        "getShopCartChecked",
        "getShopCart"
      ]),
      isChecked() {
        if (this.getShopCart.length===0) return false;
        return !this.getShopCart.find(value => !value.checked);
      }
    },
    methods: {
      checkClick() {
        if (!this.isChecked) {
          this.getShopCart.forEach(value => value.checked = true);
        }else {
          this.getShopCart.forEach(value => value.checked = false);
        }
      }
    }
  }
</script>

<style scoped>
  .cart-bottom {
    position: absolute;
    bottom: 49px;
    height: 44px;
    display: flex;
    align-items: center;
    background-color: #f2f2f2;
    width: 100%;
    font-size: 16px;
    box-shadow: 0 -1px 10px #ccc;
  }
  .cart-bottom-left {
    display: flex;
    width: 90px;
    margin-left: 10px;
    font-size: 14px;
  }
  .cart-bottom-left span {
    margin-left: 5px;
  }
  .cart-bottom-center {
    flex: 1;
  }
  .cart-bottom-right {
    width: 100px;
    background-color: #ff6e19;
    height: 44px;
    line-height: 44px;
    text-align: center;
    color: white;
  }
</style>
