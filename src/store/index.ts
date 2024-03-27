import { createPinia } from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
import { piniaPluginTabSync } from './plugins/piniaPluginTabSync';

export const piniaStore = createPinia()
  .use(piniaPluginPersistedstate)
  .use(piniaPluginTabSync);
