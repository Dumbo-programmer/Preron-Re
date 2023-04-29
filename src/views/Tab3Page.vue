<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Track Order</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Track Order</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-list>
        <ion-label v-if="!packages">
Nothing to show, <a href="/tabs/tab2">maybe place a delivery ?</a>
        </ion-label>
    <ion-card :color=colo v-for="(packages, index) in packages" :key="index">
      <ion-card-header>
<ion-label style="color: aliceblue;">
        <h1>
        Delivery({{ packages.route }})
        </h1>
        </ion-label>
        <ion-card-title style="color: aliceblue;">Name: {{ packages.Name }}</ion-card-title>
      </ion-card-header>
      <ion-card-content>
     <p style="color: aliceblue;" class="ion-text-wrap">Package Type: {{ packages.type }}</p>
        <p class="ion-text-wrap" style="color: aliceblue;">Address: House no: {{ packages.house }}, {{ packages.floor }}th floor, {{ packages.street }}, {{ packages.city }}, {{ packages.post }}</p>
  <br>
  <ion-footer>
    <ion-row>
      <ion-col center text-center>
        <ion-label style="color: aliceblue; font-weight: bold;">Payment Due: {{ packages.due }}tk</ion-label>
        </ion-col>
        <ion-col center text-center>
        <ion-label v-if="packages.status == 'acceptedbye '" style="color: aliceblue; font-weight: bold;">Status: {{ packages.status }}</ion-label>
        </ion-col>
      <ion-col center text-center>
        <ion-label style="color: aliceblue; font-weight: bold;">Placement Date: {{ packages.date }}</ion-label>   
        </ion-col>
        </ion-row>
        </ion-footer>
  </ion-card-content>

      <!-- <ion-label>Status: {{ packages.status }}</ion-label>-->
    </ion-card>
  </ion-list>

    </ion-content>
  </ion-page>
</template>

<script setup>
import firebase from 'firebase/app';
import 'firebase/auth'
import 'firebase/firestore'
//import axios from 'axios';
//import 'firebase/messaging';

import { mapState } from 'vuex';
import { IonCardTitle, IonFooter,IonRow , IonCol, IonLabel, IonCardContent,
   IonCardHeader, IonCard, IonList,
   IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import { defineComponent } from 'vue';

if(firebase.apps.length === 0){
firebase.initializeApp({
  apiKey: "AIzaSyDa4LA1g6SVfiS6nLe_GepR3laqYSjJAgM",
  authDomain: "its-called-god.firebaseapp.com",
  databaseURL: "https://its-called-god-default-rtdb.firebaseio.com",
  projectId: "its-called-god",
  storageBucket: "its-called-god.appspot.com",
  messagingSenderId: "275751011368",
  appId: "1:275751011368:web:a6c77f6b2483e9d255611d",
  measurementId: "G-V1KL2RSV2J"
});
}
//const messaging = firebase.messaging();

</script>
<script>
export default defineComponent({
  components:{
    IonCardTitle,
    IonCardContent,
    IonCardHeader,
    IonCard,
    IonList,
    IonPage,
    IonToolbar,
    IonHeader,
    IonTitle,
    IonContent,
  },
  computed: {
    ...mapState(['user']),

  
  },
  data() {
    return {
      colo: 'medium',
      packages: [],
    }
  },
  created() {
    firebase.auth().onAuthStateChanged(user => {
    if(user){
      firebase.firestore().collection('deliver').where('user', '==', user.email)
    .onSnapshot(querySnapshot => {
      this.packages = [];
      querySnapshot.forEach(doc => {
        console.log(doc.data())

        if(doc.data().status != "done" || doc.data().status != "delivered"){

        this.packages.push({ id: doc.id, ...doc.data() });
        }
      });
    });
    }
  })
  if(this.packages.status == "accepted"){

///...................///
this.colo = "success"
  }
}
})
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Work+Sans&display=swap');

  body{
    font-family: 'Work Sans', sans-serif;

    text-align: center;
    align-items: center;
}
ion-card{
background-color: #1876b400;
  border-radius: 16px;
-webkit-backdrop-filter: blur(5px);
border: 1px solid rgb(255, 255, 255);

}
</style>
