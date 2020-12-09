<template>
  <div class="checkButton" :class="{'checked': isChecked}">
    <img src="~assets/img/cart/tick.svg" alt="">
  </div>
</template>

<script>
  export default {
    name: "CheckButton",
    props: {
      isChecked: {
        type: Boolean,
        default: false
      }
    }
  }
</script>

<style scoped>
  .checkButton {
    border: 2px solid #ccc;
    border-radius: 50%;
    width: 20px;
    height: 20px;
  }
  .checked {
    background-color: var(--color-tint);
    border: 2px solid var(--color-tint);
  }
</style>
