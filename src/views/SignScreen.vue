<template>
  <ion-content>
    <ion-card>
      <ion-card-header>
        <ion-card-title color="light">Sign Up</ion-card-title>
      </ion-card-header>
      <ion-card-content>
        <form @submit.prevent="signup">
          <ion-item>
            <ion-label position="floating">Name</ion-label>
            <ion-input type="text" v-model="name" placeholder="Arham Zarif" required></ion-input>
          </ion-item>
          <ion-item>
            <ion-label position="floating">Phone Number</ion-label>
            <ion-input type="tel" v-model="phoneNumber" placeholder="01*" required></ion-input>
          </ion-item>
          <ion-item>
            <ion-label position="floating">Email</ion-label>
            <ion-input type="email" v-model="email" placeholder="example@gmail.com" required></ion-input>
          </ion-item>
          <ion-item>
            <ion-label position="floating">City</ion-label>
            <ion-input v-model="inputCity" placeholder="Dhaka" disabled></ion-input>
          </ion-item>
          <ion-item>
            <ion-label position="floating">PostCode</ion-label>
            <ion-input v-model="inputPost" placeholder="1207" required></ion-input>
          </ion-item>
          <ion-item>
            <ion-label position="floating">StreetLine</ion-label>
            <ion-input v-model="inputStreet" placeholder="Xyz housing 4th Road" required></ion-input>
          </ion-item>
          <ion-item>
            <ion-label position="floating">House No.</ion-label>
            <ion-input v-model="inputHouse" type="number" placeholder="D-Block 46" required></ion-input>
          </ion-item>
          <ion-item>
            <ion-label position="floating">Password</ion-label>
            <ion-input type="password" v-model="password" required></ion-input>
          </ion-item>
          <ion-button :class="{ 'processing': isProcessing }" @click="signup" :disabled="!confirm" type="button" fill="outline" expand="block">
            <ion-spinner v-if="isProcessing"></ion-spinner>
            <span v-else>Sign Up</span>
          </ion-button>
        </form>
      </ion-card-content>
    </ion-card>
    <div>
      <BackButton />
    
    </div>
    <ion-label color="light">{{ error }}</ion-label>
  </ion-content>
</template>
<script setup>
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import BackButton from "./BackButton.vue";
import { IonSpinner, IonCardHeader, IonCardTitle, IonContent, IonButton, IonInput, IonLabel, IonCard, IonCardContent, IonItem } from '@ionic/vue'
import axios from 'axios'
</script>
<script>
if (firebase.apps.length === 0) {
  firebase.initializeApp({
    apiKey: "AIzaSyDa4LA1g6SVfiS6nLe_GepR3laqYSjJAgM",
    authDomain: "its-called-god.firebaseapp.com",
    databaseURL: "https://its-called-god-default-rtdb.firebaseio.com",
    projectId: "its-called-god",
    storageBucket: "its-called-god.appspot.com",
    messagingSenderId: "275751011368",
    appId: "1:275751011368:web:a6c77f6b2483e9d255611d",
    measurementId: "G-V1KL2RSV2J",
  })
}
firebase.auth().onAuthStateChanged(user => {
  if (user) {
    window.location.href = '/tabs/tab1'
  }
})
export default {
  components: { IonCardHeader, IonCardTitle, IonSpinner, IonContent, IonButton, IonInput, IonLabel, IonCard, IonCardContent, IonItem },
  data() {
    return {
      name: "",
      dob: "",
      phoneNumber: "",
      email: "",
      inputCity: 'Dhaka',
      inputHouse: '',
      inputPost: '',
      inputStreet: '',
      password: "",
      isProcessing: false,
      error: ""
    }
  },
computed:{
confirm(){

if(this.inputPost.length == 4 && this.phoneNumber.length == 11){
  this.error = ""
  return this.name && this.password && this.phoneNumber && this.email && this.inputCity && this.inputHouse && this.inputPost && this.inputStreet;
}
if(this.password < 5){
this.error = "Please write a stronger password"
return false;
}
if(this.inputPost.length > 4){
this.error = "Please write a valid Post Code"
  return false;
}

if(this.phoneNumber.length > 0 && this.phoneNumber.length != 11){
this.error = "Please write a valid phone number"
  return false;
}
return false;
}
  },
methods:{
    signup() {
      this.isProcessing = true;
        firebase.firestore().collection('users').doc(this.email).set({
          name: this.name,
          phoneNumber: this.phoneNumber,
          email: this.email,
          inputCity: this.inputCity,
          inputHouse: this.inputHouse,
          inputPost: this.inputPost,
          inputStreet: this.inputStreet,
        }, { merge: true })
        firebase
          .auth()
          .createUserWithEmailAndPassword(this.email, this.password)
          .then(() => {
            const to = this.email;
            const subject = 'Welcome!';
            const text = 'We\'re glad to have you, now let\'s send some parcels!';

            axios.post('https://server.programmerboi.repl.co/send', {
              to: to,
              subject: subject,
              text: text
            })
              .then(response => {
                console.log(response.data);
              })
              .catch(error => {
                this.error = error
                console.log(error);
              });
            // Sign up successful
            console.log("working")
            this.isProcessing = false;
            // Navigate to home page
            window.location.href = "/tabs/tab1"
          })
          .catch((error) => {
            this.isProcessing = false;
            console.log(error.message)
            this.error = error.message;
          });

    },
  }
}
</script>
<style>
.map {
  width: 200px;
  height: 200px
}

body {
  text-align: center;
  align-items: center;
}
</style>
