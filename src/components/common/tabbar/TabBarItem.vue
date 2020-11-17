<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :style="activeColor"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
  export default {
    name: "TabBarItem",
    data() {
      return {
        // isActive: true
      }
    },
    props: {
      link: String,
      activeStyle: {
        type: String,
        default: "red"
      }
    },
    methods: {
      itemClick() {
        // console.log(this.link);
        this.$router.replace(this.link);
      }
    },
    computed: {
      isActive() {
        return this.$route.path.indexOf(this.link) !== -1
      },
      activeColor() {
        return this.isActive ? {color: this.activeStyle} : {}
      }
    }
  }
</script>

<style scoped>
  .tab-bar-item {
    flex: 1;
    text-align: center;
    font-size: 14px;
  }
  .tab-bar-item img {
    width: 25px;
    margin-top: 3px;
    vertical-align: bottom;
    margin-bottom: 2px;
  }
</style>
