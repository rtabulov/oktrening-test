<script lang="ts">
import UserSelect from '@/components/UserSelect.vue';
import { useUserStore } from '@/store/user';
import { mapStores } from 'pinia';

export default {
  name: 'HomeView',
  components: {
    UserSelect,
  },
  computed: {
    ...mapStores(useUserStore),
  },
  watch: {
    'userStore.selectedUserId': {
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
