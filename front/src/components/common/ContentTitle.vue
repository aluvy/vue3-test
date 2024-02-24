<template>
  <div class="title-area" :class="{ black: theme==='black', center: align==='center' }" ref="elem">

    <div class="page-title" v-if="pageTitle.length > 0">
      <h2 class="gsap-item" :class="`delay${item.delay}`" v-for="item in pageTitle" :key="item">{{ item.text }}</h2>
    </div>

    <div class="title-s" v-if="titleS.length > 0">
      <h3 class="gsap-item" :class="`delay${item.delay}`" v-for="item in titleS" :key="item">{{ item.text }}</h3>
    </div>

    <div class="title-m" v-if="titleM.length > 0">
      <p v-for="item in titleM" :key="item" class="gsap-item" :class="`delay${item.delay}`">{{ item.text }}</p>
    </div>

    <div class="title-l" v-if="titleL.length > 0">
      <p class="gsap-overlay" v-for="item in titleL" :key="item">
        <span class="gsap-item" :class="`delay${item.delay}`">{{ item.text }}</span>
      </p>
    </div>
    
    <div class="title-xl" v-if="titleXL.length > 0">
      <p class="gsap-overlay" v-for="item in titleXL" :key="item">
        <span class="gsap-item" :class="`delay${item.delay}`">{{ item.text }}</span>
      </p>
    </div>

    <div class="desc" v-if="desc.length > 0">
      <p class="gsap-item" :class="`delay${item.delay}`" v-for="item in desc" :key="item">{{ item.text }}</p>
    </div>

    <div class="visual-title" v-if="visualTitle.length > 0">
      <h2 class="gsap-item" :class="`delay${item.delay}`" v-for="item in visualTitle" :key="item">{{ item.text }}</h2>
    </div>

  </div>
</template>

<script>
export default {
  props: {
    pageTitle: { type: Array, default() { return [] } },
    titleS: { type: Array, default(){ return [] } },
    titleL: { type: Array, default(){ return [] } },
    titleXL: { type: Array, default(){ return [] } },
    titleM: { type: Array, default(){ return [] } },
    desc: { type: Array, default(){ return [] } },
    descL: { type: Array, default(){ return [] } },
    visualTitle: { type: Array, default() { return [] } },

    theme: { type: String, default: 'white' },
    align: { type: String, default: 'left' },
  }
}
</script>

<style>
.title-area { color: rgba(0,0,0, 0.7); word-break: keep-all; }
.title-area .page-title h2,
.title-area .title-s { font-size: 1.6rem; line-height: 1; font-weight: 700; }
.title-area .title-l { font-size: 5.6rem; line-height: 1.1; color: #000; font-weight: 700; }
.title-area .title-xl { font-size: 8.1rem; line-height: 1.1; color: #000; font-weight: 700; }
.title-area .desc { font-size: 1.6rem; line-height: 1.8; }
.title-area .visual-title h2 { font-size: 2rem; line-height: 1; font-weight: normal; }

.title-area > * + * { margin-top: 2.4rem; }
.title-area .title-xl + .visual-title { margin-top: 1.6rem; }

/* theme | black */
.title-area.black { color: rgba(255,255,255, 0.7) }
.title-area.black .title-l,
.title-area.black .title-xl { color: #fff; }

/* align | center */
.title-area.center { text-align: center; }

.title-area .gsap-item.onEnter { animation-name: fade-in-slide-up-50; }
.title-area .gsap-overlay .gsap-item.onEnter { animation-name: slide-up; }

/* delay */
.title-area .delay0 { animation-delay: 0s; }
.title-area .delay1 { animation-delay: .1s; }
.title-area .delay2 { animation-delay: .2s; }
.title-area .delay3 { animation-delay: .3s; }
.title-area .delay4 { animation-delay: .4s; }
.title-area .delay5 { animation-delay: .5s; }
.title-area .delay6 { animation-delay: .6s; }
.title-area .delay7 { animation-delay: .7s; }
.title-area .delay8 { animation-delay: .8s; }
.title-area .delay9 { animation-delay: .9s; }

@media only screen and (max-width: 1600px) {
  .title-area .title-l { font-size: 4.7rem; }
  .title-area .title-xl { font-size: 7.6rem; }
}

@media only screen and (max-width: 1024px) {
  .title-area .title-l { font-size: 4.4rem; }
  .title-area .title-xl { font-size: 6.3rem; }
  .title-area .visual-title h2 { font-size: 1.8rem; line-height: 1.8; }
}

@media only screen and (max-width: 768px) {
  .title-area .title-l { font-size: 4.2rem; }
  .title-area .title-xl { font-size: 5.3rem; }
}
</style>