import {request} from "./request";

export function getDetailData(iid) {
  return request({
    url: "detail",
    params: {
      iid
    }
  })
}

export class Goods {
  constructor(itemInfo, columns, services) {
    this.title = itemInfo.title;
    this.price = itemInfo.price;
    this.oldPrice = itemInfo.oldPrice;
    this.discountDesc = itemInfo.discountDesc;
    this.discountBgColor = itemInfo.discountBgColor;
    this.columns = columns;
    this.services = services;
  }
}

export class Shop {
  constructor(shopInfo) {
    this.cGoods = shopInfo.cGoods;
    this.cSells = shopInfo.cSells;
    this.name = shopInfo.name;
    this.score = shopInfo.score;
    this.shopLogo = shopInfo.shopLogo;
    this.shopUrl = shopInfo.shopUrl;
  }
}

export class Params {
  constructor(itemParams) {
    this.image = itemParams.info.images ? itemParams.info.images[0] : null;
    this.set = itemParams.info.set;
    this.tables = itemParams.rule.tables;
  }
}
