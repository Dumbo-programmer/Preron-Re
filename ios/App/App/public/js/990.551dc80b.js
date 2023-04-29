"use strict";(self["webpackChunkpreyron_re"]=self["webpackChunkpreyron_re"]||[]).push([[990],{8990:(e,t,r)=>{r.r(t),r.d(t,{createSwipeBackGesture:()=>a});var n=r(6587),o=r(545),s=r(6515);
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const a=(e,t,r,a,i)=>{const c=e.ownerDocument.defaultView,h=(0,o.i)(e),u=e=>{const t=50,{startX:r}=e;return h?r>=c.innerWidth-t:r<=t},l=e=>h?-e.deltaX:e.deltaX,d=e=>h?-e.velocityX:e.velocityX,p=e=>u(e)&&t(),k=e=>{const t=l(e),r=t/c.innerWidth;a(r)},w=e=>{const t=l(e),r=c.innerWidth,o=t/r,s=d(e),a=r/2,h=s>=0&&(s>.2||t>a),u=h?1-o:o,p=u*r;let k=0;if(p>5){const e=p/Math.abs(s);k=Math.min(e,540)}i(h,o<=0?.01:(0,n.h)(0,o,.9999),k)};return(0,s.A)({el:e,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:p,onStart:r,onMove:k,onEnd:w})}}}]);
//# sourceMappingURL=990.551dc80b.js.map