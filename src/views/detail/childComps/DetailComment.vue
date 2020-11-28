<template>
  <div class="detail-comment">
    <div class="detail-comment-top">
      <span>用户评价</span>
      <span>更多<i class="right"></i></span>
    </div>
    <div v-for="item in detailRate.list">
      <div class="detail-comment-center">
        <div class="detail-comment-avatar">
          <img :src="item.user.avatar" alt="">
          <span>{{ item.user.uname }}</span>
        </div>
        <div class="detail-comment-content">
          <p>{{ item.content }}</p>
          <span>{{ item.created | formatTime }}</span>
          <span>{{ item.style }}</span>
        </div>
      </div>
      <div class="detail-comment-footer">
        <img v-for="image in item.images" :src="image" alt="">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailComment",
    props: {
      detailRate: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    data() {

    },
    filters: {
      formatTime(value) {
        let time = new Date(value * 1000);
        let y = time.getFullYear();
        let m = time.getMonth() + 1;
        let d = time.getDate();
        return (y + "-" + m + "-" + d);
      }
    }
  }
</script>

<style scoped>
  .detail-comment {
    padding: 18px 10px 16px 10px;
    border-bottom: 5px solid #f2f2f2;
  }
  .detail-comment-top {
    font-size: 16px;
    border-bottom: 1px solid #ccc;
    padding-bottom: 15px;
    display: flex;
    justify-content: space-between;
  }
  .detail-comment-top span:last-child {
    font-size: 13px;
  }
  .right {
    width: 10px;
    height: 10px;
    margin-left: 5px;
    transform: rotate(45deg);
    line-height: 15px;
    border-top: 2px solid #ccc;
    border-right: 2px solid #ccc;
  }
  .detail-comment-center {
    padding: 15px 0;
  }
  .detail-comment-avatar img {
    width: 45px;
    height: 45px;
    border-radius: 50px;
    vertical-align: middle;
  }
  .detail-comment-avatar span {
    margin-left: 10px;
  }
  .detail-comment-content {
    font-size: 14px;
    padding: 10px 5px 0 5px;
    line-height: 22px;
  }
  .detail-comment-content p {
    margin-bottom: 12px;
  }
  .detail-comment-content span {
    font-size: 12px;
    color: #999;
  }
  .detail-comment-content span:last-child {
    margin-left: 10px;
  }
  .detail-comment-footer img {
    width: 120px;
  }
</style>
