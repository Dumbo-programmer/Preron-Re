<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Home</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Home</ion-title>
        </ion-toolbar>
      </ion-header>
      <div v-if="!loaded">

      <!-- Render the skeleton animation while the data is being fetched -->
      <div class="skeleton-container">
        <div class="skeleton-item skeleton-item-1"></div>
<br><br>
<div class="skeleton-item skeleton-item-2"></div>
<br><br>
        <div class="skeleton-item skeleton-item-3"></div>
       <br><br>
        <div class="skeleton-item skeleton-item-4"></div>
        <br><br>
        <div class="skeleton-item skeleton-item-5"></div>

        <!-- Add more skeleton items as needed -->
      </div>
    </div>

      <ion-avatar v-if="loaded">
    <img alt="person" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
  </ion-avatar>
<ion-list v-if="loaded">

  <ion-item>
<ion-label>{{ user.name }}</ion-label>
</ion-item>
<ion-item>
<ion-label>{{ user.phoneNumber }}</ion-label>
</ion-item>
<ion-item>
<ion-label>{{ user.email }}</ion-label>
</ion-item>
<ion-item>
<ion-label class="ion-text-wrap">{{ user.inputStreet }},{{ user.inputHouse }},
   {{ user.inputCity }}, {{ user.inputPost }}
</ion-label>
</ion-item>
<ion-item>
<ion-button @click="logout()" size="default" fill="outline" color="danger">
  <ion-spinner color="danger" v-if="isProcessing"></ion-spinner>
  <span v-else>Logout</span></ion-button>
</ion-item>
</ion-list>
<br>
<br>
<br>
<ion-list v-if="loaded">
  <ion-item>
    <ion-label>
<h2 class="und">Notifications</h2>
</ion-label>
</ion-item>

<ion-item v-if="loaded">
   <ion-card :color=colo v-for="(packages, index) in packages" :key="index">
      <ion-card-header>New Delivery pending({{ packages.route }})
        <ion-card-title>{{ packages.Name }}</ion-card-title>
        <IonIcon
    name="close"
    class="close-button"
    @click="removeNotification(index)"
  ></IonIcon>

      </ion-card-header>
      <ion-card-content>
    <p>Package Type: {{ packages.type }}</p>
    <p class="ion-text-wrap">{{ packages.street }}, House no: {{ packages.house }}, {{ packages.floor }}th floor, {{ packages.city }}, {{ packages.post }}</p>
    <ion-label style="color: aliceblue; font-weight: bold;">Payment Due: {{ packages.due }}tk </ion-label>
  <br>
    <ion-label></ion-label>   
  </ion-card-content>
</ion-card>
</ion-item>
</ion-list>
  </ion-content>

</ion-page>
</template>

<script setup>
import { IonList, IonButton,
  IonLabel, IonAvatar, IonItem, 
  IonPage, IonHeader, IonToolbar,
   IonTitle, IonContent, IonCard, IonCardContent, IonCardTitle, IonCardHeader } from '@ionic/vue';

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
//import axios from 'axios';

//import 'firebase/messaging';
import { defineComponent } from 'vue';
import { IonIcon } from '@ionic/vue';

