<script setup>
  import { storeToRefs } from 'pinia';
  import { useModalStore } from '../stores/modal';

  const modalStore = useModalStore();
  const { closeText, confirmText, headerText } = storeToRefs(modalStore);
  const { hideModal, onConfirm } = modalStore;
</script>

<template>
  <div class="modal" v-if="showModal">
    <h2>{{ headerText }}</h2>
    <div class="buttons">
      <button @click.prevent="hideModal">{{ closeText }}</button>
      <button @click.prevent="onConfirm">{{ confirmText }}</button>
    </div>
  </div>
</template>