<template>
  <div class="detail-params">
    <table v-if="detailParams.tables">
      <tr v-for="items in detailParams.tables[0]">
        <td v-for="item in items">{{ item }}</td>
      </tr>
    </table>
    <table v-if="detailParams.set">
      <tr v-for="item in detailParams.set">
        <td>{{ item.key }}</td>
        <td>{{ item.value }}</td>
      </tr>
    </table>
    <div class="detail-params-image">
      <img :src="detailParams.image" alt="">
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailParams",
    props: {
      detailParams: {
        type: Object,
        default() {
          return {}
        }
      }
    }
  }
</script>

<style scoped>
  .detail-params {
    border-top: 5px solid #f2f2f2;
    border-bottom: 5px solid #f2f2f2;
    padding: 20px 15px;
  }
  .detail-params table {
    width: 100%;
    font-size: 14px;
  }
  .detail-params table tr td {
    border-bottom: 1px solid #f2f2f2;
    height: 40px;
    line-height: 40px;
  }
  .detail-params table:last-child tr td:last-child {
    line-height: 20px;
  }
  .detail-params table:first-child tr {
    display: flex;
  }
  .detail-params table:first-child tr td {
    flex: 1;
  }
  .detail-params table:first-child tr {
    display: flex;
  }
  .detail-params table:nth-child(2) tr td:first-child {
    padding-right: 60px;
    width: 90px;
  }
  .detail-params table:first-child tr:last-child {
    border-bottom: 2px solid #e9e9e9;
  }
  .detail-params table:nth-child(2) td:last-child {
    color: var(--color-high-text);
  }
  .detail-params-image img {
    width: 100%;
  }
</style>
