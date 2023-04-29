<template>

  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Send/Receive</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Send/Receive</ion-title>
        </ion-toolbar>
      </ion-header>
<!--Modal Start-->

<!--Modal end-->
<ion-row class="ion-align-items-center ion-justify-content-center" style="height: 60vh;">

<ion-col>

        <ion-item class="glass"> 
    <ion-label>What do you want to do today?</ion-label>

  </ion-item> 
<ion-grid>
<ion-row>   
<ion-col size="6">      
<ion-card color="medium">
  <ion-card-header>
  </ion-card-header>
<ion-button href="tabs/tab4" fill="outline" color="secondary">Send</ion-button>

  <ion-card-content>
  I want to send a package
  </ion-card-content>
</ion-card>
</ion-col>

<ion-col size="6">
<ion-card color="medium">
  <ion-card-header>
  </ion-card-header>
  <ion-button href="tabs/tab5" fill="outline" color="secondary">Receive</ion-button>
  <ion-card-content>
  I want to receive a package
</ion-card-content>
</ion-card>
</ion-col>
</ion-row>
</ion-grid>
</ion-col>
</ion-row>
</ion-content>
  </ion-page>
</template>

<script setup>
import { IonRow, IonGrid, IonItem, IonButton, IonCardContent, IonCardHeader, IonCard, IonLabel, IonCol, IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';

import firebase from 'firebase/app';
import 'firebase/auth'
import 'firebase/firestore'
</script>
<script>
export default {
  components:{
    IonButton,
    IonItem,
    IonCardContent,
    IonCard,
    IonTitle,
    IonPage,
    IonHeader,
    IonToolbar,
    IonContent,
    IonCol,
    IonLabel,
    IonRow,
    IonGrid
  },
  methods:{
    dismiss() {
        this.$refs.modal.$el.dismiss();
      }
  },
  created() {
    firebase.auth().onAuthStateChanged(user => {
    if(user){
      firebase.firestore().collection('deliver').where('user', '==', user.email)
    .onSnapshot(querySnapshot => {
      querySnapshot.forEach(doc => {
        console.log(doc.data())

        if(doc.data().status != "done" || doc.data().status != "delivered"){
console.log('button disable')
        }
      });
    });
    }
  })

}
};

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

</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Work+Sans&display=swap');

ion-item{
  text-align: center;
}

ion-card-title{
  color:aliceblue;
}
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
.glass{
  box-shadow: 10px 10px 25px -10px rgba(255, 255, 255, 0.425);
background: rgba(211, 255, 253, 0.2);
border-radius: 16px;
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(5px);
-webkit-backdrop-filter: blur(5px);
border: 1px solid rgba(255, 255, 255, 0.07);
}
ion-card{
  text-align: center;
margin-left: auto;
margin-right: auto;
}
ion-card-content{
  color:aliceblue;
}
ion-label {
    text-align: center;
    margin: auto;

  }
  ion-button {
    text-align: center;
    margin: auto;

  }

</style>
