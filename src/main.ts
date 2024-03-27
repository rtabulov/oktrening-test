import Vue from 'vue';
import { PiniaVuePlugin } from 'pinia';
import App from './App.vue';
import { piniaStore } from './store';
import router from './router';

import './assets/main.scss';

Vue.use(PiniaVuePlugin);

new Vue({
  pinia: piniaStore,
  router,
  render: (h) => h(App),
}).$mount('#app');
