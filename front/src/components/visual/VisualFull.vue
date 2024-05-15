<template>
<!-- 
  work, workview, culture, insight, insightview, 
-->
  <div class="visual-area-full">

    <div class="slogan" data-speed="0.5">
      <div class="slogan-inner">

        <div class="title-xl">
          <p class="title-item" v-for="title in titles" :key="title"><span>{{ title }}</span></p>  
        </div>
        <div class="desc">
          <p class="desc-item" v-for="desc in descs" :key="desc"><span>{{ desc }}</span></p>
        </div>

      </div>
      <ScrollDown class="scrolldown" />
    </div>

    <div class="bg" :class="{ dimmed: dimmed }" data-speed="0.6">
      <div class="bg-inner">
        <slot name="visual"></slot>
      </div>
    </div>

  </div>
</template>

<script>
import ScrollDown from './ScrollDown.vue'

export default {
  components: {
    ScrollDown,
  },
  props: {
    titles: { type: Array, default(){ return [] } },
    descs: { type: Array, default(){ return [] } },
    dimmed: { type: Boolean, default: true },
  },
}
</script>

<style>
.visual-area-full { position: relative; height: var(--vh); min-height: 60rem; overflow: hidden; }

.visual-area-full .slogan { position: absolute; inset: 0; display: flex; align-items: center; justify-content: center; z-index: 2; }
.visual-area-full .slogan-inner { width: 100%; max-width: var(--max-width); padding: var(--inner-pad); text-align: center; }

.visual-area-full .slogan .title-xl { font-size: var(--fs-title-xl); line-height: 1.1; font-weight: 700; color: #fff; }
.visual-area-full .slogan .title-xl p { overflow: hidden; }
.visual-area-full .slogan .title-xl p span { display: block; word-break: keep-all; }
.visual-area-full .slogan .desc { font-size: var(--fs-title-m); line-height: 1.1; color: rgba(255,255,255, 0.7); margin-top: 2rem; }
.visual-area-full .slogan .desc p { overflow: hidden; }
.visual-area-full .slogan .desc p span { display: block; }

.visual-area-full .bg { position: absolute; inset: 0; z-index: 1; }
.visual-area-full .bg-inner { position: absolute; inset: 0; z-index: 1; }
.visual-area-full .bg.dimmed::before { content: ''; position: absolute; inset: 0; background: rgba(0,0,0, 0.5); z-index: 2; }
.visual-area-full .bg .img { position: absolute; inset: 0; background-position: center; background-repeat: no-repeat; background-size: cover; z-index: 1; }
.visual-area-full .bg .img img { width: 100%; height: 100%; object-fit: cover; }
.visual-area-full .bg video { position: absolute; left: 50%; top: 50%; transform: translate3D(-50%, -50%, 0); min-width: 100%; min-height: 100%; z-index: 1; }

/* scroll down */
.visual-area-full .scrolldown { position: absolute; left: 50%; bottom: 3rem; margin-left: -2.5rem; z-index: 2; }
</style>