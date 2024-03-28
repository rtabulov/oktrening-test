import type { PiniaPluginContext } from 'pinia';

declare module 'pinia' {
  export interface DefineStoreOptionsBase<S, Store> {
    // allow defining a number of ms for any of the actions
    tabSync?: boolean;
  }
}

export function piniaPluginTabSync({ store, options }: PiniaPluginContext) {
  if (!options.tabSync) {
    return;
  }

  const bc = new BroadcastChannel(`pinia-tab-sync:${store.$id}`);

  let isActiveTab = document.visibilityState === 'visible';
  document.addEventListener('visibilitychange', () => {
    isActiveTab = document.visibilityState === 'visible';
  });

  bc.addEventListener('message', (ev) => {
    if (!isActiveTab) {
      Object.assign(store.$state, ev.data.state);
    }
  });

  store.$subscribe((mutation) => {
    bc.postMessage({ mutation, state: store.$state });
  });
}
