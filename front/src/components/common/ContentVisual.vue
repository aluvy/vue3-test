<template>
  <!-- 
비주얼 타입 ABCD
A: work : 전체화면 | 전체센터 | 2단 텍스트 | 이미지 or 비디오 | 마우스 아이콘 (insight 서브)
B: who we are, contact us : 높이 80%화면 반응형 | 좌측정렬 3단 텍스트 | 이미지배경
C: aboutus : 우측이미지 반응형 | 좌측정렬 3단텍스트 + sns | 이미지배경
D: recruit : 완전다름
  -->
  <div class="visual-area" :class="{ full: type==='full', normal: type==='normal', halfLeft: type==='halfLeft', visualTriggerMode: mode ==='visualTrigger' }">
    <div class="slogan visualTrigger-slogan visualTrigger-bg" data-speed="-0.5">
      <div class="slogan-inner">
        <slot name="title"></slot>
        
        <div class="scroll-down" v-if="type==='full'">
          <button type="button" @click="scrollDown">
            <svg viewBox="0 0 30 45">
              <path d="M15,1.118c12.352,0,13.967,12.88,13.967,12.88v18.76  c0,0-1.514,11.204-13.967,11.204S0.931,32.966,0.931,32.966V14.05C0.931,14.05,2.648,1.118,15,1.118z"></path>
            </svg>
          </button>
        </div>

      </div>
    </div>
    <div class="bg visualTrigger-bg" :class="{ dimmed : dimmed === true }" data-speed="-0.6">
      <div class="bg-inner gsap-item">
        <slot name="visual"></slot>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      // isRun: false,
    }
  },
  props: {
    type: { type: String, default: 'full' },
    dimmed: { type: Boolean, default: false },
    mode: { type: String, default: 'basic' },
  },
  methods: {
    scrollDown() {
      let winH = window.innerHeight;
      window.scrollTo({
        top: winH,
        behavior: 'smooth',
      });
    },
    // scrollDown() {
    //   if(this.isRun) return;

    //   const winH = window.innerHeight;
    //   const endH = document.querySelector('html').scrollHeight - winH;

    //   this.isRun = true;
    //   this.intervalId = setInterval(() => {
    //     if (window.scrollY >= winH || window.scrollY >= endH) {
    //       this.isRun = false;
    //       clearInterval(this.intervalId);
    //     }
    //     window.scroll(winH, window.scrollY + 50);
    //   }, 20);
    // }
  },
}
</script>

<style>
.visual-area { position: relative; overflow: hidden; }
.visual-area .slogan { position: absolute; inset: 0; display: flex; align-items: center; justify-content: center; z-index: 2; }
.visual-area .slogan-inner { width: 100%; max-width: var(--max-width); padding: var(--inner-pad); }
.visual-area .bg { position: absolute; inset: 0; z-index: 1; }
.visual-area .bg-inner { position: absolute; inset: 0; z-index: 1; }
.visual-area .bg.dimmed::before { content: ''; position: absolute; inset: 0; background: rgba(0,0,0, 0.5); z-index: 2; }
.visual-area .bg .img { position: absolute; inset: 0; background-position: center; background-repeat: no-repeat; background-size: cover; z-index: 1; }
.visual-area .bg video { position: absolute; left: 50%; top: 50%; transform: translate3D(-50%, -50%, 0); min-width: 100%; min-height: 100%; z-index: 1; }

/* type | full */
.visual-area.full { height: var(--vh); }

/* type | normal */
.visual-area.normal { height: calc(var(--vh) * 0.8); min-height: 60rem; }

