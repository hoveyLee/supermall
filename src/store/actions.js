
import {ADD_SHOP_COUNTER, ADD_SHOP_FIRST, ADD_SHOP_LIST} from "./mutations-type";
export default {
  [ADD_SHOP_LIST](context, payload) {
    return new Promise((resolve, reject) => {
      const isPayload = context.state.shopList.find(value => value.iid === payload.iid);
      if (isPayload){
        context.commit(ADD_SHOP_COUNTER, isPayload);
        resolve("已成功添加购物车！")
      }else {
        context.commit(ADD_SHOP_FIRST, payload);
        resolve("已成功添加购物车！")
      }
    })
  }
}
