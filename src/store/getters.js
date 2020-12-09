export default {
  getShopCartLength(state) {
    return state.shopList.length;
  },
  getShopCart(state) {
    return state.shopList
  },
  getShopCartPrice(state) {
    return "￥" + state.shopList.filter(value => {
      return value.checked === true
    }).reduce((prev, value) => {
      return prev + value.num * value.lowNowPrice
    }, 0).toFixed(2);
  },
  getShopCartChecked(state) {
    return state.shopList.filter(value => {
      return value.checked === true
    }).length
  }
}
