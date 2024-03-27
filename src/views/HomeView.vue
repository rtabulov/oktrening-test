<script lang="ts">
import UserSelect from '@/components/UserSelect.vue';
import { useUserStore } from '@/store/user';
import { toRef } from 'vue';

export default {
  components: {
    UserSelect,
  },
  setup() {
    const store = useUserStore();

    return {
      selectedUserId: toRef(store, 'selectedUserId'),
    };
  },
  watch: {
    selectedUserId: {
      immediate: true,
      handler(userId) {
        if (userId) {
          this.$router.push('/chats');
        }
      },
    },
  },
};
</script>

<template>
  <div class="container">
    <UserSelect />
  </div>
</template>
