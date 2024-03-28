import type {
  PiniaPluginContext,
  SubscriptionCallbackMutation,
  StateTree,
} from 'pinia';

declare module 'pinia' {
  export interface DefineStoreOptionsBase<S, Store> {
    // allow defining a number of ms for any of the actions
    tabSync?: string[];
  }
}

interface StateMutation {
  mutation: SubscriptionCallbackMutation<StateTree>;
  patch: Patch;
}

type Patch = Record<string, any>;

export function piniaPluginTabSync({ store, options }: PiniaPluginContext) {
  if (!options.tabSync) {
    return;
  }

  const bc = new BroadcastChannel(`pinia-tab-sync:${store.$id}`);

  let isActiveTab = document.visibilityState === 'visible';
  document.addEventListener('visibilitychange', () => {
    isActiveTab = document.visibilityState === 'visible';
  });

  bc.addEventListener('message', (ev: MessageEvent<StateMutation>) => {
    if (!isActiveTab) {
      store.$patch(ev.data.patch);
    }
  });

  store.$subscribe((mutation) => {
    const patch = options.tabSync!.reduce((acc, key) => {
      acc[key] = store.$state[key];
      return acc;
    }, {} as Patch);
    const stateMutation: StateMutation = { mutation, patch };
    bc.postMessage(stateMutation);
  });
}
