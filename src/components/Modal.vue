<script setup>
  import { storeToRefs } from 'pinia';
  import { useModalStore } from '../stores/modal';

  const modalStore = useModalStore();
  const { cancelText, confirmText, headerText, showModal } = storeToRefs(modalStore);
  const { hideModal, confirmModal } = modalStore;
</script>

<template>
  <div class="modal" v-if="showModal">
    <h2>{{ headerText }}</h2>
    <div class="buttons">
      <button @click.prevent="hideModal">{{ cancelText }}</button>
      <button @click.prevent="confirmModal">{{ confirmText }}</button>
    </div>
  </div>
</template>