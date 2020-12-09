<template>
  <div id="detail">
    <detail-nav-bar class="nav-bar" ref="navbar" @titleClick="titleClick"/>
    <scroll class="content"
            ref="scroll"
            :probeType="3"
            @scroll="scroll"
            :probe-type="3">

      <detail-swiper :topImages="topImages" @imgClick="imgClick"/>
      <detail-goods :goods="goods"/>
      <detail-shop :shop="shop"/>
      <detail-info :detailInfo="detailInfo" @detailImage="detailImage"/>
      <detail-params ref="params" :detailParams="detailParams"/>
      <detail-comment ref="comment" :detailRate="detailRate"/>
      <detail-recommend ref="recommend" :detailRecommend="detailRecommend"/>
    </scroll>
    <detail-bottom-bar @addCart="addCart"/>
    <back-top @click.native="backClick" v-show="isShow"/>
    <toast :message="message" :isShow="isToShow"/>
  </div>
</template>

<script>
  import {getDetailData, Goods, Shop, Params, getRecommend} from "network/detail";

  import {mixin} from "common/mixin";
  import Scroll from "components/common/scroll/Scroll";
  import BackTop from "components/content/backTop/BackTop";
  import {debounce} from "common/utils";

  import DetailGoods from "./childComps/DetailGoods";
  import DetailNavBar from "./childComps/DetailNavBar";
  import DetailSwiper from "./childComps/DetailSwiper";
  import DetailShop from "./childComps/DetailShop";
  import DetailInfo from "./childComps/DetailInfo";
  import DetailParams from "./childComps/DetailParams";
  import DetailComment from "./childComps/DetailComment";
  import DetailRecommend from "./childComps/DetailRecommend";
  import DetailBottomBar from "./childComps/DetailBottomBar";
  import Toast from "components/common/toast/Toast";

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
        detailRate: {},
        detailRecommend: {},
        scrollTopY: [],
        refreshTop: null,
        currentIndex: null,
        message: "",
        isToShow: false
      }
    },
    components: {
      Toast,
      BackTop,
      DetailBottomBar,
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
      addCart() {
        const shopCart = {};
        shopCart.iid = this.iid;
        shopCart.desc = this.goods.desc;
        shopCart.lowNowPrice = this.goods.lowNowPrice;
        shopCart.title = this.goods.title;
        shopCart.image = this.topImages && this.topImages[0];
        this.$store.dispatch("addShopList", shopCart).then(res => {
          this.$toast.show(res, 1500);
        });
      },
      scroll(position) {
        for (let i=0; i<this.scrollTopY.length - 1; i++) {
          if ((i !== this.currentIndex) && (-position.y >= this.scrollTopY[i] && -position.y < this.scrollTopY[i + 1])) {
            this.currentIndex = i;
            this.$refs.navbar.currentIndex = parseInt(this.currentIndex);
          }
          // console.log(i);
          // if ((i !== this.currentIndex) &&
          //   ((i < scrollLength && -position.y >= this.scrollTopY[parseInt(i)] && -position.y < this.scrollTopY[parseInt(i) + 1]) ||
          //     (parseInt(i) === scrollLength && -position.y >= this.scrollTopY[parseInt(i)]))) {
          //   this.currentIndex = i;
          //   this.$refs.navbar.currentIndex = parseInt(this.currentIndex);
          // }
        }
        this.scrollContent(position);
      },
      titleClick(index) {
        this.$refs.scroll.scrollTop(0, -this.scrollTopY[index], 500);
      },
      imgClick() {
        this.$refs.scroll.refresh();
      },
      detailImage() {
        this.refreshTop();
        this.refresh();
      }
    },
    mixins: [mixin],
    created() {
      this.iid = this.$route.params.iid;
      getDetailData(this.iid).then(res => {
        let data = res.result;
        // console.log(data);
        this.topImages = data.itemInfo.topImages;
        this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services);
        this.shop = new Shop(data.shopInfo);
        this.detailInfo = data.detailInfo;
        this.detailParams = new Params(data.itemParams);
        this.detailRate = data.rate;

        // 当dom更新后重新渲染完后进行回调
        // this.$nextTick(() => {
        //   this.scrollTopY.push(0);
        //   this.scrollTopY.push(this.$refs.params.$el.offsetTop);
        //   this.scrollTopY.push(this.$refs.comment.$el.offsetTop);
        //   this.scrollTopY.push(this.$refs.recommend.$el.offsetTop);
        //   console.log(this.$refs.params.$el);
        //   console.log(this.scrollTopY);
        // })
        // console.log(data);

        // 创建滚动y值的防抖函数
        this.refreshTop = debounce(() => {
          this.scrollTopY = [];
          this.scrollTopY.push(0);
          this.scrollTopY.push(this.$refs.params && this.$refs.params.$el.offsetTop);
          this.scrollTopY.push(this.$refs.comment && this.$refs.comment.$el.offsetTop);
          this.scrollTopY.push(this.$refs.recommend && this.$refs.recommend.$el.offsetTop);
          this.scrollTopY.push(Number.MAX_VALUE);
          // console.log(this.scrollTopY);
        }, 300)
      });
      getRecommend().then(res => {
        // console.log(res.data);
        this.detailRecommend = res.data;
      });
    },
    destroyed() {
      this.$bus.$off("imgLoad", this.imgLinstener);
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
    /*height: calc(100% - 44px);*/
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }
</style>
