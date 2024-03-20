"use strict";(self["webpackChunktest"]=self["webpackChunktest"]||[]).push([[76],{3848:function(e,t,a){var l=a(6740),n=a(7280);t.c={async mounted(){await this.$nextTick(),(0,n.e2)(),(0,n.Kg)(),(0,n.Wu)(),(0,n.cP)(),l.c.commit("setLoading",!0),l.c.commit("setOpenAside",!1),document.querySelector("#app").classList.remove("loading"),setTimeout((()=>{l.c.commit("setLoading",!1)}),1300),window.addEventListener("resize",n.AD)},unmounted(){document.querySelector("#app").classList.add("loading"),window.removeEventListener("resize",n.AD),(0,n.Cq)()}}},8864:function(e,t,a){a.d(t,{c:function(){return h}});var l=a(4108),n=a(9096);const i={key:0,class:"page-title"},s={key:1,class:"title-s"},o={key:2,class:"title-m"},r={key:3,class:"title-l"},u={key:4,class:"title-xl"},c={key:5,class:"desc"},d={key:6,class:"visual-title"};function p(e,t,a,p,v,g){return(0,l.Wz)(),(0,l.An)("div",{class:(0,n.WN)(["title-area",{black:"black"===a.theme,center:"center"===a.align}]),ref:"elem"},[a.pageTitle.length>0?((0,l.Wz)(),(0,l.An)("div",i,[((0,l.Wz)(!0),(0,l.An)(l.ae,null,(0,l.mi)(a.pageTitle,(e=>((0,l.Wz)(),(0,l.An)("h2",{class:(0,n.WN)(["gsap-item",`delay${e.delay}`]),key:e},(0,n.WA)(e.text),3)))),128))])):(0,l.g1)("",!0),a.titleS.length>0?((0,l.Wz)(),(0,l.An)("div",s,[((0,l.Wz)(!0),(0,l.An)(l.ae,null,(0,l.mi)(a.titleS,(e=>((0,l.Wz)(),(0,l.An)("h3",{class:(0,n.WN)(["gsap-item",`delay${e.delay}`]),key:e},(0,n.WA)(e.text),3)))),128))])):(0,l.g1)("",!0),a.titleM.length>0?((0,l.Wz)(),(0,l.An)("div",o,[((0,l.Wz)(!0),(0,l.An)(l.ae,null,(0,l.mi)(a.titleM,(e=>((0,l.Wz)(),(0,l.An)("p",{key:e,class:(0,n.WN)(["gsap-item",`delay${e.delay}`])},(0,n.WA)(e.text),3)))),128))])):(0,l.g1)("",!0),a.titleL.length>0?((0,l.Wz)(),(0,l.An)("div",r,[((0,l.Wz)(!0),(0,l.An)(l.ae,null,(0,l.mi)(a.titleL,(e=>((0,l.Wz)(),(0,l.An)("p",{class:"gsap-overlay",key:e},[(0,l.QD)("span",{class:(0,n.WN)(["gsap-item",`delay${e.delay}`])},(0,n.WA)(e.text),3)])))),128))])):(0,l.g1)("",!0),a.titleXL.length>0?((0,l.Wz)(),(0,l.An)("div",u,[((0,l.Wz)(!0),(0,l.An)(l.ae,null,(0,l.mi)(a.titleXL,(e=>((0,l.Wz)(),(0,l.An)("p",{class:"gsap-overlay",key:e},[(0,l.QD)("span",{class:(0,n.WN)(["gsap-item",`delay${e.delay}`])},(0,n.WA)(e.text),3)])))),128))])):(0,l.g1)("",!0),a.desc.length>0?((0,l.Wz)(),(0,l.An)("div",c,[((0,l.Wz)(!0),(0,l.An)(l.ae,null,(0,l.mi)(a.desc,(e=>((0,l.Wz)(),(0,l.An)("p",{class:(0,n.WN)(["gsap-item",`delay${e.delay}`]),key:e},(0,n.WA)(e.text),3)))),128))])):(0,l.g1)("",!0),a.visualTitle.length>0?((0,l.Wz)(),(0,l.An)("div",d,[((0,l.Wz)(!0),(0,l.An)(l.ae,null,(0,l.mi)(a.visualTitle,(e=>((0,l.Wz)(),(0,l.An)("h2",{class:(0,n.WN)(["gsap-item",`delay${e.delay}`]),key:e},(0,n.WA)(e.text),3)))),128))])):(0,l.g1)("",!0)],2)}var v={props:{pageTitle:{type:Array,default(){return[]}},titleS:{type:Array,default(){return[]}},titleL:{type:Array,default(){return[]}},titleXL:{type:Array,default(){return[]}},titleM:{type:Array,default(){return[]}},desc:{type:Array,default(){return[]}},descL:{type:Array,default(){return[]}},visualTitle:{type:Array,default(){return[]}},theme:{type:String,default:"white"},align:{type:String,default:"left"}}},g=a(4100);const m=(0,g.c)(v,[["render",p],["__scopeId","data-v-e32b89b4"]]);var h=m},7360:function(e,t,a){a.d(t,{c:function(){return m}});var l=a(4108),n=a(9096);const i={class:"slogan visualTrigger-slogan visualTrigger-bg","data-speed":"-0.5"},s={class:"slogan-inner"},o={key:0,class:"scroll-down"},r=(0,l.QD)("svg",{viewBox:"0 0 30 45"},[(0,l.QD)("path",{d:"M15,1.118c12.352,0,13.967,12.88,13.967,12.88v18.76  c0,0-1.514,11.204-13.967,11.204S0.931,32.966,0.931,32.966V14.05C0.931,14.05,2.648,1.118,15,1.118z"})],-1),u=[r],c={class:"bg-inner gsap-item"};function d(e,t,a,r,d,p){return(0,l.Wz)(),(0,l.An)("div",{class:(0,n.WN)(["visual-area",{full:"full"===a.type,normal:"normal"===a.type,halfLeft:"halfLeft"===a.type,visualTriggerMode:"visualTrigger"===a.mode}])},[(0,l.QD)("div",i,[(0,l.QD)("div",s,[(0,l.oF)(e.$slots,"title"),"full"===a.type?((0,l.Wz)(),(0,l.An)("div",o,[(0,l.QD)("button",{type:"button",onClick:t[0]||(t[0]=(...e)=>p.scrollDown&&p.scrollDown(...e))},u)])):(0,l.g1)("",!0)])]),(0,l.QD)("div",{class:(0,n.WN)(["bg visualTrigger-bg",{dimmed:!0===a.dimmed}]),"data-speed":"-0.6"},[(0,l.QD)("div",c,[(0,l.oF)(e.$slots,"visual")])],2)],2)}var p={data(){return{}},props:{type:{type:String,default:"full"},dimmed:{type:Boolean,default:!1},mode:{type:String,default:"basic"}},methods:{scrollDown(){let e=window.innerHeight;window.scrollTo({top:e,behavior:"smooth"})}}},v=a(4100);const g=(0,v.c)(p,[["render",d]]);var m=g},1248:function(e,t,a){a.r(t),a.d(t,{default:function(){return ie}});var l=a(4108),n=a(9096);const i=e=>((0,l.ED)("data-v-34185631"),e=e(),(0,l.ii)(),e),s={id:"culture-page"},o={class:"section black culture-visual","data-theme":"white"},r={id:"content"},u={class:"section white overview","data-theme":"black"},c={class:"inner"},d={class:"photo-area"},p=i((()=>(0,l.QD)("div",{class:"photo-box gsap-item"},null,-1))),v={class:"section white space","data-theme":"black"},g={class:"section insight","data-theme":"white"},m={class:"inner"},h={class:"insight-inner"},f=i((()=>(0,l.QD)("span",null,"INSIGHT",-1))),y={class:"section white benefit","data-theme":"black"};function b(e,t,a,i,b,w){const A=(0,l.E1)("ContentTitle"),x=(0,l.E1)("ContentVisual"),S=(0,l.E1)("router-link"),k=(0,l.E1)("CarouselBenefit");return(0,l.Wz)(),(0,l.An)("div",s,[(0,l.QD)("section",o,[(0,l.K2)(x,{mode:"visualTrigger"},{title:(0,l.Ql)((()=>[(0,l.K2)(A,{titleXL:[{delay:0,text:"Here,"},{delay:1,text:"The Fifty One"}],visualTitle:[{delay:2,text:"Culture"}],theme:"black",align:"center"})])),visual:(0,l.Ql)((()=>[(0,l.QD)("div",{class:"img",style:(0,n.MN)(`background-image: url(${b.visual})`)},null,4)])),_:1})]),(0,l.QD)("div",r,[(0,l.QD)("section",u,[(0,l.QD)("div",c,[(0,l.K2)(A,{titleL:[{delay:0,text:"Hello,"},{delay:1,text:"The Fifty One"}],desc:[{delay:2,text:"회사는 때때로 하루 중 가장 긴 시간을 보내는 장소가 됩니다. 더피프티원은 따뜻한 관심과 든든한 지원을 통해, 오랜 시간을 함께하는 직원들을 위한 또 하나의 가족이 되고자 합니다.\n  또한 무엇보다 우리가 함께 일하는 과정이 즐거워야 하기에 직원들의 창의성을 극대화 하기 위하여 쾌적하고 창의적인 근무환경을 제공하고 있습니다. 비지니스와 크리에이티브의 균형을 조화롭게 하기 위한 회사 노력을 통해 줄거운 업무 환경이 되도록 합니다."}]},null,8,["desc"]),(0,l.QD)("div",d,[(0,l.QD)("div",{class:"photo-office gsap-item",style:(0,n.MN)(`background-image:url(${b.helloPhoto1})`)},null,4),(0,l.QD)("div",{class:"photo-sea gsap-item",style:(0,n.MN)(`background-image:url(${b.helloPhoto2})`)},null,4),p])])]),(0,l.QD)("section",v,[(0,l.QD)("ul",null,[((0,l.Wz)(!0),(0,l.An)(l.ae,null,(0,l.mi)(b.spaces,(e=>((0,l.Wz)(),(0,l.An)("li",{key:e,class:(0,n.WN)(["gsap-item",{big:2===e.size}]),style:(0,n.MN)(`background-image: url(${e.image}); background-color: ${e.bg}`)},[(0,l.QD)("p",null,(0,n.WA)(e.text),1)],6)))),128))])]),(0,l.QD)("section",g,[(0,l.QD)("div",m,[(0,l.QD)("div",h,[(0,l.K2)(A,{titleL:[{delay:0,text:"Thinking Of"},{delay:1,text:"The Fifty One"}],desc:[{delay:2,text:"창의적이면서 논리적으로 생각하는"},{delay:2,text:"더피프티원의 이야기를 소소하게 담아봅니다."}],theme:"black"},null,8,["desc"]),(0,l.K2)(S,{to:"/insight",class:"btn"},{default:(0,l.Ql)((()=>[f])),_:1})])]),(0,l.QD)("div",{class:"bg",style:(0,n.MN)(`background-image:url(${b.insightBG})`)},null,4)]),(0,l.QD)("section",y,[(0,l.K2)(A,{titleL:[{delay:0,text:"Benefits"}],align:"center"}),(0,l.K2)(k,{slides:b.benefits},null,8,["slides"])])])])}var w=a(3848),A=a(7360),x=a(8864);const S={class:"bubble"};function k(e,t,a,i,s,o){const r=(0,l.E1)("slide"),u=(0,l.E1)("Pagination"),c=(0,l.E1)("Carousel");return(0,l.Wz)(),(0,l.Az)(c,{ref:"bfCarousel",class:"bfCarousel","items-to-show":s.itemsToShow,"wrap-around":s.wrapAround,"snap-align":s.snapAlign,transition:s.transition,i18n:s.i18n,breakpoints:s.breakpoints},{addons:(0,l.Ql)((()=>[(0,l.K2)(u)])),default:(0,l.Ql)((()=>[((0,l.Wz)(!0),(0,l.An)(l.ae,null,(0,l.mi)(a.slides,(e=>((0,l.Wz)(),(0,l.Az)(r,{key:e},{default:(0,l.Ql)((()=>[(0,l.QD)("div",S,[(0,l.QD)("p",null,(0,n.WA)(e.desc),1)]),(0,l.QD)("strong",null,(0,n.WA)(e.title),1)])),_:2},1024)))),128))])),_:1},8,["items-to-show","wrap-around","snap-align","transition","i18n","breakpoints"])}a(3248);var T=a(2500);
/**
 * Vue 3 Carousel 0.3.1
 * (c) 2023
 * @license MIT
 */
const L={itemsToShow:1,itemsToScroll:1,modelValue:0,transition:300,autoplay:0,snapAlign:"center",wrapAround:!1,throttle:16,pauseAutoplayOnHover:!1,mouseDrag:!0,touchDrag:!0,dir:"ltr",breakpoints:void 0,i18n:{ariaNextSlide:"Navigate to next slide",ariaPreviousSlide:"Navigate to previous slide",ariaNavigateToSlide:"Navigate to slide {slideNumber}",ariaGallery:"Gallery",itemXofY:"Item {currentSlide} of {slidesCount}",iconArrowUp:"Arrow pointing upwards",iconArrowDown:"Arrow pointing downwards",iconArrowRight:"Arrow pointing to the right",iconArrowLeft:"Arrow pointing to the left"}},W={itemsToShow:{default:L.itemsToShow,type:Number},itemsToScroll:{default:L.itemsToScroll,type:Number},wrapAround:{default:L.wrapAround,type:Boolean},throttle:{default:L.throttle,type:Number},snapAlign:{default:L.snapAlign,validator(e){return["start","end","center","center-even","center-odd"].includes(e)}},transition:{default:L.transition,type:Number},breakpoints:{default:L.breakpoints,type:Object},autoplay:{default:L.autoplay,type:Number},pauseAutoplayOnHover:{default:L.pauseAutoplayOnHover,type:Boolean},modelValue:{default:void 0,type:Number},mouseDrag:{default:L.mouseDrag,type:Boolean},touchDrag:{default:L.touchDrag,type:Boolean},dir:{default:L.dir,validator(e){return["rtl","ltr"].includes(e)}},i18n:{default:L.i18n,type:Object},settings:{default(){return{}},type:Object}};function D({config:e,slidesCount:t}){const{snapAlign:a,wrapAround:l,itemsToShow:n=1}=e;if(l)return Math.max(t-1,0);let i;switch(a){case"start":i=t-n;break;case"end":i=t-1;break;case"center":case"center-odd":i=t-Math.ceil((n-.5)/2);break;case"center-even":i=t-Math.ceil(n/2);break;default:i=0;break}return Math.max(i,0)}function z({config:e,slidesCount:t}){const{wrapAround:a,snapAlign:l,itemsToShow:n=1}=e;let i=0;if(a||n>t)return i;switch(l){case"start":i=0;break;case"end":i=n-1;break;case"center":case"center-odd":i=Math.floor((n-1)/2);break;case"center-even":i=Math.floor((n-2)/2);break;default:i=0;break}return i}function C({val:e,max:t,min:a}){return t<a?e:Math.min(Math.max(e,a),t)}function _({config:e,currentSlide:t,slidesCount:a}){const{snapAlign:l,wrapAround:n,itemsToShow:i=1}=e;let s=t;switch(l){case"center":case"center-odd":s-=(i-1)/2;break;case"center-even":s-=(i-2)/2;break;case"end":s-=i-1;break}return n?s:C({val:s,max:a-i,min:0})}function N(e){return e?e.reduce(((e,t)=>{var a;return t.type===l.ae?[...e,...N(t.children)]:"CarouselSlide"===(null===(a=t.type)||void 0===a?void 0:a.name)?[...e,t]:e}),[]):[]}function I({val:e,max:t,min:a=0}){return e>t?I({val:e-(t+1),max:t,min:a}):e<a?I({val:e+(t+1),max:t,min:a}):e}function Q(e,t){let a;return t?function(...l){const n=this;a||(e.apply(n,l),a=!0,setTimeout((()=>a=!1),t))}:e}function M(e,t){let a;return function(...l){a&&clearTimeout(a),a=setTimeout((()=>{e(...l),a=null}),t)}}function O(e="",t={}){return Object.entries(t).reduce(((e,[t,a])=>e.replace(`{${t}}`,String(a))),e)}var j,E=(0,l._M)({name:"ARIA",setup(){const e=(0,l.uU)("config",(0,T.cB)(Object.assign({},L))),t=(0,l.uU)("currentSlide",(0,T.IL)(0)),a=(0,l.uU)("slidesCount",(0,T.IL)(0));return()=>(0,l.h)("div",{class:["carousel__liveregion","carousel__sr-only"],"aria-live":"polite","aria-atomic":"true"},O(e.i18n["itemXofY"],{currentSlide:t.value+1,slidesCount:a.value}))}}),$=(0,l._M)({name:"Carousel",props:W,setup(e,{slots:t,emit:a,expose:n}){var i;const s=(0,T.IL)(null),o=(0,T.IL)([]),r=(0,T.IL)(0),u=(0,T.IL)(0),c=(0,T.cB)(Object.assign({},L));let d,p=Object.assign({},L);const v=(0,T.IL)(null!==(i=e.modelValue)&&void 0!==i?i:0),g=(0,T.IL)(0),m=(0,T.IL)(0),h=(0,T.IL)(0),f=(0,T.IL)(0);let y,b;function w(){d=Object.assign({},e.breakpoints),p=Object.assign(Object.assign(Object.assign({},p),e),{i18n:Object.assign(Object.assign({},p.i18n),e.i18n),breakpoints:void 0}),x(p)}function A(){if(!d||!Object.keys(d).length)return;const e=Object.keys(d).map((e=>Number(e))).sort(((e,t)=>+t-+e));let t=Object.assign({},p);e.some((e=>{const a=window.matchMedia(`(min-width: ${e}px)`).matches;return a&&(t=Object.assign(Object.assign({},t),d[e])),a})),x(t)}function x(e){Object.entries(e).forEach((([e,t])=>c[e]=t))}(0,l.Zl)("config",c),(0,l.Zl)("slidesCount",u),(0,l.Zl)("currentSlide",v),(0,l.Zl)("maxSlide",h),(0,l.Zl)("minSlide",f),(0,l.Zl)("slideWidth",r);const S=M((()=>{A(),k()}),16);function k(){if(!s.value)return;const e=s.value.getBoundingClientRect();r.value=e.width/c.itemsToShow}function O(){u.value<=0||(m.value=Math.ceil((u.value-1)/2),h.value=D({config:c,slidesCount:u.value}),f.value=z({config:c,slidesCount:u.value}),c.wrapAround||(v.value=C({val:v.value,max:h.value,min:f.value})))}(0,l.u2)((()=>{(0,l.o$)((()=>k())),setTimeout((()=>k()),1e3),A(),G(),window.addEventListener("resize",S,{passive:!0}),a("init")})),(0,l.wx)((()=>{b&&clearTimeout(b),y&&clearInterval(y),window.removeEventListener("resize",S,{passive:!0})}));let j=!1;const $={x:0,y:0},B={x:0,y:0},U=(0,T.cB)({x:0,y:0}),X=(0,T.IL)(!1),K=(0,T.IL)(!1),P=()=>{X.value=!0},V=()=>{X.value=!1};function Z(e){["INPUT","TEXTAREA","SELECT"].includes(e.target.tagName)||(j="touchstart"===e.type,j||e.preventDefault(),!j&&0!==e.button||Y.value||($.x=j?e.touches[0].clientX:e.clientX,$.y=j?e.touches[0].clientY:e.clientY,document.addEventListener(j?"touchmove":"mousemove",H,!0),document.addEventListener(j?"touchend":"mouseup",F,!0)))}const H=Q((e=>{K.value=!0,B.x=j?e.touches[0].clientX:e.clientX,B.y=j?e.touches[0].clientY:e.clientY;const t=B.x-$.x,a=B.y-$.y;U.y=a,U.x=t}),c.throttle);function F(){const e="rtl"===c.dir?-1:1,t=.4*Math.sign(U.x),a=Math.round(U.x/r.value+t)*e;if(a&&!j){const e=t=>{t.stopPropagation(),window.removeEventListener("click",e,!0)};window.addEventListener("click",e,!0)}q(v.value-a),U.x=0,U.y=0,K.value=!1,document.removeEventListener(j?"touchmove":"mousemove",H,!0),document.removeEventListener(j?"touchend":"mouseup",F,!0)}function G(){!c.autoplay||c.autoplay<=0||(y=setInterval((()=>{c.pauseAutoplayOnHover&&X.value||J()}),c.autoplay))}function R(){y&&(clearInterval(y),y=null),G()}const Y=(0,T.IL)(!1);function q(e){const t=c.wrapAround?e:C({val:e,max:h.value,min:f.value});v.value===t||Y.value||(a("slide-start",{slidingToIndex:e,currentSlideIndex:v.value,prevSlideIndex:g.value,slidesCount:u.value}),Y.value=!0,g.value=v.value,v.value=t,b=setTimeout((()=>{if(c.wrapAround){const l=I({val:t,max:h.value,min:0});l!==v.value&&(v.value=l,a("loop",{currentSlideIndex:v.value,slidingToIndex:e}))}a("update:modelValue",v.value),a("slide-end",{currentSlideIndex:v.value,prevSlideIndex:g.value,slidesCount:u.value}),Y.value=!1,R()}),c.transition))}function J(){q(v.value+c.itemsToScroll)}function ee(){q(v.value-c.itemsToScroll)}const te={slideTo:q,next:J,prev:ee};(0,l.Zl)("nav",te),(0,l.Zl)("isSliding",Y);const ae=(0,l.S6)((()=>_({config:c,currentSlide:v.value,slidesCount:u.value})));(0,l.Zl)("slidesToScroll",ae);const le=(0,l.S6)((()=>{const e="rtl"===c.dir?-1:1,t=ae.value*r.value*e;return{transform:`translateX(${U.x-t}px)`,transition:`${Y.value?c.transition:0}ms`,margin:c.wrapAround?`0 -${u.value*r.value}px`:"",width:"100%"}}));function ne(){w(),A(),O(),k(),R()}Object.keys(W).forEach((t=>{["modelValue"].includes(t)||(0,l.Kg)((()=>e[t]),ne)})),(0,l.Kg)((()=>e["modelValue"]),(e=>{e!==v.value&&q(Number(e))})),(0,l.Kg)(u,O),a("before-init"),w();const ie={config:c,slidesCount:u,slideWidth:r,next:J,prev:ee,slideTo:q,currentSlide:v,maxSlide:h,minSlide:f,middleSlide:m};n({updateBreakpointsConfigs:A,updateSlidesData:O,updateSlideWidth:k,initDefaultConfigs:w,restartCarousel:ne,slideTo:q,next:J,prev:ee,nav:te,data:ie});const se=t.default||t.slides,oe=t.addons,re=(0,T.cB)(ie);return()=>{const e=N(null===se||void 0===se?void 0:se(re)),t=(null===oe||void 0===oe?void 0:oe(re))||[];e.forEach(((e,t)=>e.props.index=t));let a=e;if(c.wrapAround){const t=e.map(((t,a)=>(0,l.gf)(t,{index:-e.length+a,isClone:!0,key:`clone-before-${a}`}))),n=e.map(((t,a)=>(0,l.gf)(t,{index:e.length+a,isClone:!0,key:`clone-after-${a}`})));a=[...t,...e,...n]}o.value=e,u.value=Math.max(e.length,1);const n=(0,l.h)("ol",{class:"carousel__track",style:le.value,onMousedownCapture:c.mouseDrag?Z:null,onTouchstartPassiveCapture:c.touchDrag?Z:null},a),i=(0,l.h)("div",{class:"carousel__viewport"},n);return(0,l.h)("section",{ref:s,class:{carousel:!0,"is-sliding":Y.value,"is-dragging":K.value,"is-hover":X.value,"carousel--rtl":"rtl"===c.dir},dir:c.dir,"aria-label":c.i18n["ariaGallery"],tabindex:"0",onMouseenter:P,onMouseleave:V},[i,t,(0,l.h)(E)])}}});(function(e){e["arrowUp"]="arrowUp",e["arrowDown"]="arrowDown",e["arrowRight"]="arrowRight",e["arrowLeft"]="arrowLeft"})(j||(j={}));const B={arrowUp:"M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z",arrowDown:"M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z",arrowRight:"M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z",arrowLeft:"M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"};function U(e){return e in j}const X=e=>{const t=(0,l.uU)("config",(0,T.cB)(Object.assign({},L))),a=String(e.name),n=`icon${a.charAt(0).toUpperCase()+a.slice(1)}`;if(!a||"string"!==typeof a||!U(a))return;const i=B[a],s=(0,l.h)("path",{d:i}),o=t.i18n[n]||e.title||a,r=(0,l.h)("title",o);return(0,l.h)("svg",{class:"carousel__icon",viewBox:"0 0 24 24",role:"img","aria-label":o},[r,s])};X.props={name:String,title:String};const K=()=>{const e=(0,l.uU)("config",(0,T.cB)(Object.assign({},L))),t=(0,l.uU)("maxSlide",(0,T.IL)(1)),a=(0,l.uU)("minSlide",(0,T.IL)(1)),n=(0,l.uU)("currentSlide",(0,T.IL)(1)),i=(0,l.uU)("nav",{}),s=e=>I({val:n.value,max:t.value,min:0})===e,o=[];for(let r=a.value;r<t.value+1;r++){const t=(0,l.h)("button",{type:"button",class:{"carousel__pagination-button":!0,"carousel__pagination-button--active":s(r)},"aria-label":O(e.i18n["ariaNavigateToSlide"],{slideNumber:r+1}),onClick:()=>i.slideTo(r)}),a=(0,l.h)("li",{class:"carousel__pagination-item",key:r},t);o.push(a)}return(0,l.h)("ol",{class:"carousel__pagination"},o)};var P=(0,l._M)({name:"CarouselSlide",props:{index:{type:Number,default:1},isClone:{type:Boolean,default:!1}},setup(e,{slots:t}){const a=(0,l.uU)("config",(0,T.cB)(Object.assign({},L))),n=(0,l.uU)("currentSlide",(0,T.IL)(0)),i=(0,l.uU)("slidesToScroll",(0,T.IL)(0)),s=(0,l.uU)("isSliding",(0,T.IL)(!1)),o=()=>e.index===n.value,r=()=>e.index===n.value-1,u=()=>e.index===n.value+1,c=()=>{const t=Math.floor(i.value),l=Math.ceil(i.value+a.itemsToShow-1);return e.index>=t&&e.index<=l};return()=>{var n;return(0,l.h)("li",{style:{width:100/a.itemsToShow+"%"},class:{carousel__slide:!0,"carousel__slide--clone":e.isClone,"carousel__slide--visible":c(),"carousel__slide--active":o(),"carousel__slide--prev":r(),"carousel__slide--next":u(),"carousel__slide--sliding":s.value},"aria-hidden":!c()},null===(n=t.default)||void 0===n?void 0:n.call(t))}}}),V={components:{Carousel:$,Slide:P,Pagination:K},props:{slides:Object},data(){return{itemsToShow:3,wrapAround:!0,snapAlign:"center",transition:500,breakpoints:{1440:{itemsToShow:3},1024:{itemsToShow:2},768:{itemsToShow:1.5},425:{itemsToShow:1},0:{itemsToShow:1}},i18n:{ariaGallery:"slide",ariaNavigateToSlide:"Navigate to slide {slideNumber}",itemXofY:"slide {currentSlide} of {slidesCount}"}}}},Z=a(4100);const H=(0,Z.c)(V,[["render",k]]);var F=H,G=a.p+"img/visual.4e28d22e.jpg",R=a.p+"img/hello1.75cc878e.jpg",Y=a.p+"img/hello2.ebe3b364.jpg",q=a.p+"img/space1.8c892646.jpg",J=a.p+"img/space2.e03ac815.jpg",ee=a.p+"img/space4.f87f0746.jpg",te=a.p+"img/space5.0e15b933.jpg",ae=a.p+"img/insight-bg.d615b3a3.jpg",le={mixins:[w.c],components:{ContentVisual:A.c,ContentTitle:x.c,CarouselBenefit:F},data(){return{visual:G,helloPhoto1:R,helloPhoto2:Y,insightBG:ae,spaces:[{size:1,image:q,bg:"",text:""},{size:1,image:J,bg:"",text:"The Fifty One Working Space"},{size:2,image:te,bg:"",text:""},{size:1,image:"",bg:"#f2634c",text:"A space for a pleasant experience."},{size:1,image:ee,bg:"",text:""}],benefits:[{title:"Family",desc:"언제나 최고의 결과를 만들어내기 위해 노력하는 직원들의 뒤에는 가족이라는 든든한 지원군이 있습니다. 더피프티원은 가족과 함께하는 시간에 즐거움을 더하기 위해 구정과 추석에 상품권을 증정합니다."},{title:"Workshop & Party",desc:"매년 봄과 가을에 워크숍을 진행해, 평소 프로젝트 파견으로 모이기 어려운 직원들이 한자리에 모여 서로에 대해 알아가고 팀워크를 강화하는 시간을 가집니다. 12월에는 한 해를 마무리하는 송년 파티를 열어 일 년 동안 수고한 직원들에게 감사를 표하고, 인센티브와 상장 및 상금 수여식을 진행합니다."},{title:"Study",desc:"기획, 디자인, 퍼블리셔, 개발 직군 별로 체계적인 사내 교육을 진행합니다. 누구나 교육에 참여해 업무에 필요한 지식을 쌓고, 평소 파견 업무로 만나기 어려운 팀원들을 만나 더욱 가까워질 수 있습니다. 사내교육에 필요한 교재와 간식비, 저녁식사 비용이 기본으로 지원되며, 교육을 이수한 직원과 사내 강사에게는 인센티브 및 강사비가 지급됩니다."},{title:"Vacation",desc:"무더운 여름, 더피프티원 직원이라면 누구나 1주일 간의 여름 휴가를 즐길 수 있습니다. 오랜시간을 함께한 장기 근속자(3년/6년/10년)에게는 리프레쉬 휴가(유급)와 휴가비를 통해 고마운 마음을 전달합니다. 그 외에도 프로젝트를 성실히 이행하고 마무리한 경우 프로젝트 휴가, 프로젝트 수주 또는 성공적인 마무리 시에는 해외로 휴가를 떠날 수 있는 휴가비를 지급하고 있습니다."}]}}};const ne=(0,Z.c)(le,[["render",b],["__scopeId","data-v-34185631"]]);var ie=ne}}]);
//# sourceMappingURL=76.9d87435c.js.map