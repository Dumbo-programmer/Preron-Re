import { createApp } from 'vue'
import App from './App.vue'
import router from './router';

import { IonicVue } from '@ionic/vue';

/* Core CSS required for Ionic components to work properly */
import '@ionic/vue/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/float-elements.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/text-transformation.css';
import '@ionic/vue/css/flex-utils.css';
import '@ionic/vue/css/display.css';

/* Theme variables */
import './theme/variables.css';
/**
import firebase from 'firebase/app';
import 'firebase/messaging';


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
}**/



const app = createApp(App)
  .use(IonicVue)
  .use(router);

router.isReady().then(() => {
  app.mount('#app');
});

/**
const messaging = firebase.messaging();

Notification.requestPermission().then((permission) => {
  if (permission === 'granted') {
    console.log('Notification permission granted.')
    // You can now send notifications to the user
  } else {
    console.log('Unable to get permission to notify.')
  }
})

messaging.getToken({ vapidKey: 'BMXNrpArTgs2cB9tp8NR3tzh85dZ3KkvdEnlTerp7e8Ca0GnJBb44z8yVjWOV5woZCv7vwUO4Y5kiu1TLKXTr-I' }).then((token) => {
  console.log('FCM token:', token);
  
}).catch((error) => {
  console.log('Error getting FCM token:', error);
});**/
