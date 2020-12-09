import Vue from 'vue'
import App from './App.vue'
import router from "./router"
import store from "./store";
import Toast from "components/common/toast";
import FastClick from "fastclick";
import VueLazyload from "vue-lazyload";

Vue.use(VueLazyload, {
  loading: require("./assets/img/common/placeholder.png")
})
Vue.use(Toast);

Vue.config.productionTip = false;
Vue.prototype.$bus = new Vue();

FastClick.attach(document.body);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
