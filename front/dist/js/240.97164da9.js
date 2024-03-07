"use strict";(self["webpackChunktest"]=self["webpackChunktest"]||[]).push([[240],{3848:function(e,t,l){var a=l(8184),i=l(904);t.c={async mounted(){await this.$nextTick(),(0,i.e2)(),(0,i.Kg)(),a.c.commit("setLoading",!0),a.c.commit("setOpenAside",!1),document.querySelector("#app").classList.remove("loading"),setTimeout((()=>{a.c.commit("setLoading",!1)}),1300),window.addEventListener("resize",i.AD)},unmounted(){(0,i.Cq)(),window.removeEventListener("resize",i.AD)}}},8864:function(e,t,l){l.d(t,{c:function(){return g}});var a=l(4108),i=l(9096);const s={key:0,class:"page-title"},n={key:1,class:"title-s"},d={key:2,class:"title-m"},c={key:3,class:"title-l"},r={key:4,class:"title-xl"},o={key:5,class:"desc"},u={key:6,class:"visual-title"};function y(e,t,l,y,p,A){return(0,a.Wz)(),(0,a.An)("div",{class:(0,i.WN)(["title-area",{black:"black"===l.theme,center:"center"===l.align}]),ref:"elem"},[l.pageTitle.length>0?((0,a.Wz)(),(0,a.An)("div",s,[((0,a.Wz)(!0),(0,a.An)(a.ae,null,(0,a.mi)(l.pageTitle,(e=>((0,a.Wz)(),(0,a.An)("h2",{class:(0,i.WN)(["gsap-item",`delay${e.delay}`]),key:e},(0,i.WA)(e.text),3)))),128))])):(0,a.g1)("",!0),l.titleS.length>0?((0,a.Wz)(),(0,a.An)("div",n,[((0,a.Wz)(!0),(0,a.An)(a.ae,null,(0,a.mi)(l.titleS,(e=>((0,a.Wz)(),(0,a.An)("h3",{class:(0,i.WN)(["gsap-item",`delay${e.delay}`]),key:e},(0,i.WA)(e.text),3)))),128))])):(0,a.g1)("",!0),l.titleM.length>0?((0,a.Wz)(),(0,a.An)("div",d,[((0,a.Wz)(!0),(0,a.An)(a.ae,null,(0,a.mi)(l.titleM,(e=>((0,a.Wz)(),(0,a.An)("p",{key:e,class:(0,i.WN)(["gsap-item",`delay${e.delay}`])},(0,i.WA)(e.text),3)))),128))])):(0,a.g1)("",!0),l.titleL.length>0?((0,a.Wz)(),(0,a.An)("div",c,[((0,a.Wz)(!0),(0,a.An)(a.ae,null,(0,a.mi)(l.titleL,(e=>((0,a.Wz)(),(0,a.An)("p",{class:"gsap-overlay",key:e},[(0,a.QD)("span",{class:(0,i.WN)(["gsap-item",`delay${e.delay}`])},(0,i.WA)(e.text),3)])))),128))])):(0,a.g1)("",!0),l.titleXL.length>0?((0,a.Wz)(),(0,a.An)("div",r,[((0,a.Wz)(!0),(0,a.An)(a.ae,null,(0,a.mi)(l.titleXL,(e=>((0,a.Wz)(),(0,a.An)("p",{class:"gsap-overlay",key:e},[(0,a.QD)("span",{class:(0,i.WN)(["gsap-item",`delay${e.delay}`])},(0,i.WA)(e.text),3)])))),128))])):(0,a.g1)("",!0),l.desc.length>0?((0,a.Wz)(),(0,a.An)("div",o,[((0,a.Wz)(!0),(0,a.An)(a.ae,null,(0,a.mi)(l.desc,(e=>((0,a.Wz)(),(0,a.An)("p",{class:(0,i.WN)(["gsap-item",`delay${e.delay}`]),key:e},(0,i.WA)(e.text),3)))),128))])):(0,a.g1)("",!0),l.visualTitle.length>0?((0,a.Wz)(),(0,a.An)("div",u,[((0,a.Wz)(!0),(0,a.An)(a.ae,null,(0,a.mi)(l.visualTitle,(e=>((0,a.Wz)(),(0,a.An)("h2",{class:(0,i.WN)(["gsap-item",`delay${e.delay}`]),key:e},(0,i.WA)(e.text),3)))),128))])):(0,a.g1)("",!0)],2)}var p={props:{pageTitle:{type:Array,default(){return[]}},titleS:{type:Array,default(){return[]}},titleL:{type:Array,default(){return[]}},titleXL:{type:Array,default(){return[]}},titleM:{type:Array,default(){return[]}},desc:{type:Array,default(){return[]}},descL:{type:Array,default(){return[]}},visualTitle:{type:Array,default(){return[]}},theme:{type:String,default:"white"},align:{type:String,default:"left"}}},A=l(4100);const m=(0,A.c)(p,[["render",y],["__scopeId","data-v-e32b89b4"]]);var g=m},4696:function(e,t,l){l.d(t,{c:function(){return m}});var a=l(4108),i=l(9096);const s={class:"slogan parallax-text"},n={class:"slogan-inner"},d={key:0,class:"scroll-down"},c=(0,a.QD)("svg",{viewBox:"0 0 30 45"},[(0,a.QD)("path",{d:"M15,1.118c12.352,0,13.967,12.88,13.967,12.88v18.76  c0,0-1.514,11.204-13.967,11.204S0.931,32.966,0.931,32.966V14.05C0.931,14.05,2.648,1.118,15,1.118z"})],-1),r=[c];function o(e,t,l,c,o,u){return(0,a.Wz)(),(0,a.An)("div",{class:(0,i.WN)(["visual-area parallax-bg",{full:"full"===l.type,normal:"normal"===l.type,halfLeft:"halfLeft"===l.type}]),"data-speed":"-0.5"},[(0,a.QD)("div",s,[(0,a.QD)("div",n,[(0,a.oF)(e.$slots,"title"),"full"===l.type?((0,a.Wz)(),(0,a.An)("div",d,[(0,a.QD)("button",{type:"button",onClick:t[0]||(t[0]=(...e)=>u.scrollDown&&u.scrollDown(...e))},r)])):(0,a.g1)("",!0)])]),(0,a.QD)("div",{class:(0,i.WN)(["bg gsap-item parallax-bg",{dimmed:!0===l.dimmed}]),"data-speed":"-0.1"},[(0,a.oF)(e.$slots,"visual")],2)],2)}var u=l(904),y={data(){return{isRun:!1}},props:{type:{type:String,default:"full"},dimmed:{type:Boolean,default:!1},mode:{type:String,default:"basic"}},methods:{scrollDown(){if(this.isRun)return;const e=window.innerHeight,t=document.querySelector("html").scrollHeight-e;this.isRun=!0,this.intervalId=setInterval((()=>{(window.scrollY>=e||window.scrollY>=t)&&(this.isRun=!1,clearInterval(this.intervalId)),window.scroll(e,window.scrollY+50)}),20)}},async mounted(){await this.$nextTick(),"parallax"===this.mode&&(0,u.KZ)()}},p=l(4100);const A=(0,p.c)(y,[["render",o]]);var m=A},5276:function(e,t,l){l.r(t),l.d(t,{default:function(){return O}});var a=l(4108),i=l(9096);const s=e=>((0,a.ED)("data-v-67fd49e0"),e=e(),(0,a.ii)(),e),n={id:"about-page",ref:"elem"},d={class:"section black about-visual","data-theme":"light"},c={id:"content"},r={class:"section white about-link","data-theme":"dark"},o={class:"inner"},u={class:"list"},y=s((()=>(0,a.QD)("i",{class:"fa-solid fa-arrow-right"},null,-1))),p={class:"section white about-img","data-theme":"light"},A={class:"img gsap-item"},m=["src"],g={class:"section black about-awards","data-theme":"light"},W={class:"inner"},v={class:"list gsap-item"},k={class:"title"},h={class:"desc"},f={class:"year"},D={class:"section black","data-theme":"light"},b={class:"about-video gsap-item"},w={preload:"auto",loop:"",autoplay:"",muted:"",playsinline:""},Q=["src"];function z(e,t,l,s,z,x){const L=(0,a.E1)("ContentTitle"),E=(0,a.E1)("SnsLink"),R=(0,a.E1)("ContentVisual"),T=(0,a.E1)("router-link");return(0,a.Wz)(),(0,a.An)("div",n,[(0,a.QD)("section",d,[(0,a.K2)(R,{type:"halfLeft"},{title:(0,a.Ql)((()=>[(0,a.K2)(L,{pageTitle:[{delay:0,text:"ABOUT US"}],titleL:[{delay:1,text:"Awesome"},{delay:2,text:"Global Capability"}],desc:[{delay:3,text:"우리는 다양한 프로젝트 경험과 구성인력의 전문화로 조직간 Co-work을 통해 성공적인 프로젝트를 진행합니다."}],theme:"black"},null,8,["desc"]),(0,a.K2)(E,{site:"about",class:"gsap-item"})])),visual:(0,a.Ql)((()=>[(0,a.QD)("div",{class:"img",style:(0,i.MN)(`background-image: url(${z.visual})`)},null,4)])),_:1})]),(0,a.QD)("div",c,[(0,a.QD)("section",r,[(0,a.QD)("div",o,[(0,a.QD)("ul",u,[((0,a.Wz)(!0),(0,a.An)(a.ae,null,(0,a.mi)(z.links,(e=>((0,a.Wz)(),(0,a.An)("li",{key:e},[(0,a.K2)(L,{titleL:[{delay:1,text:`${e.title}`}],desc:[{delay:2,text:`${e.desc}`}]},null,8,["titleL","desc"]),(0,a.K2)(T,{class:"btn",to:e.link},{default:(0,a.Ql)((()=>[(0,a.QD)("span",null,[(0,a.mY)((0,i.WA)(e.btn),1),y])])),_:2},1032,["to"])])))),128))])])]),(0,a.QD)("section",p,[(0,a.QD)("div",A,[(0,a.QD)("img",{src:z.poster,alt:""},null,8,m)])]),(0,a.QD)("section",g,[(0,a.QD)("div",W,[(0,a.K2)(L,{titleS:[{delay:1,text:"AWARDS"}],titleL:[{delay:1,text:"We've Received Many"},{delay:1,text:"Awards, And We're Not"},{delay:1,text:"Very Shy About it."}],theme:"black",align:"center"},null,8,["titleL"]),(0,a.QD)("ul",v,[((0,a.Wz)(!0),(0,a.An)(a.ae,null,(0,a.mi)(z.awards,(e=>((0,a.Wz)(),(0,a.An)("li",{key:e},[(0,a.K2)(T,{to:e.link},{default:(0,a.Ql)((()=>[(0,a.QD)("span",k,(0,i.WA)(e.title),1),(0,a.QD)("span",h,(0,i.WA)(e.desc),1),(0,a.QD)("span",f,(0,i.WA)(e.year),1)])),_:2},1032,["to"])])))),128))])])]),(0,a.QD)("section",D,[(0,a.QD)("div",b,[(0,a.QD)("video",w,[(0,a.QD)("source",{src:z.video,type:"video/mp4"},null,8,Q)])])])])],512)}var x=l(3848),L=l(4696),E=l(8864),R=l(6772),T=l.p+"img/visual.454bddb4.jpg",S=l.p+"img/poster.4d7554d0.jpg",K=l.p+"media/video.c3382799.mp4",C={components:{ContentVisual:L.c,ContentTitle:E.c,SnsLink:R.c},mixins:[x.c],data(){return{visual:T,poster:S,video:K,awards:[{title:"교보 라이프플래닛 모바일 플랫폼",desc:"2018 WEB AWARD KOREA 기술 이노베이션 대상",year:"2018",link:"/#"},{title:"롯데호텔 글로벌 웹사이트",desc:"2018 WEB AWARD KOREA 여행/관광 분야 최우수상",year:"2018",link:"/#"},{title:"곤지암 리조트 웹사이트",desc:"2015 WEB AWARD KOREA 문화/레포츠 분야 최우수상",year:"2015",link:"/#"},{title:"교보문고 중고장터 웹사이트",desc:"2015 WEB AWARD KOREA 쇼핑 분야 대상",year:"2014",link:"/#"},{title:"STX 커뮤니티 구축 및 운영",desc:"2014 WEB AWARD KOREA 레저/스포츠 분야 최우수상",year:"2014",link:"/#"},{title:"곤지암 화담숲 사이트 구축 및 개발",desc:"2014 WEB AWARD KOREA 여행/관광 분야 최우수상",year:"2014",link:"/#"}],links:[{title:"About The Fifty One",desc:"더피프티원은 전문화된 기술과 인력으로 통합 디지털 마케팅 서비스를 제공하는 Creative Design Agency 입니다.",btn:"WHO WE ARE",link:"/who-we-are"},{title:"Want To Work Us?",desc:"우리에게 의뢰할 프로젝트가 있으신가요? 혹은 우리와 함께 성장하고 싶으신가요? 방문, 전화, 팩스, 메일로 얼마든 문의해 주세요.",btn:"CONTACT",link:"/contact-us"}]}}},$=l(4100);const N=(0,$.c)(C,[["render",z],["__scopeId","data-v-67fd49e0"]]);var O=N}}]);
//# sourceMappingURL=240.97164da9.js.map