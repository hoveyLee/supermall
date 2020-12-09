
import {ADD_SHOP_COUNTER, ADD_SHOP_FIRST, ADD_SHOP_LIST} from "./mutations-type";
export default {
  [ADD_SHOP_FIRST](state, payload) {
    payload.num = 1;
    payload.checked = true;
    state.shopList.push(payload);
  },
  [ADD_SHOP_COUNTER](state, payload) {
    payload.num++;
  }
}