if(firebase.apps.length === 0) {  
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
/**const messaging = firebase.messaging();

messaging.getToken({ vapidKey: 'BMXNrpArTgs2cB9tp8NR3tzh85dZ3KkvdEnlTerp7e8Ca0GnJBb44z8yVjWOV5woZCv7vwUO4Y5kiu1TLKXTr-I' }).then((token) => {
  console.log('FCM token:', token);
  axios.post('https://fcm.googleapis.com/fcm/send', {
  notification: {
    title: 'Welcome Back!',
    body:'Glad to have you again!'
  },
  to: token
}, {
  headers: {
    'Authorization': 'key=AAAAQDQKhCg:APA91bH8VwI2_8oknkteF80_Bi5rwhZXxz-hOHZ1-oc7m87zTMVIZuAtLnujusU8mQRw1mohdRjuUeS3VSfP7KUuXJ253I34_5ynQesraTRoX9q9JJ-n9yH87SHNpaygtw_WAqiZnXP0',
    'Content-Type': 'application/json'
  }
}).then((response) => {
  console.log('Notification sent successfully:', response);
}).catch((error) => {
  console.log('Error sending notification:', error);
});
}).catch((error) => {
  console.log('Error getting FCM token:', error);
});
**/

</script>

<script>
export default defineComponent({
  components:{
    IonList,
    IonLabel,
    IonAvatar,
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonItem,

  },
  data() {
  return {
    isProcessing: false,
    user: {},
    modal: false,
    colo: 'medium',
    packages: [],
    loaded: false,
  }
},
created() {
  firebase.auth().onAuthStateChanged((user) => {
  if (user) {
firebase.firestore().collection('users').doc(user.email).get()
  .then(doc => {
    if (doc.exists) {
      this.user = doc.data();
 this.loaded = true;

    }
  })
  let ref = firebase.firestore().collection("deliver").where("user", "==", user.email)
  ref.get()
  .then(snapshot => {
    if (!snapshot.empty) {
      this.packages = []

      snapshot.forEach(doc => {
        if(doc.data().status != "done" || doc.data().status != "delivered"){
        console.log(doc.id, " => ", doc.data());
this.packages.push({ id: doc.id, ...doc.data() });
        }
      });
    }
  })
}

  });
/////
if(this.packages.status == "accepted"){
   
///...................///
this.colo = "success"
  }
  ////
  },
  methods: {
    edit(){
  this.modal = true;

    },
      removeNotification(index) {
    this.packages.splice(index, 1);
  },
    logout() {
      this.isProcessing = true;
      setTimeout(() => {
        firebase.auth().signOut().then(function() {
      this.isProcessing = false;
      }).catch(function(error) {
        console.error(error);
      });     
        window.location= "/"
      }, 3000);
    },
save(){
firebase.auth().onAuthStateChanged((user) => {
if(user){
  firebase.firestore().collection('users').doc(user.email).update({
        name: this.user.name,
        phoneNumber: this.user.phoneNumber
    })
    .then(() => { 
        console.log("Document successfully updated!");
        this.modal = false;
    })
}         
})

},

    closeModal() {
    this.modal = false;
  }

/** */
  },
computed:{
}
})
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Work+Sans&display=swap');
  body{
    text-align: center;
    align-items: center;

}
.close-button {
    position: absolute;
    top: 5px;
    right: 5px;
    font-size: 16px;
    color: #888;
    cursor: pointer;
  }

ion-title{
 background-clip: text;
  background-image: linear-gradient(to right, #ffffff, #ffffff);
  /**padding: calc(--stroke-width / 2);**/
 }

  ion-label {
    text-align:  center;
    margin: auto;

  }
  ion-button {
    text-align: center;
    margin: auto;

  }
  .ion-avatar {
  animation: fadeInUp 1s ease-in-out;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
ion-item{
  text-align: center;
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
  ion-card{
    color:aliceblue;
} 
  .skeleton-container {
text-align: center;
padding-top: 8vh;
padding-left: 19vh;
padding-right: 15vh;
  align-items: center;
}

.skeleton-item {
  height: 16px;
  width: 100px;
  margin-right: 8px;
  border-radius: 4px;
  background-color: #eee;
  animation: pulse 1s ease-in-out infinite;
}
ion-card{
background-color: #1876b400;
  border-radius: 16px;
-webkit-backdrop-filter: blur(5px);
border: 1px solid rgb(255, 255, 255);

}

@keyframes pulse {
  0% {
    opacity: 0.6;
  }
  100% {
    opacity: 1;
  }
}
  .und{
  text-decoration: underline;
  font-size: 25px;
}
.ion-card {
  animation: fadeIn 0.8s ease-in-out;
  margin-bottom: 16px;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.close-button {
  animation: fadeIn 0.5s ease-in-out;
}
</style>
