<script lang="ts">
import type { Message } from '@/store/chats';
import { type PropType, defineComponent } from 'vue';
import { mapStores } from 'pinia';
import { useChatStore } from '@/store/chats';
import { useUserStore } from '@/store/user';
import ChatMessageInput from './ChatMessageInput.vue';
import ChatMessageItem from './ChatMessageItem.vue';

export default defineComponent({
  name: 'ChatMessages',
  components: {
    ChatMessageInput,
    ChatMessageItem,
  },
  props: {
    messages: {
      type: Array as PropType<Message[]>,
      required: true,
    },
    chatId: {
      type: Number,
      required: true,
    },
  },
  computed: {
    ...mapStores(useChatStore, useUserStore),
  },
  watch: {
    chatId: {
      immediate: true,
      async handler() {
        await this.$nextTick();
        (this.$refs.input as InstanceType<typeof ChatMessageInput>).focus();
      },
    },
  },
  methods: {
    onSubmit(text: string) {
      this.chatsStore.sendMessage({ text, to: this.chatId });
    },
  },
});
</script>

<template>
  <div class="flex h-full max-h-full min-h-0 grow flex-col">
    <div
      class="flex max-h-full min-h-0 grow flex-col justify-end gap-1 overflow-y-auto p-2 text-sm"
    >
      <ChatMessageItem
        v-for="message in messages"
        :key="message.id"
        :message="message"
        :is-sender="message.from === userStore.selectedUserId"
      />
    </div>
    <div>
      <ChatMessageInput @submit="onSubmit" />
    </div>
  </div>
</template>
