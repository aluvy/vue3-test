<template>
<!-- 
  work, workview, culture, insight, insightview, 
-->
  <div class="visual-area-normal">

    <div class="slogan">
      <div class="slogan-inner">

        <div class="title-s">
          <p class="page-item" v-for="page in pages" :key="page"><span>{{ page }}</span></p>  
        </div>
        <div class="title-l">
          <p class="title-item" v-for="title in titles" :key="title"><span>{{ title }}</span></p>  
        </div>
        <div class="desc">
          <p class="desc-item" v-for="desc in descs" :key="desc"><span>{{ desc }}</span></p>
        </div>
        
      </div>
    </div>

    <div class="bg" :class="{ dimmed: dimmed }">
      <div class="bg-inner">
        <slot name="visual"></slot>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  components: {
    
  },
  props: {
    pages: { type: Array, default(){ return [] } },
    titles: { type: Array, default(){ return [] } },
    descs: { type: Array, default(){ return [] } },
    dimmed: { type: Boolean, default: true },
  },
}
</script>

<style>
.visual-area-normal { position: relative; height: calc(var(--vh) * 0.8); min-height: 60rem; overflow: hidden; }

.visual-area-normal .slogan { position: absolute; inset: 0; display: flex; align-items: center; justify-content: center; z-index: 2; }
.visual-area-normal .slogan-inner { width: 100%; max-width: var(--max-width); padding: var(--inner-pad); text-align: left; }

.visual-area-normal .slogan .title-s { font-size: var(--fs-title-s); line-height: 1; font-weight: 700; color: rgba(255,255,255, 0.74); }
.visual-area-normal .slogan .title-s p { overflow: hidden; }
.visual-area-normal .slogan .title-s p span { display: block; word-break: keep-all; }

.visual-area-normal .slogan .title-l { font-size: var(--fs-title-ml); line-height: 1.2; font-weight: 700; color: #fff; margin-top: 2rem; }
.visual-area-normal .slogan .title-l p { overflow: hidden; }
.visual-area-normal .slogan .title-l p span { display: block; word-break: keep-all; }

.visual-area-normal .slogan .desc { font-size: var(--fs-title-s); line-height: 1.8; color: rgba(255,255,255, 0.7); margin-top: 2.4rem; }
.visual-area-normal .slogan .desc p { overflow: hidden; }
.visual-area-normal .slogan .desc p span { display: block; }

.visual-area-normal .bg { position: absolute; inset: 0; z-index: 1; }
.visual-area-normal .bg-inner { position: absolute; inset: 0; z-index: 1; }
.visual-area-normal .bg.dimmed::before { content: ''; position: absolute; inset: 0; background: rgba(0,0,0, 0.5); z-index: 2; }
.visual-area-normal .bg .img { position: absolute; inset: 0; background-position: center; background-repeat: no-repeat; background-size: cover; z-index: 1; }
.visual-area-normal .bg .img img { width: 100%; height: 100%; object-fit: cover; }

@media only screen and (max-width: 1440px) {
  .visual-area-normal { height: calc(var(--vh) * 0.6); }
}
</style>