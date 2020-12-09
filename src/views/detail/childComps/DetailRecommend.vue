<template>
  <div class="detail-recommend">
    <div class="detail-recommend-top">
      <span>热门推荐</span>
    </div>
    <div class="detail-recommend-center">
      <goods-list :goods="detailRecommend.list">
        <goods-list-item/>
      </goods-list>
    </div>
  </div>
</template>

<script>
  import GoodsList from "components/content/goods/GoodsList";
  import GoodsListItem from "components/content/goods/GoodsListItem";
  export default {
    name: "DetailRecommend",
    components: {
      GoodsListItem,
      GoodsList
    },
    props: {
      detailRecommend: {
        type: Object,
        default() {
          return {}
        }
      }
    }
  }
</script>

<style scoped>
  .detail-recommend {
    padding: 10px 10px;
  }
  .detail-recommend-top {
    padding: 10px 0;
  }
</style>
