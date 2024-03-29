<script lang="ts">
import { useUserStore } from '@/store/user';
import { useChatStore } from '@/store/chats';
import { mapStores } from 'pinia';
import ChatSelect from '@/components/ChatSelect.vue';
import ChatMessages from '@/components/ChatMessages.vue';
import ChatSelectPrompt from '@/components/ChatSelectPrompt.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ChatView',
  components: {
    ChatSelect,
    ChatMessages,
    ChatSelectPrompt,
  },
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
  computed: {
    ...mapStores(useUserStore, useChatStore),

    messages() {
      const { selectedUserId } = this.userStore;
      if (!selectedUserId) {
        return [];
      }

      return this.chatsStore.messages.filter((message) => {
        const temp = [message.from, message.to];
        return temp.includes(this.chatId) && temp.includes(selectedUserId);
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
});
</script>

<template>
  <div class="container">
    <div class="flex h-full min-h-0 flex-col gap-px sm:max-h-full sm:flex-row">
      <div
        class="w-full sm:w-80"
        :class="{
          'hidden sm:block': chatId,
        }"
      >
        <ChatSelect v-bind="$props" />
      </div>
      <div
        class="max-h-full min-h-0 grow"
        :class="{
          block: chatId,
          'hidden sm:block': !chatId,
        }"
      >
        <div class="text-right sm:hidden">
          <router-link to="/chats">
            <i class="text-2xl">←</i>
            back to chats
          </router-link>
        </div>
        <ChatMessages v-if="chatId" :messages="messages" :chat-id="chatId" />
        <ChatSelectPrompt v-else />
      </div>
    </div>
  </div>
</template>
