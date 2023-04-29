"use strict";(self["webpackChunkpreyron_re"]=self["webpackChunkpreyron_re"]||[]).push([[775],{8775:(e,t,n)=>{n.r(t),n.d(t,{startInputShims:()=>D});var o=n(4074),r=n(6587);
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const i=new WeakMap,s=(e,t,n,o=0,r=!1)=>{i.has(e)!==n&&(n?d(e,t,o,r):l(e,t))},a=e=>e===e.getRootNode().activeElement,d=(e,t,n,o=!1)=>{const r=t.parentNode,s=t.cloneNode(!1);s.classList.add("cloned-input"),s.tabIndex=-1,o&&(s.disabled=!0),r.appendChild(s),i.set(e,s);const a=e.ownerDocument,d="rtl"===a.dir?9999:-9999;e.style.pointerEvents="none",t.style.transform=`translate3d(${d}px,${n}px,0) scale(0)`},l=(e,t)=>{const n=i.get(e);n&&(i.delete(e),n.remove()),e.style.pointerEvents="",t.style.transform=""},c=(e,t,n)=>{if(!n||!t)return()=>{};const o=n=>{a(t)&&s(e,t,n)},i=()=>s(e,t,!1),d=()=>o(!0),l=()=>o(!1);return(0,r.a)(n,"ionScrollStart",d),(0,r.a)(n,"ionScrollEnd",l),t.addEventListener("blur",i),()=>{(0,r.b)(n,"ionScrollStart",d),(0,r.b)(n,"ionScrollEnd",l),t.addEventListener("ionBlur",i)}},u="input, textarea, [no-blur], [contenteditable]",m=()=>{let e=!0,t=!1;const n=document,o=()=>{t=!0},i=()=>{e=!0},s=o=>{if(t)return void(t=!1);const r=n.activeElement;if(!r)return;if(r.matches(u))return;const i=o.target;i!==r&&(i.matches(u)||i.closest(u)||(e=!1,setTimeout((()=>{e||r.blur()}),50)))};return(0,r.a)(n,"ionScrollStart",o),n.addEventListener("focusin",i,!0),n.addEventListener("touchend",s,!1),()=>{(0,r.b)(n,"ionScrollStart",o,!0),n.removeEventListener("focusin",i,!0),n.removeEventListener("touchend",s,!1)}},v=.3,f=(e,t,n)=>{var o;const r=null!==(o=e.closest("ion-item,[ion-item]"))&&void 0!==o?o:e;return p(r.getBoundingClientRect(),t.getBoundingClientRect(),n,e.ownerDocument.defaultView.innerHeight)},p=(e,t,n,o)=>{const r=e.top,i=e.bottom,s=t.top,a=Math.min(t.bottom,o-n),d=s+15,l=.75*a,c=l-i,u=d-r,m=Math.round(c<0?-c:u>0?-u:0),f=Math.min(m,r-s),p=Math.abs(f),h=p/v,w=Math.min(400,Math.max(150,h));return{scrollAmount:f,scrollDuration:w,scrollPadding:n,inputSafeY:4-(r-d)}},h=(e,t,n,o,i,s=!1)=>{let d;const l=e=>{d=(0,r.p)(e)},c=l=>{if(!d)return;const c=(0,r.p)(l);E(6,d,c)||a(t)||w(e,t,n,o,i,s)};return e.addEventListener("touchstart",l,{capture:!0,passive:!0}),e.addEventListener("touchend",c,!0),()=>{e.removeEventListener("touchstart",l,!0),e.removeEventListener("touchend",c,!0)}},w=async(e,t,n,i,a,d=!1)=>{if(!n&&!i)return;const l=f(e,n||i,a);if(n&&Math.abs(l.scrollAmount)<4)t.focus();else if(s(e,t,!0,l.inputSafeY,d),t.focus(),(0,r.r)((()=>e.click())),"undefined"!==typeof window){let r;const i=async()=>{void 0!==r&&clearTimeout(r),window.removeEventListener("ionKeyboardDidShow",a),window.removeEventListener("ionKeyboardDidShow",i),n&&await(0,o.c)(n,0,l.scrollAmount,l.scrollDuration),s(e,t,!1,l.inputSafeY),t.focus()},a=()=>{window.removeEventListener("ionKeyboardDidShow",a),window.addEventListener("ionKeyboardDidShow",i)};if(n){const e=await(0,o.g)(n),s=e.scrollHeight-e.clientHeight;if(l.scrollAmount>s-e.scrollTop)return"password"===t.type?(l.scrollAmount+=50,window.addEventListener("ionKeyboardDidShow",a)):window.addEventListener("ionKeyboardDidShow",i),void(r=setTimeout(i,1e3))}i()}},E=(e,t,n)=>{if(t&&n){const o=t.x-n.x,r=t.y-n.y,i=o*o+r*r;return i>e*e}return!1},y="$ionPaddingTimer",g=e=>{const t=document,n=t=>{b(t.target,e)},o=e=>{b(e.target,0)};return t.addEventListener("focusin",n),t.addEventListener("focusout",o),()=>{t.removeEventListener("focusin",n),t.removeEventListener("focusout",o)}},b=(e,t)=>{var n,r;if("INPUT"!==e.tagName)return;if(e.parentElement&&"ION-INPUT"===e.parentElement.tagName)return;if("ION-SEARCHBAR"===(null===(r=null===(n=e.parentElement)||void 0===n?void 0:n.parentElement)||void 0===r?void 0:r.tagName))return;const i=(0,o.a)(e);if(null===i)return;const s=i[y];s&&clearTimeout(s),t>0?i.style.setProperty("--keyboard-offset",`${t}px`):i[y]=setTimeout((()=>{i.style.setProperty("--keyboard-offset","0px")}),120)},S=!0,L=!0,D=(e,t)=>{const n=document,i="ios"===t,s="android"===t,a=e.getNumber("keyboardHeight",290),d=e.getBoolean("scrollAssist",!0),l=e.getBoolean("hideCaretOnScroll",i),u=e.getBoolean("inputBlurring",i),v=e.getBoolean("scrollPadding",!0),f=Array.from(n.querySelectorAll("ion-input, ion-textarea")),p=new WeakMap,w=new WeakMap,E=async e=>{await new Promise((t=>(0,r.c)(e,t)));const t=e.shadowRoot||e,n=t.querySelector("input")||t.querySelector("textarea"),i=(0,o.a)(e),u=i?null:e.closest("ion-footer");if(!n)return;if(i&&l&&!p.has(e)){const t=c(e,n,i);p.set(e,t)}const m="date"===n.type||"datetime-local"===n.type;if(!m&&(i||u)&&d&&!w.has(e)){const t=h(e,n,i,u,a,s);w.set(e,t)}},y=e=>{if(l){const t=p.get(e);t&&t(),p.delete(e)}if(d){const t=w.get(e);t&&t(),w.delete(e)}};u&&S&&m(),v&&L&&g(a);for(const o of f)E(o);n.addEventListener("ionInputDidLoad",(e=>{E(e.detail)})),n.addEventListener("ionInputDidUnload",(e=>{y(e.detail)}))}}}]);
//# sourceMappingURL=775-legacy.861a414e.js.map