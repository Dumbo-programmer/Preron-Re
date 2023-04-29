<template>
  <ion-app>
    <ion-router-outlet />
  </ion-app>
</template>

<script setup>
import { IonApp, IonRouterOutlet } from '@ionic/vue';
import { defineComponent } from 'vue';

</script>

<script>
export default defineComponent({
  name: 'App',
  components: {
    IonApp,
    IonRouterOutlet,
  },
});


</script>