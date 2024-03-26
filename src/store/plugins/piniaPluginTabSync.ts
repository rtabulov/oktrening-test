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

  // console.log('piniaTabSyncPlugin', store.$id);
  const bc = new BroadcastChannel(`pinia-tab-sync:${store.$id}`);

  let isActiveTab = document.visibilityState === 'visible';
  // console.log('tab is active?', isActiveTab);
  document.addEventListener('visibilitychange', () => {
    isActiveTab = document.visibilityState === 'visible';
    // console.log('tab is active?', isActiveTab);
  });

  bc.addEventListener('message', (ev) => {
    if (!isActiveTab) {
      // console.log('received mutation', ev.data.mutation);
      Object.assign(store.$state, ev.data.state);
    }
  });

  store.$subscribe((mutation) => {
    // console.log(mutation, { ...store.$state });
    bc.postMessage({ mutation, state: { ...store.$state } });
  });
}
