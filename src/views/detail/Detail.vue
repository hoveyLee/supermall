<template>
  <div id="detail">
    <detail-nav-bar class="nav-bar"/>
    <scroll class="content" ref="scroll">
      <detail-swiper :topImages="topImages" @imgClick="imgClick"/>
      <detail-goods :goods="goods"/>
      <detail-shop :shop="shop"/>
      <detail-info :detailInfo="detailInfo" @detailImage="detailImage"/>
      <detail-params :detailParams="detailParams"/>
      <detail-comment :detailRate="detailRate"/>
      <detail-recommend/>
    </scroll>
  </div>
</template>

<script>
  import {getDetailData, Goods, Shop, Params} from "network/detail";

  import Scroll from "@/components/common/scroll/Scroll";

  import DetailGoods from "./childComps/DetailGoods";
  import DetailNavBar from "./childComps/DetailNavBar";
  import DetailSwiper from "./childComps/DetailSwiper";
  import DetailShop from "./childComps/DetailShop";
  import DetailInfo from "./childComps/DetailInfo";
  import DetailParams from "./childComps/DetailParams";
  import DetailComment from "./childComps/DetailComment";
  import DetailRecommend from "./childComps/DetailRecommend";

  export default {
    name: "Detail",
    data() {
      return {
        iid: null,
        topImages: null,
        goods: {},
        shop: {},
        detailInfo: {},
        detailParams: {},
        detailRate: {}
      }
    },
    components: {
      DetailRecommend,
      DetailComment,
      DetailParams,
      DetailShop,
      DetailSwiper,
      DetailNavBar,
      DetailGoods,
      DetailInfo,
      Scroll
    },
    methods: {
      imgClick() {
        this.$refs.scroll.refresh();
      },
      detailImage() {
        this.$refs.scroll.refresh();
      }
    },
    created() {
      this.iid = this.$route.params.iid;
      getDetailData(this.iid).then(res => {
        console.log(res);
        let data = res.result;
        this.topImages = data.itemInfo.topImages;
        this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services);
        this.shop = new Shop(data.shopInfo);
        this.detailInfo = data.detailInfo;
        this.detailParams = new Params(data.itemParams);
        this.detailRate = data.rate;
      })
    }
  }
</script>

<style scoped>
  #detail {
    position: relative;
    z-index: 9;
    background: white;
    height: 100vh;
  }
  .nav-bar {
    position: relative;
    z-index: 9;
    background: white;
  }
  .content {
    overflow: hidden;
    height: calc(100% - 44px);
  }
</style>
