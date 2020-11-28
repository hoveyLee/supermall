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
    data() {
      return {
        isEmit: false
      }
    },
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
        if (!this.isEmit) {
          this.$emit("homeSwiperImg");
          this.isEmit = true;
        }
      }
    }
  }
</script>

<style scoped>

</style>
