<template>
  <nav-bar>
    <div slot="left" class="back" @click="backClick">
      <img src="~assets/img/common/back.svg" alt="">
    </div>
    <div slot="center" class="title">
      <div v-for="(item, index) in titles"
           @click="titleClick(index)"
           class="title-item"
           :class="{'active': currentIndex === index}">
        {{item}}
      </div>
    </div>
  </nav-bar>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
  export default {
    name: "DetailNavBar",
    data() {
      return {
        titles: ["商品", "参数", "评论", "推荐"],
        currentIndex: 0
      }
    },
    components: {
      NavBar
    },
    methods: {
      backClick() {
        this.$router.back();
      },
      titleClick(index) {
        this.$emit("titleClick", index);
        this.currentIndex = index;
      }
    }
  }
</script>

<style scoped>
  .back {
    margin-top: 5px;
  }
  .title {
    font-size: 15px;
    display: flex;
  }
  .title-item {
    flex: 1;
  }
  .active {
    color: var(--color-high-text);
  }
</style>
