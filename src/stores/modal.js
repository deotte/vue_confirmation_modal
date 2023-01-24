import { defineStore } from "pinia";

export const useModalStore = defineStore('modal', {
  state: () => ({
    onConfirm: null,
    showModal: false
  }),
  actions: {
    hideModal() {
      this.showModal = false;
    },
    openModal() {
      this.showModal = true;
    },
    setOnConfirm(value) {
      this.onConfirm = value;
    }
  }
})