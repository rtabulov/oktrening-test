<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ChatMessageInput',
  data() {
    return {
      text: '',
    };
  },
  emits: {
    submit(text: string) {
      return text.length >= 1;
    },
  },
  methods: {
    onSubmit() {
      this.$emit('submit', this.text);
      this.text = '';
    },
  },
});
</script>

<template>
  <form class="bg-slate-900" @submit.prevent="onSubmit">
    <input
      v-model="text"
      type="text"
      placeholder="Write a message..."
      class="block w-full bg-slate-900 px-5 py-2 text-sm outline-none"
      minlength="1"
      required
    />
  </form>
</template>
