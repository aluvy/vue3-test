<template>
  <div>
    <div class="scroll-down">
      <button type="button" @click="scrollDown">
        <svg viewBox="0 0 30 45">
          <path d="M15,1.118c12.352,0,13.967,12.88,13.967,12.88v18.76  c0,0-1.514,11.204-13.967,11.204S0.931,32.966,0.931,32.966V14.05C0.931,14.05,2.648,1.118,15,1.118z"></path>
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
import { scrollbar } from '@/utils/gsap.js'

export default {
  data() {
    return {
      // isRun: false,
    }
  },
  
  methods: {
    scrollDown() {
      let winH = window.innerHeight;
      // window.scrollTo({
      //   top: winH,
      //   behavior: 'smooth',
      // });
      scrollbar.scrollTo(0, winH, 600);
    },
  },
}
</script>

<style scoped>
.scroll-down { animation: nudgeMouse 2.4s cubic-bezier(0.250,0.460,0.450,0.940) infinite; }
.scroll-down button { width: 5rem; height: 5rem; }
.scroll-down button::before { position: absolute; left: 50%; top: 22px; content: ''; display: block; width: 2px; height: 6px; margin-left: -1px; border-radius: 2px; background-color: rgba(255,255,255,0.5); transition: background-color .55s; animation: mousewheel 2.4s cubic-bezier(0.000,0.000,0.725,1.000) infinite; }
.scroll-down button::after { position: absolute; left: 50%; top: 0; content: ''; display: block; width: 3rem; height: 4.5rem; margin-left: -1.5rem; border: 2px solid rgba(255,255,255,0.5); border-radius: 3rem; z-index: 2; }
.scroll-down button svg { width: 3rem; height: 4.5rem; }
.scroll-down button svg path { stroke: #fff; fill: transparent; stroke-width: 2px; stroke-dashoffset: 120; stroke-dasharray: 120; animation: mouse-scroll-btn-roll-out .55s cubic-bezier(.5,.1,.07,1); }

.scroll-down button:hover svg path,
.scroll-down button:focus svg path { stroke-dashoffset:0; animation: mouse-scroll-btn-roll-over .55s cubic-bezier(.5,.1,.07,1); }
.scroll-down button:hover::before,
.scroll-down button:focus::before { background-color: #fff; }

@keyframes mousewheel {
  0% { opacity:1; transform:scaleY(1) translateY(-1rem); }
  45% { opacity:0; transform:scaleY(0.5) translateY(1.3rem); }
  46% { opacity:0; transform:scaleY(1) translateY(-1rem); }
  65%, 100% { opacity:1; transform:scaleY(1) translateY(-1rem); }
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
</style>