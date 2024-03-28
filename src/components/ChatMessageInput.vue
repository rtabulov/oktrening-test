<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ChatMessageInput',
  emits: {
    submit(text: string) {
      return text.length >= 1;
    },
  },
  data() {
    return {
      text: '',
    };
  },
  methods: {
    onSubmit() {
      this.$emit('submit', this.text);
      this.text = '';
    },
    focus() {
      (this.$refs.input as HTMLInputElement).focus();
    },
  },
});
</script>

<template>
  <form class="bg-slate-900" @submit.prevent="onSubmit">
    <input
      ref="input"
      v-model="text"
      type="text"
      placeholder="Write a message..."
      class="block w-full bg-slate-900 px-5 py-2 text-sm outline-none"
      minlength="1"
      required
    />
  </form>
</template>
