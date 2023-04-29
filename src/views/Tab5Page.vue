<template>
    <ion-page>
      <ion-header>
    <ion-toolbar>
      <ion-title>Receive Package</ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content :fullscreen="true">
    <ion-header collapse="condense">
      <ion-toolbar>
        <ion-title size="large">Receive Package</ion-title>
      </ion-toolbar>
    </ion-header>
<ion-list>
<!--Data Input-->
  <ion-item v-if="showInput">
  <ion-label position="floating">Sender Name:</ion-label>
  <ion-input v-if="showInput" placeholder="Zaim Islam" v-model="inputName" required></ion-input>
</ion-item>

<ion-item v-if="showInput">
  <ion-label position="floating">Sender Phone Number:</ion-label>
  <ion-input v-if="showInput" v-model="inputPhone" placeholder="01*" required></ion-input>
</ion-item>
<ion-item v-if="showInput">
  <ion-label position="floating">Sender City:</ion-label>
  <ion-input  v-if="showInput" v-model="inputCity"  placeholder="Dhaka" disabled></ion-input>
</ion-item>
<ion-item v-if="showInput">
  <ion-label position="floating">Sender PostCode:</ion-label>
  <ion-input  v-if="showInput" v-model="inputPost" placeholder="1207" required></ion-input>
</ion-item>
<ion-item v-if="showInput">
  <ion-label position="floating">Sender StreetLine:</ion-label>
  <ion-input  v-if="showInput" v-model="inputStreet" placeholder="Xyz area road 1" required></ion-input>
</ion-item>
<ion-item v-if="showInput">
  <ion-label position="floating">Sender House No. :</ion-label>
  <ion-input v-if="showInput" v-model="inputHouse" placeholder="D-Block 46" required></ion-input>
</ion-item>
<ion-item v-if="showInput">
  <ion-label position="floating">Sender House Floor No. :</ion-label>
  <ion-input v-if="showInput" v-model="inputFloor" type="number" placeholder="2" required></ion-input>
</ion-item>


<!--Payment Input-->
  <ion-label v-if="paymentInput" position="floating">Package Type:</ion-label>

  <ion-radio-group v-model="packageOption" >
<ion-item v-if="paymentInput">
  <ion-radio color="primary" v-bind:value="small"></ion-radio> 
  <ion-label> Small(under 500g) </ion-label>
</ion-item>
<ion-item v-if="paymentInput">
  <ion-radio color="primary" v-bind:value="medium"></ion-radio>
  <ion-label> Medium (under 1kg) </ion-label>
</ion-item>
<ion-item v-if="paymentInput">
  <ion-radio color="primary" v-bind:value="large"></ion-radio>
  <ion-label> Large (under 3kg) </ion-label>
</ion-item>
</ion-radio-group>
<!---->
<br>
  <ion-label color="light" v-if="paymentInput" position="floating">Delivery Charge: {{ del }}</ion-label>
  <br>
  <br>
  <ion-label color="light" v-if="paymentInput" position="floating">Packaging: {{pkgchar}}</ion-label>
<br>  
<br>

<ion-label color="success"  v-if="paymentInput" position="floating">Total: {{ sum }} </ion-label>
<br>  
<ion-item v-if="paymentInput">
<ion-checkbox v-model="unpacked">
</ion-checkbox>
<ion-label>Needs Packaging(Fragile)</ion-label>
</ion-item>
<br>
<ion-label v-if="paymentInput" position="floating">Payment Method:</ion-label>
<ion-radio-group v-model="paymentOption">
<ion-item v-if="paymentInput">
<ion-radio color="primary" v-bind:value='cash'></ion-radio>
<ion-label> Cash </ion-label>
</ion-item>

</ion-radio-group>

<!---->
<ion-button expand="block" fill="outline" v-if="paymentInput" @click="sendData" :disabled="!confirm"    :class="{ 'processing': isProcessing }">
<ion-spinner v-if="isProcessing"></ion-spinner>
  <span v-else>Confirm</span>
</ion-button> 
<!---->

<ion-button v-if="showInput" fill="outline" @click="next" expand="block" :disabled="!allInputsFilled">Next</ion-button> 
</ion-list>
<ion-alert
    :is-open="show"
    header="Request received"
    message="Your package delivery request has been received"
    @ion-alert-did-dismiss="dismissAlert"
  >
    <ion-button @click="dismissAlert">OK</ion-button>
  </ion-alert>
  <ion-label color="light">{{ error }}</ion-label>

  </ion-content>

