"use strict";(self["webpackChunktest"]=self["webpackChunktest"]||[]).push([[164],{1936:function(e,s,n){n.r(s),n.d(s,{default:function(){return K}});var t=n(4108),a=n(9096);function i(e,s,n,i,o,l){const r=(0,t.E1)("SwiperMain");return(0,t.Wz)(),(0,t.An)("section",{id:"main-page","data-theme":"white",style:(0,a.MN)(`background-image: url(${o.image1})`)},[(0,t.K2)(r,{slides:o.visuals},null,8,["slides"])],4)}var o=n(8800);const l={class:"slogan-area"},r={class:"slogan"},c={class:"linkto"},u={class:"img-area"},d={class:"img"},m=["src"],p={class:"slide-controller"},g=(0,t.QD)("i",null,null,-1),v=(0,t.QD)("span",{class:"blind"},"prev",-1),y=[g,v],b=(0,t.QD)("i",null,null,-1),w=(0,t.QD)("span",{class:"blind"},"next",-1),S=[b,w];function h(e,s,n,i,o,g){const v=(0,t.E1)("router-link"),b=(0,t.E1)("swiper-slide"),w=(0,t.E1)("swiper");return(0,t.Wz)(),(0,t.An)(t.ae,null,[(0,t.K2)(w,{class:(0,a.WN)(["mySwiper",{moveStart:i.moveStart,moveEnd:!i.moveStart,up:!i.direction,down:i.direction}]),modules:i.modules,direction:"vertical",allowTouchMove:!1,"slides-per-view":1,"space-between":0,a11y:!0,loop:!0,speed:i.speed,draggable:!0,observer:!0,updateOnWindowResize:!0,mousewheel:!0,autoplay:{delay:3e3,disableOnInteraction:!1},pagination:{clickable:!0,bulletElement:"button"},onSwiper:i.onSwiper,onTransitionStart:i.transitionStart,onTransitionEnd:i.transitionEnd,onTouchEnd:i.touchMove},{default:(0,t.Ql)((()=>[((0,t.Wz)(!0),(0,t.An)(t.ae,null,(0,t.mi)(n.slides,((e,s)=>((0,t.Wz)(),(0,t.Az)(b,{key:e,virtualIndex:s},{default:(0,t.Ql)((()=>[(0,t.QD)("div",l,[(0,t.QD)("div",r,[((0,t.Wz)(!0),(0,t.An)(t.ae,null,(0,t.mi)(e.slogan,(e=>((0,t.Wz)(),(0,t.An)("strong",{key:e},[(0,t.QD)("span",null,(0,a.WA)(e),1)])))),128))]),(0,t.QD)("div",c,[(0,t.K2)(v,{to:"/#"},{default:(0,t.Ql)((()=>[(0,t.mY)("View Project")])),_:1})])]),(0,t.QD)("div",u,[(0,t.QD)("div",d,[(0,t.QD)("img",{src:e.img},null,8,m)])])])),_:2},1032,["virtualIndex"])))),128))])),_:1},8,["class","modules","speed","onSwiper","onTransitionStart","onTransitionEnd","onTouchEnd"]),(0,t.QD)("div",p,[(0,t.QD)("button",{type:"button",class:"btn_prev",onClick:s[0]||(s[0]=e=>i.mySwiper.slidePrev())},y),(0,t.QD)("button",{type:"button",class:"btn_next",onClick:s[1]||(s[1]=e=>i.mySwiper.slideNext())},S)])],64)}var f=n(2500),D=n(5576),E=n(64),Q={components:{Swiper:D.wx,SwiperSlide:D.Ky},props:{slides:Object},setup(){let e=(0,f.IL)();const s=(0,f.IL)(650),n=(0,f.IL)(!1),t=(0,f.IL)(!0),a=(0,f.IL)(0),i=s=>{e.value=s,s.emit("transitionEnd"),setTimeout((()=>{r(s)}),1)},o=e=>{n.value=!0,t.value=a.value>e.translate,a.value=e.translate,setTimeout((()=>{r(e)}),1)},l=()=>{n.value=!1},r=e=>{const{slides:s,activeIndex:n,previousIndex:t}=e;try{s.forEach(((e,s)=>{e.classList.remove("custom-prev"),e.classList.remove("custom-next"),e.classList.remove("custom-beforeIdx"),s===n?e.classList.add("custom-active"):s<n?e.classList.add("custom-prev"):e.classList.add("custom-next"),s===t&&e.classList.add("custom-beforeIdx")}))}catch(a){console.log(a)}},c=(e,s)=>{console.log(e,s)};return{mySwiper:e,onSwiper:i,transitionEnd:l,transitionStart:o,modules:[E.Ko,E.eM,E.gV,E.gb],speed:s,moveStart:n,direction:t,touchMove:c}}},I=n(4100);const k=(0,I.c)(Q,[["render",h]]);var L=k,x=n.p+"img/visual-2024-happy-new-goods.3f294ec7.jpg",A=n.p+"img/visual-golden-time-year-end-party.d99f1108.jpg",T=n.p+"img/visual-hyundaicard-my-company.515ab248.jpg",j=n.p+"img/visual-tvn-drama-voice-season4.fa7b7ae7.jpg",C=n.p+"img/visual-amorepacific.425dd304.jpg",M=n.p+"img/visual-hyundai-n-brand.a1eea71a.jpg",W=n.p+"img/visual-culture.b4c76034.jpg",z=n.p+"img/visual-company-relocation.74764533.jpg",N={mixins:[o.c],components:{SwiperMain:L},data(){return{image1:x,visuals:[{url:"",img:x,slogan:["2024","Happy","New","Goods"]},{url:"",img:A,slogan:["Golden","Time","Year-end","Party"]},{url:"",img:T,slogan:["HYUNDAICARD","My","Company"]},{url:"",img:j,slogan:["TVN","Drama","Voice","Season4"]},{url:"",img:C,slogan:["AMOREPACIFIC"]},{url:"",img:M,slogan:["Hyundai","N","Brand"]},{url:"",img:W,slogan:["Culture"]},{url:"",img:z,slogan:["Company","Relocation"]}]}},async mounted(){document.documentElement.classList.add("rock-scroll"),this.$store.commit("setFooter",!1),this.PageReady()},unmounted(){document.documentElement.classList.remove("rock-scroll"),this.$store.commit("setFooter",!0)}};const _=(0,I.c)(N,[["render",i],["__scopeId","data-v-297e71b1"]]);var K=_}}]);
//# sourceMappingURL=164.b67f48a8.js.map