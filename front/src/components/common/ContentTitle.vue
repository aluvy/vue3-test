<template>
  <div class="title-area" :class="{ black: theme==='black', center: align==='center' }" ref="elem">
    <h3 class="title-s" v-if="titleS!=='none'"><p class="gsap-item">{{ titleS }}</p></h3>
    <div class="title-l" v-if="titleL[0]!=='none'">
      <p class="gsap-overlay" v-for="text in titleL" :key="text">
        <span class="gsap-item">{{ text }}</span>
      </p>
    </div>
    <div class="desc" v-if="desc!=='none'"><p class="gsap-item">{{ desc }}</p></div>
  </div>
</template>

<script>
export default {
  props: {
    titleS: { type: String, default: 'none' },
    titleL: { type: Array, default(){ return ['none'] } },
    desc: { type: String, default: 'none', },
    theme: { type: String, default: 'white' },
    align: { type: String, default: 'left' },
  }
}
</script>

<style>
.title-area { color: rgba(0,0,0, 0.7); word-break: keep-all; }
.title-area .title-s { font-size: 1.6rem; line-height: 1.5; font-weight: 700; }
.title-area .title-l { font-size: 5.6rem; line-height: 1.2; color: #000; font-weight: 700; }
.title-area .desc { font-size: 1.6rem; line-height: 1.8; }

.title-area .title-s + .title-l,
.title-area .title-l + .desc { margin-top: 2.4rem; }

/* theme | black */
.title-area.black { color: rgba(255,255,255, 0.7) }
.title-area.black .title-l { color: #fff; }

/* align | center */
.title-area.center { text-align: center; }

.title-area .gsap-item.onEnter { animation-name: fade-in-slide-up-50; }
.title-area .gsap-overlay .gsap-item.onEnter { animation-name: slide-up; }

/* delay */
.title-area *:has(.gsap-item):nth-of-type(0) .gsap-item { animation-delay: 0s; }
.title-area *:has(.gsap-item):nth-of-type(1) .gsap-item { animation-delay: .1s; }
.title-area *:has(.gsap-item):nth-of-type(2) .gsap-item { animation-delay: .2s; }
.title-area *:has(.gsap-item):nth-of-type(3) .gsap-item { animation-delay: .3s; }
.title-area *:has(.gsap-item):nth-of-type(4) .gsap-item { animation-delay: .4s; }
.title-area *:has(.gsap-item):nth-of-type(5) .gsap-item { animation-delay: .5s; }
.title-area *:has(.gsap-item):nth-of-type(6) .gsap-item { animation-delay: .6s; }
.title-area *:has(.gsap-item):nth-of-type(7) .gsap-item { animation-delay: .7s; }
.title-area *:has(.gsap-item):nth-of-type(8) .gsap-item { animation-delay: .8s; }
.title-area *:has(.gsap-item):nth-of-type(9) .gsap-item { animation-delay: .9s; }

@media only screen and (max-width: 1600px) {
  .title-area .title-l { font-size: 4.7rem; }
}

@media only screen and (max-width: 1024px) {
  .title-area .title-l { font-size: 4.4rem; }
}

@media only screen and (max-width: 768px) {
  .title-area .title-l { font-size: 4.2rem; }
}
</style>