<script lang="ts">
import { defineComponent, type PropType } from 'vue';
import { mapStores } from 'pinia';
import { useChatStore, type Chat } from '@/store/chats';
import { formatDistanceToNow } from 'date-fns';

export default defineComponent({
  name: 'ChatBar',
  props: {
    chat: {
      type: Object as PropType<Chat>,
      required: true,
    },
    active: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    ...mapStores(useChatStore),
  },
  methods: {
    formatDistanceToNow,
  },
});
</script>

<template>
  <div
    class="p-2 transition-colors hover:bg-slate-800"
    :class="{
      '!bg-slate-700': active,
    }"
  >
    <RouterLink :to="`/chats/${chat.slug}`" class="flex gap-4">
      <div class="h-12 w-12 shrink-0 overflow-hidden rounded-full">
        <img :src="chat.avatar" :alt="chat.name" />
      </div>
      <div class="flex min-w-0 grow flex-col">
        <p class="flex items-center justify-between">
          <span class="min-w-0 truncate font-medium">{{ chat.name }}</span>
          <time
            v-if="chat.lastMessage"
            class="text-sm text-slate-400"
            :datetime="chat.lastMessage.createdAt.toLocaleString()"
          >
            {{ formatDistanceToNow(chat.lastMessage.createdAt) }}
          </time>
        </p>
        <p
          v-if="chat.lastMessage"
          class="max-w-fit truncate text-sm text-slate-400"
        >
          {{ chat.lastMessage.text }}
        </p>
      </div>
    </RouterLink>
  </div>
</template>
