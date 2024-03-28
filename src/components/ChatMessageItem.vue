<script lang="ts">
import { defineComponent, type PropType } from 'vue';
import type { Message } from '@/store/chats';
import { format } from 'date-fns';

export default defineComponent({
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
});
</script>

<template>
  <div
    class="flex"
    :class="{
      'justify-end': isSender,
    }"
  >
    <p
      class="relative inline-block max-w-xl rounded-3xl pb-2 pl-3 pt-2"
      :class="{
        'rounded-br-none bg-slate-700 pr-12': isSender,
        'rounded-bl-none bg-slate-900 pr-14': !isSender,
      }"
    >
      {{ message.text }}
      <time
        :datetime="message.createdAt.toLocaleString()"
        class="absolute bottom-1 right-2 inline-block text-xs text-slate-400"
        :class="{
          'pr-0.5': !isSender,
        }"
      >
        {{ formatTime(message.createdAt) }}
      </time>
    </p>
  </div>
</template>
