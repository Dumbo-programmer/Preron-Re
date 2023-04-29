importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js');
if(firebase.apps.length === 0) {  

firebase.initializeApp({
    apiKey: "AIzaSyDa4LA1g6SVfiS6nLe_GepR3laqYSjJAgM",
    authDomain: "its-called-god.firebaseapp.com",
    databaseURL: "https://its-called-god-default-rtdb.firebaseio.com",
    projectId: "its-called-god",
    storageBucket: "its-called-god.appspot.com",
    messagingSenderId: "275751011368",
    appId: "1:275751011368:web:a6c77f6b2483e9d255611d",
    measurementId: "G-V1KL2RSV2J",});
}
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log('Received background message', payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.icon,
    click_action: payload.notification.click_action
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
