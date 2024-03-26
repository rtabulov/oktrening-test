import Vue from 'vue';
import { PiniaVuePlugin } from 'pinia';

import App from './App.vue';
import router from './router';

import './assets/main.css';
import { piniaStore } from './store';

Vue.use(PiniaVuePlugin);

new Vue({
  router,
  pinia: piniaStore,
  render: (h) => h(App),
}).$mount('#app');
