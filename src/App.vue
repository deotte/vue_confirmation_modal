<script setup>
  import HelloWorld from './components/HelloWorld.vue'
  import Modal from './components/Modal.vue'
  import TheWelcome from './components/TheWelcome.vue'
  import { useModalStore } from './stores/modal'

  const modalStore = useModalStore();
  const { openModal, setOnConfirm } = modalStore;

  const openModalWithoutAsync = () => {
    openModal();
  }

  const openModalWithAsync = () => {
    openModal({
      headerText: 'Are you sure you want to fetch SW Info?',
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
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
    </div>
  </header>

  <main>
    <TheWelcome />
    <Modal></Modal> <!-- Should be only one -->
    <button @click.prevent="openModalWithoutAsync">Open Modal without Async</button>
    <button @click.prevent="openModalWithAsync">Open Modal with Async</button>
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
