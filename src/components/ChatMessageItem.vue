<script lang="ts">
import type { PropType } from 'vue';
import type { Message } from '@/store/chats';
import { format } from 'date-fns';

export default {
  name: 'ChatMessageItem',
  props: {
    message: {
      type: Object as PropType<Message>,
      required: true,
    },
    isSender: {
      type: Boolean,
      default: false,
    },
  },

  methods: {
    formatTime(date: Date) {
      return format(date, 'HH:mm');
    },
  },
};
</script>

<template>
  <div
    class="flex"
    :class="{
      'justify-end': isSender,
    }"
  >
    <p
      class="inline-block max-w-96 rounded-full px-3 py-2"
      :class="{
        'rounded-br-none bg-slate-700': isSender,
        'rounded-bl-none bg-slate-900': !isSender,
      }"
    >
      {{ message.text }}
      <time
        :datetime="message.createdAt.toLocaleString()"
        class="inline-block translate-y-1.5 text-xs text-slate-400"
        :class="{
          'pr-2': isSender,
          'pl-2': !isSender,
        }"
      >
        {{ formatTime(message.createdAt) }}
      </time>
    </p>
  </div>
</template>