</ion-page>
</template>

<script setup>
//import Vue from 'vue';
//import SuccessAlert from './SuccessAlert.vue';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'
import { IonRadioGroup, IonAlert, IonRadio, IonButton, IonCheckbox, IonList, IonLabel, IonInput, IonItem, IonPage, IonHeader, IonToolbar, IonTitle, IonContent} from '@ionic/vue';
//import { GmapMap, GmapMarker } from 'vue2-google-maps'


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
<script>


export default {
components:{
  IonAlert,
  IonButton,
  IonList,
  IonLabel,
  IonInput,
  IonItem,
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonRadio,
  IonCheckbox,
},  
data() {
  return {
    small: 'small',
    medium: 'medium',
    large: 'large',
    cash: 'cash',
    address: '',
    inputName: '',
    inputPhone: '',
    inputCity: 'Dhaka',
    inputFloor: '',
    inputHouse: '',
    inputPost: '',
    inputStreet: '',
    inputUser: '',
    chk: false,
    show: false,
    error: '',
    showInput: true,
    paymentInput: false,
    paymentOption: '',
    pkgchar: '$0',
    packageOption: '',
    selected: '',
    unpacked: false,
    due: '',
    isProcessing: false,
  }
},
computed: {
  allInputsFilled() {
    if(this.inputPost.length == 4 && this.inputPhone.length == 11 && this.inputStreet.length > 5){

    return this.inputName && this.inputPhone && this.inputCity && this.inputFloor && this.inputHouse && this.inputPost;
    }
    if(!this.paymentInput){

    this.error = "Please fill up the form correctly"
    }
    return false;
  },
  confirm(){
return this.paymentOption && this.packageOption;
    },
  del(){
if(this.packageOption == "small"){
  this.selected = 'small'
 return "$50"
}else if(this.packageOption == "medium"){
  this.selected = 'medium'

  return "$100"
}else if(this.packageOption == "large"){
  this.selected = 'large'

return "$150"
}
return "0";
  },
  sum() {
    switch (this.packageOption) {
      case 'small':
        if(!this.unpacked){
                  this.pkgchar = '$0'

          this.due = '50';
        return '$50';
    }else{
              this.pkgchar = '$30'

     this.due = '80';
      return '$80';

    }
      case 'medium':
        if(!this.unpacked){
          this.due = '100';
        this.pkgchar = '$0'

        return '$100';
    }else{
              this.pkgchar = '$30'

      this.due = '130';
        return '$130'
    }
      case 'large':
      if(!this.unpacked){
        this.due = '150';
                this.pkgchar = '$0'

        return '$150';
      }else{
        this.due = '180';
        this.pkgchar = '$30'

        return '$180';
     
      }
      default:
        return "Please choose "
    }

  }
},
  methods:{
next(){
console.log("Next")
this.showInput = false;
this.paymentInput = true;
},
  async sendData(){
    this.isProcessing = true;
      firebase.auth().onAuthStateChanged(user => {
        if(user){
          let dateObj = new Date();
        let Currentdate = (dateObj.getUTCFullYear()) + "/" + (dateObj.getMonth() + 1)+ "/" + (dateObj.getUTCDate());

      const db = firebase.firestore();
db.collection("deliver").doc(this.inputName).set({
      Name: this.inputName,
      phone: this.inputPhone,
      city: this.inputCity,
      floor: this.inputFloor,
      house: this.inputHouse,
      post: this.inputPost,
      street: this.inputStreet,
      payment: this.paymentOption,
      due: this.due,
      status: 'not',
      date: Currentdate,
      type: this.selected,
      route: 'receive',
      user: user.email

}, {merge: true}).then(() =>{
 
  console.log("Successful")
//this.show=true;
console.log(this.paymentOption)
this.isProcessing = false
window.location.href = '/tabs/tab3'

})
        }
      })
  },
  dismissAlert() {
    this.show = false;
  }
}
}
</script>

<style>
ion-label{
color:aliceblue;
}
ion-button{
color: aliceblue;
}
body{
  text-align: center;
  align-items: center;
}



ion-title{
 background-clip: text;
  background-image: linear-gradient(to right, #ffffff, #ffffff);
  /**padding: calc(--stroke-width / 2);**/
 }

</style>
