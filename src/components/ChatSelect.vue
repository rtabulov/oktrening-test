<script lang="ts">
import { mapStores } from 'pinia';
import { useChatStore } from '@/store/chats';
import ChatBar from './ChatBar.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ChatSelect',
  props: {
    chatSlug: {
      type: String,
      default: null,
    },
    chatId: {
      type: Number,
      default: null,
    },
  },
  components: {
    ChatBar,
  },
  computed: {
    ...mapStores(useChatStore),
  },
});
</script>

<template>
  <div class="flex flex-col bg-slate-900">
    <ChatBar
      v-for="chat in chatsStore.chats"
      :key="chat.id"
      :chat="chat"
      :active="chatId === chat.id"
    />
  </div>
</template>
