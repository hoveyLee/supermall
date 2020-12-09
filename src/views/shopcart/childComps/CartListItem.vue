<template>
  <div class="cart-list-item">
    <div class="item-left">
      <check-button :isChecked="itemInfo.checked" @click.native="checkClick"/>
    </div>
    <div class="item-center">
      <img :src="itemInfo.image" alt="">
    </div>
    <div class="item-right">
      <div>{{itemInfo.title}}</div>
      <div>商品描述: {{itemInfo.desc}}</div>
      <div>
        ￥{{itemInfo.lowNowPrice}}
        <span>×{{itemInfo.num}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from "vuex";
  import CheckButton from "components/content/checkButton/CheckButton";
  export default {
    name: "CartListItem",
    components: {CheckButton},
    props: {
      itemInfo: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    methods: {
      checkClick() {
        this.itemInfo.checked = !this.itemInfo.checked;
      }
    },
    computed: {
      ...mapGetters([
        "getShopCart"
      ])
    }
  }
</script>

<style scoped>
  .cart-list-item {
    padding: 10px;
    width: 100%;
    display: flex;
    font-size: 15px;
    border-bottom: 1px solid #ccc;
  }
  .item-left {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
  }
  .item-center img {
    width: 80px;
    height: 100px;

    border-radius: 10px;
  }
  .item-right {
    overflow: hidden;
    display: flex;
    flex-direction: column;
  }
  .item-right div {
    white-space: nowrap;
    text-overflow: ellipsis;
    flex: 1;
    overflow: hidden;
    margin-left: 10px;
  }
  .item-right div:nth-child(1) {
    font-size: 17px;
  }
  .item-right div:nth-child(2) {
    color: #999;
  }
  .item-right div:nth-child(3) {
    color: red;
  }
  .item-right div:nth-child(3) span {
    float: right;
    color: #000;
  }
</style>
