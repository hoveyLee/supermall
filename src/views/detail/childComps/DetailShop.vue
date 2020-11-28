<template>
  <div class="detail-shop" v-if="shop">
    <div class="detail-shop-title">
      <img :src="shop.shopLogo" alt="">
      <span>{{ shop.name }}</span>
    </div>
    <div class="detail-shop-group">
      <div class="detail-sales">
        <div>
          <p>{{ shop.cSells | amountConversion}}</p>
          <p>总销量</p>
        </div>
        <div>
          <p>{{ shop.cGoods }}</p>
          <p>全部宝贝</p>
        </div>
      </div>
      <div class="detail-describe">
        <p v-for="item in shop.score">
          <span>{{ item.name }}</span>
          <span :class="{'red': item.isBetter}">{{ item.score }}</span>
          <span v-if="item.isBetter" class="high">高</span>
          <span v-else class="low">低</span>
        </p>
      </div>
    </div>
    <div class="detail-button">
      <a :href="shop.shopUrl">进店逛逛</a>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailShop",
    props: {
      shop: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    filters: {
      amountConversion(value) {
        if (value<10000) return value;
        return (value/10000).toFixed(2) + "万"
      }
    }
  }
</script>

<style scoped>
  .detail-shop {
    margin-top: 18px;
    border-bottom: 5px solid #f2f2f2;
    border-top: 5px solid #f2f2f2;
  }
  .detail-shop-title {
    padding: 18px 8px;
  }
  .detail-shop-title img {
    width: 47px;
    border: 1px #ccc solid;
    vertical-align: middle;
    border-radius: 47px;
  }
  .detail-shop-title span {
    margin-left: 10px;
  }
  .detail-shop-group {
    display: flex;
    padding: 18px 10px;
  }
  .detail-sales {
    height: 48px;
    width: 50%;
    text-align: center;
    font-size: 19px;
    display: flex;
    justify-content: space-around;
    border-right: 2px solid #f2f2f2;
  }
  .detail-sales div p:nth-child(1){
    margin-bottom: 10px;
  }
  .detail-sales div p:nth-child(2){
    font-size: 12px;
  }
  .detail-describe {
    text-align: center;
    width: 50%;
    margin-top: -20px;
  }
  .detail-describe p {
    font-size: 14px;
    margin-top: 10px;
  }
  .detail-describe p span:nth-child(1){
    margin-right: 10px;
  }
  .detail-describe p span:nth-child(2){
    color: #5ea732;
    text-align: left;
    display: inline-block;
    width: 30px;
    margin-right: 10px;
  }
  .detail-describe p span:nth-child(2).red {
    color: red;
  }
  .detail-describe p span:nth-child(3) {
    color: white;
  }
  .detail-describe p span:nth-child(3).high {
    background-color: red;
  }
  .detail-describe p span:nth-child(3).low {
    background-color: #5ea732;
  }
  .detail-button {
    text-align: center;
    margin-bottom: 25px;
    margin-top: 8px;
    font-size: 14px;
  }
  .detail-button a {
    background-color: #f2f2f2;
    padding: 7px 45px;
    border-radius: 10px;
  }
</style>
