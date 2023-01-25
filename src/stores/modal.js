import { defineStore } from "pinia";

export const useModalStore = defineStore('modal', {
  state: () => ({
    closeText: 'Cancel',
    confirmText: 'Confirm',
    headerText: 'Are you sure?',
    onConfirm: null,
    showModal: false
  }),
  actions: {
    async confirmModal() {
      if (typeof this.onConfirm === 'function') {
        await this.onConfirm();
      } else {
        this.hideModal();
      }
    },
    hideModal() {
      this.showModal = false;
    },
    openModal(modalProperties) {
      const propertiesToChange = ['closeText', 'confirmText', 'headerText', 'onConfirm'];

      propertiesToChange.forEach((property) => {
        if (modalProperties.property !== 'undefined') {
          this.property = modalProperties.property;
        }
      });

      this.showModal = true;
    },
    setOnConfirm(value) {
      this.onConfirm = value;
    }
  }
})