(self["webpackChunkpreyron_re"]=self["webpackChunkpreyron_re"]||[]).push([[975],{3658:(e,t,l)=>{"use strict";var n=l(9781),o=l(3157),a=TypeError,r=Object.getOwnPropertyDescriptor,s=n&&!function(){if(void 0!==this)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(e){return e instanceof TypeError}}();e.exports=s?function(e,t){if(o(e)&&!r(e,"length").writable)throw a("Cannot set read only .length");return e.length=t}:function(e,t){return e.length=t}},7207:e=>{var t=TypeError,l=9007199254740991;e.exports=function(e){if(e>l)throw t("Maximum allowed index exceeded");return e}},3157:(e,t,l)=>{var n=l(4326);e.exports=Array.isArray||function(e){return"Array"==n(e)}},7658:(e,t,l)=>{"use strict";var n=l(2109),o=l(7908),a=l(6244),r=l(3658),s=l(7207),u=l(7293),i=u((function(){return 4294967297!==[].push.call({length:4294967296},1)})),d=function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(e){return e instanceof TypeError}},c=i||!d();n({target:"Array",proto:!0,arity:1,forced:c},{push:function(e){var t=o(this),l=a(t),n=arguments.length;s(l+n);for(var u=0;u<n;u++)t[l]=arguments[u],l++;return r(t,l),l}})},2975:(e,t,l)=>{"use strict";l.r(t),l.d(t,{default:()=>v});l(7658);var n=l(6252),o=l(2262),a=l(3577),r=l(1163),s=l(5503),u=(l(6170),l(2211),l(8945));l(3606);const i=e=>((0,n.dD)("data-v-786e2fe4"),e=e(),(0,n.Cn)(),e),d={key:0},c=i((()=>(0,n._)("div",{class:"skeleton-container"},[(0,n._)("div",{class:"skeleton-item skeleton-item-1"}),(0,n._)("br"),(0,n._)("br"),(0,n._)("div",{class:"skeleton-item skeleton-item-2"}),(0,n._)("br"),(0,n._)("br"),(0,n._)("div",{class:"skeleton-item skeleton-item-3"}),(0,n._)("br"),(0,n._)("br"),(0,n._)("div",{class:"skeleton-item skeleton-item-4"}),(0,n._)("br"),(0,n._)("br"),(0,n._)("div",{class:"skeleton-item skeleton-item-5"})],-1))),m=[c],w=i((()=>(0,n._)("img",{alt:"person",src:"https://ionicframework.com/docs/img/demos/avatar.svg"},null,-1))),f=i((()=>(0,n._)("br",null,null,-1))),p=i((()=>(0,n._)("br",null,null,-1))),g=i((()=>(0,n._)("br",null,null,-1))),h=i((()=>(0,n._)("h2",{class:"und"},"Notifications",-1))),_={class:"ion-text-wrap"},k=i((()=>(0,n._)("br",null,null,-1))),U=(0,n.aZ)({components:{IonList:r.q_,IonLabel:r.Q$,IonAvatar:r.BJ,IonPage:r._i,IonHeader:r.Gu,IonToolbar:r.sr,IonTitle:r.wd,IonContent:r.W2,IonItem:r.Ie},data(){return{user:{},modal:!1,packages:[],loaded:!1}},created(){s.Z.auth().onAuthStateChanged((e=>{if(e){s.Z.firestore().collection("users").doc(e.email).get().then((e=>{e.exists&&(this.user=e.data(),console.log(e.data()),this.loaded=!0)}));let t=s.Z.firestore().collection("deliver").where("user","==",e.email);t.get().then((e=>{e.empty||(this.packages=[],e.forEach((e=>{"delivered"!=e.data().status&&(console.log(e.id," => ",e.data()),this.packages.push({id:e.id,...e.data()}))})))}))}else console.log("User is not signed in."),window.location="/"}))},methods:{edit(){this.modal=!0},logout(){s.Z.auth().signOut().then((function(){})).catch((function(e){console.error(e)}))},save(){s.Z.auth().onAuthStateChanged((e=>{e&&s.Z.firestore().collection("users").doc(e.email).update({name:this.user.name,phoneNumber:this.user.phoneNumber}).then((()=>{console.log("Document successfully updated!"),this.modal=!1}))}))},closeModal(){this.modal=!1}},computed:{cardClass(){return"not"!==this.packages.status?"warning":"danger"}}}),S=Object.assign(U,{__name:"Tab1Page",setup(e){0===s.Z.apps.length&&s.Z.initializeApp({apiKey:"AIzaSyDa4LA1g6SVfiS6nLe_GepR3laqYSjJAgM",authDomain:"its-called-god.firebaseapp.com",databaseURL:"https://its-called-god-default-rtdb.firebaseio.com",projectId:"its-called-god",storageBucket:"its-called-god.appspot.com",messagingSenderId:"275751011368",appId:"1:275751011368:web:a6c77f6b2483e9d255611d",measurementId:"G-V1KL2RSV2J"});const t=s.Z.messaging();return t.getToken({vapidKey:"BMXNrpArTgs2cB9tp8NR3tzh85dZ3KkvdEnlTerp7e8Ca0GnJBb44z8yVjWOV5woZCv7vwUO4Y5kiu1TLKXTr-I"}).then((e=>{console.log("FCM token:",e),u.Z.post("https://fcm.googleapis.com/fcm/send",{notification:{title:"New document created",body:"A new document has been created."},to:"USER_FCM_TOKEN"},{headers:{Authorization:"key=YOUR_SERVER_KEY","Content-Type":"application/json"}}).then((e=>{console.log("Notification sent successfully:",e)})).catch((e=>{console.log("Error sending notification:",e)}))})).catch((e=>{console.log("Error getting FCM token:",e)})),(e,t)=>((0,n.wg)(),(0,n.j4)((0,o.SU)(r._i),null,{default:(0,n.w5)((()=>[(0,n.Wm)((0,o.SU)(r.Gu),null,{default:(0,n.w5)((()=>[(0,n.Wm)((0,o.SU)(r.sr),null,{default:(0,n.w5)((()=>[(0,n.Wm)((0,o.SU)(r.wd),null,{default:(0,n.w5)((()=>[(0,n.Uk)("Home")])),_:1})])),_:1})])),_:1}),(0,n.Wm)((0,o.SU)(r.W2),{fullscreen:!0},{default:(0,n.w5)((()=>[(0,n.Wm)((0,o.SU)(r.Gu),{collapse:"condense"},{default:(0,n.w5)((()=>[(0,n.Wm)((0,o.SU)(r.sr),null,{default:(0,n.w5)((()=>[(0,n.Wm)((0,o.SU)(r.wd),{size:"large"},{default:(0,n.w5)((()=>[(0,n.Uk)("Home")])),_:1})])),_:1})])),_:1}),e.loaded?(0,n.kq)("",!0):((0,n.wg)(),(0,n.iD)("div",d,m)),e.loaded?((0,n.wg)(),(0,n.j4)((0,o.SU)(r.BJ),{key:1},{default:(0,n.w5)((()=>[w])),_:1})):(0,n.kq)("",!0),e.loaded?((0,n.wg)(),(0,n.j4)((0,o.SU)(r.q_),{key:2},{default:(0,n.w5)((()=>[(0,n.Wm)((0,o.SU)(r.Ie),null,{default:(0,n.w5)((()=>[(0,n.Wm)((0,o.SU)(r.Q$),null,{default:(0,n.w5)((()=>[(0,n.Uk)((0,a.zw)(e.user.name),1)])),_:1})])),_:1}),(0,n.Wm)((0,o.SU)(r.Ie),null,{default:(0,n.w5)((()=>[(0,n.Wm)((0,o.SU)(r.Q$),null,{default:(0,n.w5)((()=>[(0,n.Uk)((0,a.zw)(e.user.phoneNumber),1)])),_:1})])),_:1}),(0,n.Wm)((0,o.SU)(r.Ie),null,{default:(0,n.w5)((()=>[(0,n.Wm)((0,o.SU)(r.Q$),null,{default:(0,n.w5)((()=>[(0,n.Uk)((0,a.zw)(e.user.email),1)])),_:1})])),_:1}),(0,n.Wm)((0,o.SU)(r.Ie),null,{default:(0,n.w5)((()=>[(0,n.Wm)((0,o.SU)(r.Q$),{class:"ion-text-wrap"},{default:(0,n.w5)((()=>[(0,n.Uk)((0,a.zw)(e.user.inputStreet)+","+(0,a.zw)(e.user.inputHouse)+", "+(0,a.zw)(e.user.inputCity)+", "+(0,a.zw)(e.user.inputPost),1)])),_:1})])),_:1}),(0,n.Wm)((0,o.SU)(r.Ie),null,{default:(0,n.w5)((()=>[(0,n.Wm)((0,o.SU)(r.YG),{onClick:t[0]||(t[0]=t=>e.logout()),size:"default",fill:"outline",color:"danger"},{default:(0,n.w5)((()=>[(0,n.Uk)("Logout")])),_:1})])),_:1})])),_:1})):(0,n.kq)("",!0),f,p,g,e.loaded?((0,n.wg)(),(0,n.j4)((0,o.SU)(r.q_),{key:3},{default:(0,n.w5)((()=>[(0,n.Wm)((0,o.SU)(r.Ie),null,{default:(0,n.w5)((()=>[(0,n.Wm)((0,o.SU)(r.Q$),null,{default:(0,n.w5)((()=>[h])),_:1})])),_:1}),e.loaded?((0,n.wg)(),(0,n.j4)((0,o.SU)(r.Ie),{key:0},{default:(0,n.w5)((()=>[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.packages,((e,t)=>((0,n.wg)(),(0,n.j4)((0,o.SU)(r.PM),{color:"medium",key:t},{default:(0,n.w5)((()=>[(0,n.Wm)((0,o.SU)(r.Zi),null,{default:(0,n.w5)((()=>[(0,n.Uk)("New Delivery pending("+(0,a.zw)(e.route)+") ",1),(0,n.Wm)((0,o.SU)(r.Dq),null,{default:(0,n.w5)((()=>[(0,n.Uk)((0,a.zw)(e.Name),1)])),_:2},1024)])),_:2},1024),(0,n.Wm)((0,o.SU)(r.FN),null,{default:(0,n.w5)((()=>[(0,n._)("p",null,"Package Type: "+(0,a.zw)(e.type),1),(0,n._)("p",_,(0,a.zw)(e.street)+", House no: "+(0,a.zw)(e.house)+", "+(0,a.zw)(e.floor)+"th floor, "+(0,a.zw)(e.city)+", "+(0,a.zw)(e.post),1),(0,n.Wm)((0,o.SU)(r.Q$),{style:{color:"aliceblue","font-weight":"bold"}},{default:(0,n.w5)((()=>[(0,n.Uk)("Payment Due: "+(0,a.zw)(e.due)+"tk ",1)])),_:2},1024),k,(0,n.Wm)((0,o.SU)(r.Q$))])),_:2},1024)])),_:2},1024)))),128))])),_:1})):(0,n.kq)("",!0)])),_:1})):(0,n.kq)("",!0)])),_:1})])),_:1}))}});var y=l(3744);const b=(0,y.Z)(S,[["__scopeId","data-v-786e2fe4"]]),v=b}}]);
//# sourceMappingURL=975-legacy.1e942eb1.js.map