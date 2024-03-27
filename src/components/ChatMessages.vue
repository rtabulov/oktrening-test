<script lang="ts">
import type { Message } from '@/store/chats';
import type { PropType } from 'vue';

export default {
  name: 'ChatMessages',
  props: {
    messages: {
      type: Array as PropType<Message[]>,
      required: true,
    },
  },
};
</script>

<template>
  <div></div>
</template>
