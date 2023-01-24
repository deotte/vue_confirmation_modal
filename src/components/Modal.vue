<script setup>
  import { useModalStore } from '../stores/modal';

  const modalStore = useModalStore();

  console.log(modalStore.showModal);
</script>

<template>
  <div class="modal">

  </div>
</template>