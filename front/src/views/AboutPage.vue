<template>
  <div>
    <div class="about-visual">
      <div class="about-slogan">
        <div class="slogan-inner">
          <h2><span class="motion-text"><span>ABOUT US</span></span></h2>
          <strong>
            <span class="motion-text"><span>Awesome</span></span>
            <span class="motion-text"><span>Global Capability</span></span>
          </strong>
          <p>
            <span class="motion-text"><span>우리는 다양한 프로젝트 경험과 구성인력의 전문화로 조직간 Co-work을 통해 성공적인 프로젝트를 진행합니다.</span></span>
          </p>
          <SnsLink site="about"></SnsLink>
        </div>
      </div>
      <div class="about-bg" :style="`background-image:url(${SubmainVisual})`"></div>
    </div>
  </div>
</template>

<script>
import SnsLink from '@/components/common/SnsLink.vue'
import SubmainVisual from '@/assets/images/about-submain-visual.jpg'

// import image1 from '@/assets/images/main-visual-2024-happy-new-goods.jpg';

export default {
  components: {
    SnsLink,
  },
  data() {
    return {
      SubmainVisual: SubmainVisual
    }
  },

}
</script>

<style>
.about-visual { display: flex; align-items: stretch; justify-content: space-between; min-height: 63rem; background: #111; }
.about-slogan { flex: 0 0 50%; display: flex; align-items: center; justify-content: flex-end; color: #fff; }
.slogan-inner { width: 100%; max-width: calc(var(--max-width)/2); padding: var(--inner-pad); padding-right: 2rem; font-size: 1.6rem; }
.about-slogan h2 { font-size: 1.6rem; color: #bfbfbf; line-height: 1.57; }
.about-slogan strong { display: block; font-size: 4.7rem; line-height: 1.2; margin: 2.4rem 0 0; }
.about-slogan p { line-height: 1.8; padding-right: 4rem; color: #bfbfbf; margin: 2.4rem 0 0; }
.about-bg { flex: 1 1 50%; max-width: 50%; min-width: 50%; background-size: cover; background-position: center; background-repeat: no-repeat; animation: fade-in-slide-left-20 1s; }
.about-bg::before { content: ''; display: block; width: 100%; padding-bottom: 100%; }


.motion-text { display: inline-block; vertical-align: top; overflow: hidden; }
.motion-text span { display: inline-block; vertical-align: top; animation: slide-up .5s; animation-delay: .3s; word-break: keep-all; }

</style>