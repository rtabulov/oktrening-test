import { useChatStore } from '@/store/chats';
import Vue, { nextTick } from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'hash',
  base: import.meta.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/chats/:chatSlug?',
      name: 'chats',
      component: () => import('../views/ChatView.vue'),
      props: (route) => {
        return {
          chatSlug: route.params.chatSlug,
          chatId: useChatStore().chats.find(
            (user) => user.slug === route.params.chatSlug,
          )?.id,
        };
      },
      beforeEnter: async (to, from, next) => {
        // reject the navigation
        await nextTick();
        const { chats } = useChatStore();
        if (!to.params.chatSlug) {
          return next();
        }

        if (chats.findIndex((chat) => chat.slug === to.params.chatSlug) >= 0) {
          return next();
        }

        return next({
          name: 'not-found',
          params: {
            // @ts-expect-error params can accept string[]
            pathMatch: to.path.substring(1).split('/'),
          },
          query: to.query,
          hash: to.hash,
        });
      },
    },
    {
      // will match everything
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import('../views/NotFoundView.vue'),
    },
  ],
});

export default router;
