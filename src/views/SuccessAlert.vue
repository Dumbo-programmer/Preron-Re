<template>
  <ion-alert
    :isOpen="isOpen"
    :message="message"
    :buttons="buttons"
    @onDidDismiss="dismissAlert"
  ></ion-alert>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
      message: "",
      buttons: [
        {
          text: "OK",
          handler: this.dismissAlert,
        },
      ],
    };
  },
  methods: {
    showSuccessAlert() {
      this.message = "Your request has been placed successfully!";
      this.isOpen = true;
    },
    dismissAlert() {
      this.isOpen = false;
    },
  },
};
</script>
