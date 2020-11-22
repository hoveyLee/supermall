<template>
  <div class="tab-control">
    <div v-for="(title, index) in titles" class="tab-control-item"
         :class="{'active': currentIndex === index}"
         @click="itemClick(index)">
      <span>
        {{title}}
      </span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabControl",
    props: {
      titles: {
        type: Array,
        default() {
          return []
        }
      }
    },
    data() {
      return {
        currentIndex: 0
      }
    },
    methods: {
      itemClick(index) {
        this.currentIndex = index;
        this.$emit("tabClick", index);
      }
    }
  }
</script>

<style scoped>
  .tab-control {
    display: flex;
    text-align: center;
    width: 100%;
    height: 40px;
    line-height: 40px;
    font-size: 16px;
  }

  .tab-control-item {
    flex: 1;
  }

  .tab-control-item span {
    padding: 5px;
  }

  .active span {
    border-bottom: 3px var(--color-tint) solid;
  }

  .active {
    color: var(--color-high-text);
  }
</style>
