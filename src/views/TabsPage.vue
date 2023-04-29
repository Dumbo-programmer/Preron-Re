<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="tab1" href="/tabs/tab1">
          <ion-icon :icon="homeOutline" />
          <ion-label>Home</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab2" href="/tabs/tab2">
          <ion-icon :icon="sendOutline"></ion-icon>
          <ion-label>Send/Receive</ion-label>
        </ion-tab-button>
        <ion-tab-button tab="tab3" href="/tabs/tab3">
          <ion-icon :icon="cubeOutline" />
          <ion-label>Track Order</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script setup>
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet } from '@ionic/vue';
import { sendOutline, cubeOutline, homeOutline} from 'ionicons/icons';
</script>
<script>
export default {
  components: {
    IonPage,
    IonTabButton,
    IonTabs,
    IonLabel,
    IonIcon,
    IonRouterOutlet
  }
}
</script>
<style></style>
