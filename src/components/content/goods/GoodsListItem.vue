<template>
  <div class="goods-list-item" @click="itemClick">
    <img v-lazy="showImage" @load="imgLoad" alt="">
    <div class="goods-text">
      <p class="title">{{goodsItem.title}}</p>
      <span class="price">{{goodsItem.price}}</span>
      <span class="collect">{{goodsItem.cfav}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "GoodsListItem",
    props: {
      goodsItem: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    computed: {
      showImage() {
        if (this.goodsItem.show) {
          return this.goodsItem.show.img
        } else {
          return this.goodsItem.image
        }
      }
    },
    methods: {
      imgLoad() {
        this.$bus.$emit("imgLoad");
      },
      itemClick() {
        this.$router.push("/detail/" + this.goodsItem.iid);
      }
    }
  }
</script>

<style scoped>
  .goods-list-item {
    position: relative;
    padding-bottom: 40px;
    width: 48%;
  }
  .goods-list-item img {
    width: 100%;
    border-radius: 5px;
  }
  .goods-text {
    font-size: 14px;
    position: absolute;
    bottom: 4px;
    left: 0;
    right: 0;
    width: 100%;
    text-align: center;
  }
  .title {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 2px;
  }
  .price {
    color: var(--color-high-text);
  }
  .collect {
    margin-left: 20px;
    position: relative;
  }
  .collect:before {
    content: "";
    display: inline-block;
    width: 14px;
    position: absolute;
    top: 0;
    left: -15px;
    right: 0;
    height: 14px;
    background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
  }
</style>
