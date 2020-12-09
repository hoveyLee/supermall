<template>
  <div class="detail-bottom-bar">
    <div class="detail-bottom-left">
      <div class="detail-bottom-left-top">
        <div><img src="~assets/img/detail/detail_bottom.png" alt=""></div>
        <div><img src="~assets/img/detail/detail_bottom.png" alt=""></div>
        <div><img src="~assets/img/detail/detail_bottom.png" alt=""></div>
      </div>
      <div class="detail-bottom-left-bottom">
        <p>客服</p>
        <p>店铺</p>
        <p>收藏</p>
      </div>
    </div>

    <div class="detail-bottom-right">
      <div @click="addCart">加入购物车</div>
      <div>购买</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailBottomBar",
    methods: {
      addCart() {
        // console.log(1);
        this.$emit("addCart");
      }
    }
  }
</script>

<style scoped>
  .detail-bottom-bar {
    position: absolute;
    bottom: 0;
    height: 49px;
    width: 100%;
    background-color: white;
    display: flex;
    overflow: hidden;
  }
  .detail-bottom-left {
    text-align: center;
    flex: 1;
    width: 50%;
    margin-top: 3px;
  }
  .detail-bottom-left div {
    display: flex;
    justify-content: space-around;
    height: 28px;
  }
  .detail-bottom-right {
    flex: 1;
    width: 50%;
  }
  .detail-bottom-left .detail-bottom-left-top div {
    width: 60px;
    overflow: hidden;
    margin-bottom: 15px;
  }
  .detail-bottom-left .detail-bottom-left-bottom {
    font-size: 14px;
  }
  .detail-bottom-left p {
    display: inline-block;
    justify-content: space-around;
  }
  .detail-bottom-left .detail-bottom-left-top div img {
    width: 22px;
    height: 160px;
  }
  .detail-bottom-left .detail-bottom-left-top div:nth-child(1) img {
    position: relative;
    top: -56px;
  }
  .detail-bottom-left .detail-bottom-left-top div:nth-child(2) img {
    position: relative;
    top: -105px;
  }
  .detail-bottom-right {
    display: flex;
    text-align: center;
    line-height: 49px;
    color: white;
    font-size: 14px;
  }
  .detail-bottom-right div {
    flex: 1;
  }
  .detail-bottom-right div:nth-child(1) {
    background: #ffe817;
    color: #000;
  }
  .detail-bottom-right div:nth-child(2) {
    background: var(--color-tint);
    color: #fff;
  }
</style>
