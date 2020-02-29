import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import utils from './common/js/utils';

Vue.config.productionTip = false

/* 在 vue 中添加功能 */
Vue.prototype.$utils = utils;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
