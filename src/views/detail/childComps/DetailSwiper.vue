<template>
  <swiper class="detail-swiper">
    <swiper-item v-for="(item, index) in topImages" :key="index">
      <img :src="item" alt="" @load="imgClick">
    </swiper-item>
  </swiper>
</template>

<script>
  import {Swiper, SwiperItem} from "components/common/swiper";
  export default {
    name: "DetailSwiper",
    components: {
      Swiper,
      SwiperItem
    },
    props: {
      topImages: {
        type: Array,
        default() {
          return []
        }
      }
    },
    methods: {
      imgClick() {
        this.$emit("imgClick");
      }
    }
  }
</script>

<style scoped>
  .detail-swiper {
    height: 300px;
    overflow: hidden;
  }
</style>
