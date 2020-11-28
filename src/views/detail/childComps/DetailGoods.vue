<template>
  <div class="info" v-if="Object.keys(goods) !== 0">
    <div class="info-title">
      <span>{{ goods.title }}</span>
    </div>
    <div class="info-price">
      <span>{{ goods.price }}</span>
      <span>{{ goods.oldPrice }}</span>
      <span v-if="goods.discountDesc" :style="{background: goods.discountBgColor}">{{ goods.discountDesc }}</span>
    </div>
    <div class="info-other" v-if="goods.columns">
      <span v-for="index in goods.columns.length - 1">
        {{ goods.columns[index-1] }}
      </span>
      <span>{{ goods.services[goods.services.length - 1].name }}</span>
    </div>
    <div class="info-service" v-if="goods.services">
      <span class="info-service-item" v-for="index in goods.services.length - 1">
        <img :src="goods.services[index-1].icon" alt="">
        <span>{{ goods.services[index-1].name }}</span>
      </span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailGoods",
    props: {
      goods: {
        type: Object,
        default() {
          return {}
        }
      }
    }
  }
</script>

<style scoped>
  .info {
    width: 100%;
    padding: 0 9px;
  }
  .info-title {
    font-size: 16px;
    color: #222;
    padding: 11px 0;
  }
  .info-price span:first-child{
    color: var(--color-high-text);
    font-size: 24px;
  }
  .info-price span:nth-child(2){
    text-decoration: line-through;
    color: #999;
    font-size: 14px;
    margin: 0 5px;
  }
  .info-price span:nth-child(3){
    color: white;
    background-color: var(--color-high-text);
    border-radius: 10px;
    font-size: 10px;
    padding: 3px 5px;
    top: -6px;
    position: relative;
  }
  .info-other {
    margin-top: 25px;
    padding-bottom: 10px;
    font-size: 13px;
    display: flex;
    color: #999;
    justify-content: space-between;
    border-bottom: 1px solid #f2f2f2;
  }
  .info-service {
    margin-top: 20px;
    font-size: 12px;
    display: flex;
    justify-content: space-between;
  }
  .info-service-item img {
    position: relative;
    top: 2px;
    width: 14px;
    height: 14px;
  }
</style>
