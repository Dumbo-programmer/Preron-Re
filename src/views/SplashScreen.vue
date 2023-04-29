<template>
  <ion-page>
    <ion-content>
    <br>
    <br>
    <br>
    <br>
    <ion-title>Preron</ion-title>
    <br>
    <br>
    <br>

      <swiper :modules="modules" :options="{autoplay:{delay: 10}, slidesPerView: 1, loop: true, pagination: { el: '.swiper-pagination' } }">
        <swiper-slide>
          <ion-card>
            <img src="./box.png" alt="Slide 1 Image" :style="{ width: '100%', height: 'auto' }">

            <ion-card-header>
              <ion-card-title>Welcome to Preron!</ion-card-title>
            </ion-card-header>
            <ion-card-content>
              <p>The best way to get your goods delivered to your destination with just a tap!</p>
            </ion-card-content>
          </ion-card>
        </swiper-slide>
        <swiper-slide>
         <ion-card>
            <img src="./bike.png" alt="Slide 2 Image" :style="{ width: '100%', height: 'auto' }">
            <ion-card-header>
              <ion-card-title>Efficient Delivery</ion-card-title>
            </ion-card-header>
            <ion-card-content>
              <p>Our delivery service is fast and reliable, ensuring your package arrives on time.</p>
            </ion-card-content>
          </ion-card>
        </swiper-slide>
        <swiper-slide>
          <ion-card>
            <img src="./map.png" alt="Slide 3 Image" :style="{ width: '100%', height: 'auto' }"/>
            <ion-card-header>
              <ion-card-title>Track Your Package</ion-card-title>
            </ion-card-header>
            <ion-card-content>
              <p>Easily track the status of your package with our online tracking system.</p>
            </ion-card-content>
          </ion-card>
        </swiper-slide>
        <div class="swiper-pagination"></div>

      </swiper>

      <ion-button href='/signup' fill="outline" color="primary">Sign Up</ion-button>
      <ion-button href="/login" fill="outline" color="secondary">Log In</ion-button>
    
    </ion-content>
  
  </ion-page>
</template>
<script>
import { Autoplay, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { IonTitle, IonCard, IonCardHeader,
IonCardTitle, IonCardContent, IonContent, 
IonPage, IonButton } from '@ionic/vue';
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'swiper/css';
  import 'swiper/css/autoplay';
  import 'swiper/css/pagination';
  import '@ionic/vue/css/ionic-swiper.css';
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
  export default({
    components: { 
      IonTitle,
      IonCard, 
      IonCardHeader,
      IonCardTitle,
      IonCardContent,
      Swiper, 
      SwiperSlide, 
      IonContent, 
      IonPage,
      IonButton
    },
    setup() {
      return {
        modules: [Autoplay, Pagination],
      };
    },
  });
  firebase.auth().onAuthStateChanged(user => {
  if(user){
console.log(user)
firebase.firestore().collection('users').doc(user.email).get()
  .then(doc => {
    if (doc.exists) {
window.location.href = '/tabs/tab1'
    }else{
firebase.auth().signOut();
    }
  })

  }
})
</script>

<style>
  ion-card img{
    border-radius: 15px;
  }
  ion-title{
 background-clip: text;
  background-image: linear-gradient(to right, #09f1b8, #00a2ff, #ff00d2);
  color: rgb(37, 32, 32);
  font-size: 10vmin;
  font-weight: 600;
  letter-spacing: calc(1em / 9);
  /**padding: calc(--stroke-width / 2);**/
  -webkit-text-stroke-color: transparent;
  -webkit-text-stroke-width: calc(1em / 16);
  }
  body{
    text-align: center;
  }
  ion-card {
    width: 90%;
    border-radius: 15px;
    margin: 0 auto;
    height: 90%;
  }
  ion-button {
    width: 40%;
    margin: 10px auto;
    display: block;
  }
  
  p{
    box-shadow: 1cm grey;

  }
  /*Logo Animation Style*/
  .logo-container {
    position: absolute;
    top: 93vh;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
  }
 
  .logo {
    width: 80px;
    height: 80px;
    animation: logo-spin 2s linear infinite;
  }
  @keyframes logo-spin {
    from {
      transform: rotateX(0deg);
    }
    to {
      transform: rotateY(360deg);
    }
  }
ion-button{
  color: white;
}
  /*End*/
</style>
