import { nanoid } from 'nanoid';
import type {
  PiniaPluginContext,
  SubscriptionCallbackMutation,
  StateTree,
} from 'pinia';

declare module 'pinia' {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  export interface DefineStoreOptionsBase<S, Store> {
    // state keys for sync
    tabSync?: string[];
  }
}

interface StateMutation {
  mutation: SubscriptionCallbackMutation<StateTree>;
  patch: Patch;
}

type Patch = Partial<StateTree>;

export function piniaPluginTabSync({
  store,
  options: { tabSync },
}: PiniaPluginContext) {
  if (!tabSync) {
    return;
  }

  const bc = new BroadcastChannel(`pinia-tab-sync:${store.$id}`);

  bc.addEventListener('message', (ev: MessageEvent<StateMutation>) => {
    store.$patch(ev.data.patch);
  });

  store.$subscribe((mutation) => {
    const patch = tabSync.reduce((acc, key) => {
      acc[key] = store.$state[key];
      return acc;
    }, {} as Patch);
    const stateMutation: StateMutation = { mutation, patch };
    if (document.hasFocus()) {
      bc.postMessage(stateMutation);
    }
  });
}
