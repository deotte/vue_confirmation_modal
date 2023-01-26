<script setup>
  import Modal from './components/Modal.vue'
  import { useModalStore } from './stores/modal'

  const modalStore = useModalStore();
  const { openModal, setOnConfirm } = modalStore;

  const openModalWithoutAsync = () => {
    openModal();
  }

  const openModalWithAsync = () => {
    openModal({
      headerText: 'Call Star Wars API?',
      confirmText: 'Yes',
      onConfirm: callStarWarsApi
    })
  }

  const callStarWarsApi = async () => {
    const httpResponse = await fetch("https://swapi.dev/api/people/1");
    const jsonResponse = await httpResponse.json();
    console.log(jsonResponse);
  }
</script>

<template>
  <main>
    <Modal></Modal> <!-- Should be only one -->

    <div class="header">
      <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="100" height="100" />
      <h2>Vue 3 Modal Example</h2>
    </div>
    <div class="button-wrapper">
      <button @click.prevent="openModalWithoutAsync">Open Modal without Async</button>
      <button @click.prevent="openModalWithAsync">Open Modal with Async</button>
    </div>
  </main>
</template>
