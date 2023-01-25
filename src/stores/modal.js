import { defineStore } from "pinia";

export const useModalStore = defineStore('modal', {
  state: () => ({
    cancelText: 'Cancel',
    confirmText: 'Confirm',
    headerText: 'Are you sure?',
    onConfirm: null,
    showModal: false
  }),
  actions: {
    async confirmModal() {
      if (typeof this.onConfirm === 'function') {
        await this.onConfirm();
        this.hideModal();
      } else {
        this.hideModal();
      }
    },
    hideModal() {
      this.showModal = false;
      this.resetProperties();
    },
    openModal(modalProperties) {
      if (this.showModal === false) {
        if (modalProperties) {
          const propertiesToChange = ['cancelText', 'confirmText', 'headerText', 'onConfirm'];

          propertiesToChange.forEach((property) => {
            if (modalProperties[property]) {
              this[property] = modalProperties[property];
            }
          })
        }

        this.showModal = true;
      }
    },
    resetProperties() {
      this.onConfirm = null;
      this.cancelText = 'Cancel';
      this.confirmText = 'Confirm';
      this.headerText = 'Are you sure?';
    }
  }
})