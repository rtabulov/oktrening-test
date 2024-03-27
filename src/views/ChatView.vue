<script lang="ts">
import { useUserStore } from '@/store/user';
import { useChatStore } from '@/store/chats';
import { mapStores } from 'pinia';
import ChatSelect from '@/components/ChatSelect.vue';

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
  },
  computed: {
    ...mapStores(useUserStore, useChatStore),

    messages() {
      return this.chatsStore.messages.filter((message) => {
        return (
          message.from === this.userStore.selectedUserId &&
          message.to === this.chatId
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
    <div class="flex">
      <div class="max-w-80">
        <ChatSelect v-bind="$props" />
      </div>
      <div>
        {{ messages }}
        {{ { chatId } }}
      </div>
    </div>
  </div>
</template>