/* type | halfLeft */
.visual-area.halfLeft { display: flex; align-items: stretch; justify-content: space-between; height: calc(var(--vh) * 0.95); min-height: 55rem; overflow-y: hidden; }
.visual-area.halfLeft .slogan { position: initial; inset: initial; flex: 0 0 50%; display: flex; align-items: center; justify-content: flex-end; color: #fff; }
.visual-area.halfLeft .slogan-inner { width: 100%; max-width: calc(var(--max-width)/2); padding: var(--inner-pad); padding-right: 6rem; font-size: 1.6rem; }
.visual-area.halfLeft .bg { position: inherit; inset: inherit; flex: 1 1 50%; max-width: 50%; min-width: 50%; background:url(@/assets/images/about/visual.jpg) center no-repeat; background-size: cover; }


/* visual animation */
.visual-area .bg-inner.onEnter { animation-name: scale-in-1; animation-duration: 1s; animation-fill-mode: forwards; animation-delay: .8s; animation-fill-mode: backwards; }
.visual-area.halfLeft .bg.onEnter { animation-name: fade-in-slide-left-20; animation-duration: 1s; animation-delay: .8s; animation-fill-mode: backwards; }


/* scroll down */
.visual-area .scroll-down { position: absolute; left: 50%; bottom: 3rem; margin-left: -2.5rem; animation: nudgeMouse 2.4s cubic-bezier(0.250,0.460,0.450,0.940) infinite; }
.visual-area .scroll-down button { width: 5rem; height: 5rem; }
.visual-area .scroll-down button::before { position: absolute; left: 50%; top: 22px; content: ''; display: block; width: 2px; height: 6px; margin-left: -1px; border-radius: 2px; background-color: rgba(255,255,255,0.5); transition: background-color .55s; animation: mousewheel 2.4s cubic-bezier(0.000,0.000,0.725,1.000) infinite; }
.visual-area .scroll-down button::after { position: absolute; left: 50%; top: 0; content: ''; display: block; width: 3rem; height: 4.5rem; margin-left: -1.5rem; border: 2px solid rgba(255,255,255,0.5); border-radius: 3rem; z-index: 2; }
.visual-area .scroll-down button svg { width: 3rem; height: 4.5rem; }
.visual-area .scroll-down button svg path { stroke: #fff; fill: transparent; stroke-width: 2px; stroke-dashoffset: 120; stroke-dasharray: 120; animation: mouse-scroll-btn-roll-out .55s cubic-bezier(.5,.1,.07,1); }
.visual-area .scroll-down button:hover svg path { stroke-dashoffset:0; animation: mouse-scroll-btn-roll-over .55s cubic-bezier(.5,.1,.07,1); }
.visual-area .scroll-down button:hover::before { background-color: #fff; }

@keyframes mousewheel {
  0%{ opacity:1; transform:scaleY(1) translateY(-1rem); }
  45%{ opacity:0; transform:scaleY(0.5) translateY(1.3rem); }
  46%{ opacity:0; transform:scaleY(1) translateY(-1rem); }
  65%, 100%{ opacity:1; transform:scaleY(1) translateY(-1rem); }
}
@keyframes mouse-scroll-btn-roll-over {
  0% { stroke-dashoffset:120; }
  100%{ stroke-dashoffset:0; }
}
@keyframes mouse-scroll-btn-roll-out {
  0% { stroke-dashoffset: 0; }
  100% { stroke-dashoffset: -120; }
}
@keyframes nudgeMouse {
  0%{ transform:translateY(0); }
  45%{ transform:translateY(8px); }
  65%, 100%{ transform:translateY(0); }
}

@media only screen and (max-width: 1440px) {
  .visual-area.halfLeft { height: calc(var(--vh) * 0.9); }
  .visual-area.normal { height: calc(var(--vh) * 0.6); }
}

@media only screen and (max-width: 1024px) {
  .visual-area.halfLeft { height: calc(var(--vh) * 0.7); }
  .visual-area.halfLeft .slogan-inner { padding-right: 2rem; }
}

@media only screen and (max-width: 768px) {
  .visual-area.halfLeft { display: block; max-width: var(--max-width); height: var(--vh); margin: 0 auto; padding: var(--inner-pad); min-height: inherit; max-height: inherit; }
  .visual-area.halfLeft .slogan { min-height: calc(var(--vh) * 0.5); padding: 9rem 0 5rem; }
  .visual-area.halfLeft .slogan-inner { max-width: initial; padding: 0; padding-right: 15rem; }
  .visual-area.halfLeft .slogan-inner { padding-right: 0; }
  .visual-area.halfLeft .bg { max-width: initial; min-width: initial; }
  .visual-area.halfLeft .bg::before { content:''; display: block; padding-bottom: calc(var(--vh) * 0.5); }
  .visual-area.halfLeft .bg::before { padding-bottom: 80%; }
  
  .visual-area.halfLeft .bg.onEnter { animation-name: fade-in-slide-up-20; }
}

@media only screen and (max-width: 768px) {
  /* .visual-area.halfLeft .slogan-inner { padding-right: 0; }
  .visual-area.halfLeft .bg::before { padding-bottom: 80%; } */
}
</style>