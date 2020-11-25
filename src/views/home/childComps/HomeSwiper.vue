<template>
  <swiper>
    <swiper-item v-for="item in banners">
      <a :href="item.link">
        <img :src="item.image" alt="" @load="homeSwiperImg">
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
  import {Swiper, SwiperItem} from "components/common/swiper";
  export default {
    name: "HomeSwiper",
    components: {
      SwiperItem,
      Swiper
    },
    props: {
      banners: {
        type: Array,
        default() {
          return []
        }
      }
    },
    methods: {
      homeSwiperImg() {
        this.$emit("homeSwiperImg");
      }
    }
  }
</script>

<style scoped>

</style>
