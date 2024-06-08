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

  <ion-item class="glass animate-opacity">
            <ion-label>What do you want to do today?</ion-label>
          </ion-item> 
<ion-grid>
<ion-row>   
<ion-col size="6">      
  <ion-card color="medium" class="animate-card">
  <ion-card-header>
  </ion-card-header>
<ion-button href="tabs/tab4" fill="outline" color="secondary" :disabled="isButtonDisabled">Send</ion-button>

  <ion-card-content>
  I want to send a package
  </ion-card-content>
</ion-card>
</ion-col>

<ion-col size="6">
  <ion-card color="medium" class="animate-card">
  <ion-card-header>
  </ion-card-header>
  <ion-button href="tabs/tab5" :disabled="isButtonDisabled" fill="outline" color="secondary">Receive</ion-button>
  <ion-card-content>
  I want to receive a package
</ion-card-content>
</ion-card>
</ion-col>
</ion-row>
    <p v-if="isButtonDisabled" class="error-text">You cannot place more orders until the current one is completed.</p>

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
  data(){
    return{
    isButtonDisabled: false,
    }
  },
  methods:{
    dismiss() {
        this.$refs.modal.$el.dismiss();
      },
     disableButton() {
      this.isButtonDisabled = true;
    },
    enableButton() {
      this.isButtonDisabled = false;
    },
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

        this.disableButton();

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
  .animate-opacity {
  animation: fade-in 1.5s forwards;
  opacity: 0;
}

.animate-card {
  animation: scaleUp 1.5s forwards;
  transform: scale(0.9);
  transition: transform 0.5s;
}

.error-text {
  animation: fadeInBottom 1.5s forwards;
  opacity: 0;
  margin-top: 10px;
}

@keyframes jumpText {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes scaleUp {
  from {
    transform: scale(0.9);
  }
  to {
    transform: scale(1);
  }
}

@keyframes fadeInBottom {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
