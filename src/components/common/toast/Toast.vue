<template>
  <div class="toast" v-show="isShow">
    <div>{{ message }}</div>
  </div>
</template>

<script>
  export default {
    name: "Toast",
    data() {
      return {
        isShow: false,
        message: ""
      }
    },
    methods: {
      show(message, duration) {
        this.message = message;
        this.isShow = true;
        setTimeout(() => {
          this.isShow = false;
        }, duration);
      }
    }
  }
</script>

<style scoped>
  .toast {
    position: fixed;
    background-color: rgba(0, 0, 0, 0.6);
    color: white;
    padding: 8px 15px;
    border-radius: 5px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 999;
  }
</style>
