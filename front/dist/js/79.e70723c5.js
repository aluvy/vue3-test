"use strict";(self["webpackChunktest"]=self["webpackChunktest"]||[]).push([[79],{5264:function(e,s,n){n.r(s),n.d(s,{default:function(){return _}});var a=n(4108);const t={id:"main-page","data-theme":"light"};function i(e,s,n,i,l,o){const r=(0,a.E1)("SwiperMain");return(0,a.Wz)(),(0,a.An)("section",t,[(0,a.K2)(r,{slides:l.visuals},null,8,["slides"])])}var l=n(3848),o=n(9096);const r={class:"slogan-area"},c={class:"slogan"},u={class:"linkto"},d={class:"img-area"},m={class:"slide-controller"},p=(0,a.QD)("i",{class:"fa fa-angle-left"},null,-1),g=(0,a.QD)("span",{class:"blind"},"prev",-1),v=[p,g],b=(0,a.QD)("i",{class:"fa fa-angle-right"},null,-1),y=(0,a.QD)("span",{class:"blind"},"next",-1),f=[b,y];function w(e,s,n,t,i,l){const p=(0,a.E1)("router-link"),g=(0,a.E1)("swiper-slide"),b=(0,a.E1)("swiper");return(0,a.Wz)(),(0,a.An)(a.ae,null,[(0,a.K2)(b,{class:(0,o.WN)(["mySwiper",{moveStart:t.moveStart,moveEnd:!t.moveStart,up:!t.direction,down:t.direction}]),modules:t.modules,direction:"vertical",allowTouchMove:!1,"slides-per-view":1,"space-between":0,a11y:!0,loop:!0,speed:t.speed,draggable:!0,observer:!0,updateOnWindowResize:!0,mousewheel:!0,autoplay:{delay:3e3,disableOnInteraction:!1},pagination:{clickable:!0,bulletElement:"button"},onSwiper:t.onSwiper,onTransitionStart:t.transitionStart,onTransitionEnd:t.transitionEnd},{default:(0,a.Ql)((()=>[((0,a.Wz)(!0),(0,a.An)(a.ae,null,(0,a.mi)(n.slides,((e,s)=>((0,a.Wz)(),(0,a.Az)(g,{key:e,virtualIndex:s},{default:(0,a.Ql)((()=>[(0,a.QD)("div",r,[(0,a.QD)("div",c,[((0,a.Wz)(!0),(0,a.An)(a.ae,null,(0,a.mi)(e.slogan,(e=>((0,a.Wz)(),(0,a.An)("strong",{key:e},[(0,a.QD)("span",null,(0,o.WA)(e),1)])))),128))]),(0,a.QD)("div",u,[(0,a.K2)(p,{to:"/#"},{default:(0,a.Ql)((()=>[(0,a.mY)("View Project")])),_:1})])]),(0,a.QD)("div",d,[(0,a.QD)("div",{class:"img",style:(0,o.MN)(`background-image: url(${e.img})`)},null,4)])])),_:2},1032,["virtualIndex"])))),128))])),_:1},8,["class","modules","speed","onSwiper","onTransitionStart","onTransitionEnd"]),(0,a.QD)("div",m,[(0,a.QD)("button",{type:"button",class:"btn_prev",onClick:s[0]||(s[0]=e=>t.mySwiper.slidePrev())},v),(0,a.QD)("button",{type:"button",class:"btn_next",onClick:s[1]||(s[1]=e=>t.mySwiper.slideNext())},f)])],64)}var S=n(2500),D=n(5576),I=n(64),Q={components:{Swiper:D.wx,SwiperSlide:D.Ky},props:{slides:Object},setup(){let e=(0,S.IL)();const s=(0,S.IL)(650),n=(0,S.IL)(!1),a=(0,S.IL)(!0),t=(0,S.IL)(0),i=s=>{e.value=s,s.emit("transitionEnd"),setTimeout((()=>{r(s)}),1)},l=e=>{n.value=!0,a.value=t.value>e.translate,t.value=e.translate,setTimeout((()=>{r(e)}),1)},o=()=>{n.value=!1},r=e=>{const{slides:s,activeIndex:n,previousIndex:a}=e;try{s.forEach(((e,s)=>{e.classList.remove("custom-prev"),e.classList.remove("custom-next"),e.classList.remove("custom-beforeIdx"),s===n?e.classList.add("custom-active"):s<n?e.classList.add("custom-prev"):e.classList.add("custom-next"),s===a&&e.classList.add("custom-beforeIdx")}))}catch(t){console.log(t)}};return{mySwiper:e,onSwiper:i,transitionEnd:o,transitionStart:l,modules:[I.Ko,I.eM,I.gV,I.gb],speed:s,moveStart:n,direction:a}}},h=n(4100);const E=(0,h.c)(Q,[["render",w]]);var k=E,L=n.p+"img/visual-2024-happy-new-goods.2bf3192d.jpg",x=n.p+"img/visual-golden-time-year-end-party.c46444b1.jpg",A=n.p+"img/visual-hyundaicard-my-company.b9cf5763.png",C=n.p+"img/visual-tvn-drama-voice-season4.349b7203.png",T=n.p+"img/visual-amorepacific.4af9db3f.png",W=n.p+"img/visual-hyundai-n-brand.a5f37ab5.jpg",z=n.p+"img/visual-culture.0516138f.jpg",j=n.p+"img/visual-company-relocation.24978a05.jpg",M={mixins:[l.c],components:{SwiperMain:k},data(){return{visuals:[{url:"",img:L,slogan:["2024","Happy","New","Goods"]},{url:"",img:x,slogan:["Golden","Time","Year-end","Party"]},{url:"",img:A,slogan:["HYUNDAICARD","My","Company"]},{url:"",img:C,slogan:["TVN","Drama","Voice","Season4"]},{url:"",img:T,slogan:["AMOREPACIFIC"]},{url:"",img:W,slogan:["Hyundai","N","Brand"]},{url:"",img:z,slogan:["Culture"]},{url:"",img:j,slogan:["Company","Relocation"]}]}},mounted(){document.documentElement.classList.add("rock-scroll"),this.$store.commit("setFooter",!1)},unmounted(){document.documentElement.classList.remove("rock-scroll"),this.$store.commit("setFooter",!0)}};const N=(0,h.c)(M,[["render",i],["__scopeId","data-v-f0b21b1c"]]);var _=N}}]);
//# sourceMappingURL=79.e70723c5.js.map