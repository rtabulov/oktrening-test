<script lang="ts">
import { useUserStore } from '@/store/user';
import { useChatStore } from '@/store/chats';
import { mapStores } from 'pinia';
import ChatSelect from '@/components/ChatSelect.vue';
import ChatMessages from '@/components/ChatMessages.vue';
import ChatSelectPrompt from '@/components/ChatSelectPrompt.vue';

export default {
  name: 'ChatView',
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
    ChatSelect,
    ChatMessages,
    ChatSelectPrompt,
  },
  computed: {
    ...mapStores(useUserStore, useChatStore),

    messages() {
      if (!this.userStore.selectedUserId) {
        return [];
      }

      return this.chatsStore.messages.filter((message) => {
        const temp = [message.from, message.to];
        return (
          temp.includes(this.chatId) &&
          temp.includes(this.userStore.selectedUserId!)
        );
      });
    },
  },
  watch: {
    'userStore.selectedUserId': {
      immediate: true,
      handler(userId) {
        if (!userId) {
          this.$router.push('/');
        }
      },
    },
  },
};
</script>

<template>
  <div class="container">
    <div class="flex gap-px">
      <div class="w-80">
        <ChatSelect v-bind="$props" />
      </div>
      <div class="grow">
        <ChatMessages v-if="chatId" :messages="messages" :chatId="chatId" />
        <ChatSelectPrompt v-else />
      </div>
    </div>
  </div>
</template>
