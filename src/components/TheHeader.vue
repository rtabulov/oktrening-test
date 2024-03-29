<script lang="ts">
import { defineComponent } from 'vue';
import BaseLink from './BaseLink.vue';
import { useChatStore } from '@/store/chats';
import { mapStores } from 'pinia';

export default defineComponent({
  name: 'TheHeader',
  components: {
    BaseLink,
  },
  computed: {
    ...mapStores(useChatStore),
  },
  methods: {
    clearMessages() {
      this.chatsStore.clearMessages();
    },
  },
});
</script>

<template>
  <header class="container py-4">
    <div class="flex flex-wrap items-center justify-between gap-4">
      <BaseLink class="text-2xl !text-white" to="/">
        Chat app for Oktrening
      </BaseLink>
      <nav class="flex gap-4">
        <BaseLink to="/">Home</BaseLink>
        <BaseLink to="/about">About</BaseLink>
        <BaseLink href="https://github.com/rtabulov/oktrening-test">
          Source code
        </BaseLink>
        <BaseLink class="hidden sm:block" href="https://t.me/rtabulov">
          Contact me
        </BaseLink>
        <button
          class="text-red-600 hover:text-red-800"
          @click="clearMessages()"
        >
          Clear messages
        </button>
      </nav>
    </div>
  </header>
</template>
