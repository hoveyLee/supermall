<template>
  <div>
    <detail-nav-bar/>
    <detail-swiper :topImages="topImages"/>
  </div>
</template>

<script>
  import DetailNavBar from "./childComps/DetailNavBar";
  import {getDetailData} from "@/network/detail";
  import DetailSwiper from "./childComps/DetailSwiper";
  export default {
    name: "Detail",
    data() {
      return {
        iid: null,
        topImages: null
      }
    },
    components: {
      DetailSwiper,
      DetailNavBar
    },
    created() {
      this.iid = this.$route.params.iid;
      getDetailData(this.iid).then(res => {
        console.log(res);
        this.topImages = res.result.itemInfo.topImages;
      })
    }
  }
</script>

<style scoped>

</style>
