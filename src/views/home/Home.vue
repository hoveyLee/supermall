<template>
  <div id="home">
    <nav-bar class="home-navbar">
      <div slot="center">购物街</div>
    </nav-bar>
    <tab-control :titles="['流行', '新款', '精选']"
                 @tabClick="tabClick"
                 class="tab-control"
                 ref="tabControl1"
                 v-show="isShowTab"/>
    <scroll class="content"
            ref="scroll"
            :probe-type="3"
            @scroll="scrollContent"
            :pull-up-load="true"
            @pullingUp="moreData">
      <home-swiper :banners="banners" @homeSwiperImg="homeSwiperImg"/>
      <recommend-view :recommends="recommends"/>
      <feature-view/>
      <tab-control :titles="['流行', '新款', '精选']"
                   @tabClick="tabClick"
                   ref="tabControl2"/>
      <goods-list :goods="showGoods"/>
    </scroll>
    <back-top @click.native="backClick" v-show="isShow"/>
  </div>
</template>

<script>
  import HomeSwiper from "./childComps/HomeSwiper";
  import RecommendView from "./childComps/RecommendView";
  import FeatureView from "./childComps/FeatureView";

  import TabControl from "components/content/tabcontrol/TabControl";
  import NavBar from "components/common/navbar/NavBar";
  import {getHomeMultidata, getHomeGoods} from "network/home";
  import GoodsList from "components/content/goods/GoodsList";
  import Scroll from "components/common/scroll/Scroll";
  import BackTop from "components/content/backTop/BackTop";

  import {debounce} from "common/utils";

  export default {
    name: "Home",
    components: {
      BackTop,
      GoodsList,
      NavBar,
      HomeSwiper,
      RecommendView,
      FeatureView,
      TabControl,
      Scroll
    },
    data() {
      return {
        banners: [],
        recommends: [],
        goods: {
          "pop": {page: 0, list: []},
          "new": {page: 0, list: []},
          "sell": {page: 0, list: []}
        },
        tabType: "pop",
        isShow: false,
        tabOffsetTop: 0,
        isShowTab: false,
        saveY: 0
      }
    },
    computed: {
      showGoods() {
        return this.goods[this.tabType].list
      }
    },
    created() {
      this.getHomeMultidata();

      this.getHomeGoods("pop");
      this.getHomeGoods("new");
      this.getHomeGoods("sell");

    },
    mounted() {
      const refresh = debounce(this.$refs.scroll.refresh, 100);
      this.$bus.$on('imgLoad', () => {
        refresh();
      });

    },
    activated() {
      this.$refs.scroll.scrollTop(0, this.saveY, 0);
      this.$refs.scroll.refresh();
    },
    deactivated() {
      this.saveY = this.$refs.scroll.getScrollY();
    },
    methods: {
      homeSwiperImg() {
        this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop;
      },
      moreData() {
        // console.log("好想爱这个世界呀！");
        this.getHomeGoods(this.tabType);
      },
      scrollContent(position) {
        // console.log(position);
        this.isShow = -position.y > 1000;
        this.isShowTab = -position.y > this.tabOffsetTop
      },
      getHomeMultidata() {
        getHomeMultidata().then(res => {
          this.banners = res.data.banner.list;
          this.recommends = res.data.recommend.list;
        });
      },
      getHomeGoods(type) {
        const page = this.goods[type].page + 1;
        getHomeGoods(type, page).then(res => {
          // console.log(res);
          this.goods[type].list.push(...res.data.list);
          this.goods[type].page = page;
          this.$refs.scroll.finishPullUp();
        });
      },
      tabClick(index) {
        // console.log(index);
        switch (index) {
          case 0:
            this.tabType = "pop";
            break;
          case 1:
            this.tabType = "new";
            break;
          case 2:
            this.tabType = "sell";
            break;
        }
        this.$refs.tabControl1.currentIndex = index;
        this.$refs.tabControl2.currentIndex = index;
      },
      backClick() {
        this.$refs.scroll.scrollTop(0, 0);
      }
    }
  }
</script>

<style scoped>
  #home {
    padding-top: 44px;
    height: 100vh;
  }

  .home-navbar {
    background-color: var(--color-tint);
    color: white;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
  }
  .tab-control {
    position: relative;
    background: white;
    z-index: 1;
  }
  .content {
    position: absolute;
    top: 44px;
    left: 0;
    right: 0;
    bottom: 49px;
    overflow: hidden;
  }
  /*.content {*/
  /*  height: calc(100% - 49px);*/
  /*  overflow: hidden;*/
  /*}*/
</style>
