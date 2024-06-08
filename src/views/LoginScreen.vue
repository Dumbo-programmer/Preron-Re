<template>
    <ion-content>      
      <ion-card>
        <ion-card-header>
          <ion-card-title color="light">Login</ion-card-title>
        </ion-card-header>
        <ion-card-content>
          <form @submit.prevent="login">
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <ion-item>
              <ion-label position="floating">Email</ion-label>
              <ion-input type="email" v-model="email" required></ion-input>
            </ion-item>
            <ion-item>
              <ion-label position="floating">Password</ion-label>
              <ion-input type="password" v-model="password" required></ion-input>
            </ion-item>
            <ion-button color="secondary" fill="outline" :class="{ 'processing': isProcessing }" @click="login" :disabled="!confirm" type="submit" expand="block">
  <ion-spinner v-if="isProcessing"></ion-spinner>
  <span v-else>Login</span>
</ion-button>
          </form> 

        </ion-card-content>  
                 </ion-card>

      <div v-if="error" class="error-message">
  <ion-label color="light">{{ error }}</ion-label>
</div>   
<BackButton />

    </ion-content>
  </template>

<script setup>
import firebase from 'firebase/app'
import 'firebase/auth'
import { IonSpinner, IonCardHeader, IonCardTitle, IonContent, IonButton, IonInput, IonLabel, IonCard, IonCardContent, IonItem } from '@ionic/vue'
import axios from 'axios'
import BackButton from "./BackButton.vue";
if(firebase.apps.length ==0){
  firebase.initializeApp({
  apiKey: "AIzaSyDa4LA1g6SVfiS6nLe_GepR3laqYSjJAgM",
  authDomain: "its-called-god.firebaseapp.com",
  databaseURL: "https://its-called-god-default-rtdb.firebaseio.com",
  projectId: "its-called-god",
  storageBucket: "its-called-god.appspot.com",
  messagingSenderId: "275751011368",
  appId: "1:275751011368:web:a6c77f6b2483e9d255611d",
  measurementId: "G-V1KL2RSV2J"
        })
      }
</script>

<script>
  export default {
    components:{
IonSpinner, IonCardHeader, IonCardTitle, IonContent, IonButton, IonInput, IonLabel, IonCard, IonCardContent, IonItem },
    data() {
      return {
        email: '',
        password: '',
        error: '',
        isProcessing: false
            }
    },
    computed:{
      confirm(){
        return this.email && this.password;
      }
    },
   
    methods: {
   
      login() {
        if (!this.email || !this.password) {
    this.error = 'Please enter both email and password';
    return;
  }else{
        console.log(this.email);
//mail

        this.isProcessing = true;
  firebase.auth().signInWithEmailAndPassword(this.email, this.password)
    .then((user) => {
      this.isProcessing = false;
      const to = this.email;
      const subject = 'Welcome Back!';
      const text = 'Someone logged into your account (hopefully you)';

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
//end
      // Successful login
      console.log(user)
      window.location.href = '/tabs/tab1'
    })
    .catch((error) => {
      this.isProcessing = false;
      // Handle login errors here
      console.log(error);
      this.error = error.message
      console.log(this.email)
      window.location.href = '/signup'

    });
  }
},

    }
  }
  </script>
  <style>
  body{
    text-align: center;
    align-items: center;
}
  ion-card{
    align-items: center;

  }
  .ion-item {
  transition: transform 0.3s, box-shadow 0.3s;
}

.ion-item:focus-within {
  transform: scale(1.03);
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
}
ion-button:hover {
  transform: translateY(-2px);
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
}

.error-message {
  color: red;
  animation: shake 0.5s ease infinite;
}

@keyframes shake {
  0%, 100% {
    transform: translateX(0);
  }
  10%, 30%, 50%, 70%, 90% {
    transform: translateX(-5px);
  }
  20%, 40%, 60%, 80% {
    transform: translateX(5px);
  }
}

  </style>
