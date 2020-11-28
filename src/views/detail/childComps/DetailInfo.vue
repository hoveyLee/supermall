<template>
  <div class="detail-info" v-if="detailInfo">
    <div content="detail-desc">
      <div class="detail-info-top"></div>
      <div class="detail-info-center">{{detailInfo.desc}}</div>
      <div class="detail-info-bottom"></div>
    </div>

    <div v-if="detailInfo.detailImage" class="detail-title">
      <span>{{detailInfo.detailImage[0].key}}</span>
    </div>

    <div class="detail-list-image" v-if="detailInfo.detailImage">
      <img v-for="item in detailInfo.detailImage[0].list" :src="item" alt="" @load="detailImage">
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailInfo",
    data() {
      return {
        detailImageLength: null,
        counter: 0
      }
    },
    props: {
      detailInfo: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    methods: {
      detailImage() {
        // console.log(this.detailImageLength);
        // console.log(this.counter);
        if (++this.counter === this.detailImageLength) {
          this.$emit("detailImage");
        }
      }
    },
    watch: {
      detailInfo() {
        this.detailImageLength = this.detailInfo.detailImage[0].list.length;
      }
    }
  }
</script>

<style scoped>
  .detail-info {
    padding: 20px 10px;
  }
  .detail-info-top {
    background: #222222;
    width: 80px;
    height: 1px;
    position: relative;
  }
  .detail-info-top::after {
    width: 5px;
    content: "";
    height: 5px;
    bottom: 0;
    position: absolute;
    background: #222222;
  }
  .detail-info-center {
    font-size: 14px;
    padding: 20px 0;
  }
  .detail-info-bottom {
    width: 80px;
    height: 1px;
    background: #222222;
    float: right;
    position: relative;
  }
  .detail-info-bottom::after {
    width: 5px;
    content: "";
    height: 5px;
    background: #222222;
    right: 0;
    bottom: 0;
    position: absolute;
  }
  .detail-title {
    font-size: 15px;
    margin-top: 14px;
  }
  .detail-list-image {
    margin-top: 10px;
  }
  .detail-list-image img{
    width: 100%;
  }
</style>
