<script setup>
  import { storeToRefs } from 'pinia';
  import { useModalStore } from '../stores/modal';

  const modalStore = useModalStore();
  const { cancelText, confirmText, headerText, showModal } = storeToRefs(modalStore);
  const { hideModal, confirmModal } = modalStore;
</script>

<template>
  <div class="modal" v-if="showModal">
    <div class="content">
      <h2>{{ headerText }}</h2>
      <div class="buttons">
        <button @click.prevent="hideModal" class="cancel">{{ cancelText }}</button>
        <button @click.prevent="confirmModal" class="confirm">{{ confirmText }}</button>
      </div>
    </div>
  </div>
</template>