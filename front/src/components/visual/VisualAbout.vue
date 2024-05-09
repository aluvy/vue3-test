<template>
<!-- 
  about us
-->
  <div class="visual-area-about">

    <div class="slogan">
      <div class="slogan-inner">

        <div class="title-s">
          <p class="cate-item" v-for="cate in cates" :key="cate"><span>{{ cate }}</span></p>  
        </div>
        <div class="title-l">
          <p class="title-item" v-for="title in titles" :key="title"><span>{{ title }}</span></p>  
        </div>
        <div class="desc">
          <p class="desc-item" v-for="desc in descs" :key="desc"><span>{{ desc }}</span></p>
        </div>

        <SnsLink site="about"></SnsLink>
        
      </div>
    </div>

    <div class="bg">
      <div class="bg-inner">
        <slot name="visual"></slot>
      </div>
    </div>

  </div>
</template>

<script>
import SnsLink from '@/components/common/SnsLink.vue'

export default {
  components: {
    SnsLink
  },
  props: {
    cates: { type: Array, default(){ return [] } },
    titles: { type: Array, default(){ return [] } },
    descs: { type: Array, default(){ return [] } },
  },
}
</script>

<style>
.visual-area-about { position: relative; height: calc(var(--vh) * 0.95); min-height: 55rem; overflow: hidden; }

.visual-area-about .slogan { position: absolute; inset: 0; right: 50%; display: flex; align-items: center; justify-content: center; z-index: 2; }
.visual-area-about .slogan-inner { width: 100%; max-width: var(--max-width); padding: var(--inner-pad); text-align: left; }

.visual-area-about .slogan .title-s { font-size: var(--fs-title-s); line-height: 1; font-weight: 700; color: rgba(255,255,255, 0.74); }
.visual-area-about .slogan .title-s p { overflow: hidden; }
.visual-area-about .slogan .title-s p span { display: block; word-break: keep-all; }

.visual-area-about .slogan .title-l { font-size: var(--fs-title-ml); line-height: 1.2; font-weight: 700; color: #fff; margin-top: 2rem; }
.visual-area-about .slogan .title-l p { overflow: hidden; }
.visual-area-about .slogan .title-l p span { display: block; word-break: keep-all; }

.visual-area-about .slogan .desc { font-size: var(--fs-title-s); line-height: 1.8; color: rgba(255,255,255, 0.7); margin-top: 2.4rem; }
.visual-area-about .slogan .desc p { overflow: hidden; }
.visual-area-about .slogan .desc p span { display: block; }

.visual-area-about .bg { position: absolute; inset: 0; left: 50%; z-index: 1; }
.visual-area-about .bg-inner { position: absolute; inset: 0; z-index: 1; }
/* .visual-area-about .bg.dimmed::before { content: ''; position: absolute; inset: 0; background: rgba(0,0,0, 0.5); z-index: 2; } */
.visual-area-about .bg .img { position: absolute; inset: 0; background-position: center; background-repeat: no-repeat; background-size: cover; z-index: 1; }
.visual-area-about .bg .img img { width: 100%; height: 100%; object-fit: cover; }

@media only screen and (max-width: 1440px) {
  .visual-area-about { height: calc(var(--vh) * 0.9); }
}

@media only screen and (max-width: 1024px) {
  .visual-area-about { height: calc(var(--vh) * 0.8); }
  .visual-area-about .slogan-inner { padding-right: 2rem; }
}

@media only screen and (max-width: 768px) {
  .visual-area-about { display: block; max-width: var(--max-width); height: auto; margin: 0 auto; padding: var(--inner-pad); min-height: initial; max-height: initial; }
  .visual-area-about .slogan { position: initial; inset: initial; right: initial; min-height: calc(var(--vh) * 0.5); padding: 12rem 0 8rem; }
  .visual-area-about .slogan-inner { max-width: initial; padding: 0; padding-right: 15rem; }
  .visual-area-about .slogan-inner { padding-right: 0; }
  .visual-area-about .bg { position: relative; inset: initial; left: initial; max-width: initial; min-width: initial; }
  .visual-area-about .bg::before { content:''; display: block; padding-bottom: calc(var(--vh) * 0.5); }
  .visual-area-about .bg::before { padding-bottom: 80%; }
}
</style>