<template>
  <div id="culture-page">
    
    <section class="section black culture-visual" data-theme="light">
      <ContentVisual mode="parallax">
        <template #title>
          <ContentTitle
            :titleXL = "[ { delay: 0, text: `Here,` }, { delay: 1, text: `The Fifty One` } ]"
            :visualTitle = "[ { delay: 2, text: `Culture` } ]"
            theme="black"
            align="center"
          ></ContentTitle>
        </template>
        <template #visual>
          <div class="img" :style="`background-image: url(${visual})`"></div>
        </template>
      </ContentVisual>
    </section>

    <div id="content">
      
      <section class="section white overview" data-theme="dark">
        <div class="inner">
          <ContentTitle
            :titleL = "[ { delay: 0, text: `Hello,` }, { delay: 1, text: `The Fifty One` } ]"
            :desc = "[ { delay: 2, text: `회사는 때때로 하루 중 가장 긴 시간을 보내는 장소가 됩니다. 더피프티원은 따뜻한 관심과 든든한 지원을 통해, 오랜 시간을 함께하는 직원들을 위한 또 하나의 가족이 되고자 합니다.
  또한 무엇보다 우리가 함께 일하는 과정이 즐거워야 하기에 직원들의 창의성을 극대화 하기 위하여 쾌적하고 창의적인 근무환경을 제공하고 있습니다. 비지니스와 크리에이티브의 균형을 조화롭게 하기 위한 회사 노력을 통해 줄거운 업무 환경이 되도록 합니다.` }, ]"
          ></ContentTitle>
          <div class="photo-area">
            <div class="photo-office gsap-item" :style="`background-image:url(${helloPhoto1})`"></div>
            <div class="photo-sea gsap-item" :style="`background-image:url(${helloPhoto2})`"></div>
            <div class="photo-box gsap-item"></div>
          </div>
        </div>
      </section>

      <section class="section white space" data-theme="dark">
        <ul>
          <li v-for="space in spaces" :key="space" class="gsap-item" :class="{ big: space.size===2}"  :style="`background-image: url(${space.image}); background-color: ${space.bg}`">
            <p>{{ space.text }}</p>
          </li>
        </ul>
      </section>

      <section class="section insight" data-theme="light">
        <div class="inner">
          <div class="insight-inner">
            <ContentTitle
              :titleL = "[ { delay: 0, text: `Thinking Of` }, { delay: 1, text: `The Fifty One` } ]"
              :desc = "[ { delay: 2, text: `창의적이면서 논리적으로 생각하는` }, { delay: 2, text: `더피프티원의 이야기를 소소하게 담아봅니다.` } ]"
              theme="black"
            ></ContentTitle>
            <router-link to="/insight" class="btn"><span>INSIGHT</span></router-link>
          </div>
        </div>
        <div class="bg" :style="`background-image:url(${insightBG})`"></div>
      </section>

      <section class="section white benefit" data-theme="dark">
        <ContentTitle
          :titleL = "[ { delay: 0, text: `Benefits` } ]"
          align="center"
        ></ContentTitle>
        swiper
      </section>

    </div>

  </div>
</template>

<script>
// import '@/assets/css/page-culture.css'
import PageMixin from '@/mixins/PageMixin';

// component
import ContentVisual from '@/components/common/ContentVisual.vue'
import ContentTitle from '@/components/common/ContentTitle.vue'

// assets
import visual from '@/assets/images/culture/visual.jpg'
import helloPhoto1 from '@/assets/images/culture/hello1.jpg'
import helloPhoto2 from '@/assets/images/culture/hello2.jpg'
import space1 from '@/assets/images/culture/space1.jpg'
import space2 from '@/assets/images/culture/space2.jpg'
import space4 from '@/assets/images/culture/space4.jpg'
import space5 from '@/assets/images/culture/space5.jpg'
import insightBG from '@/assets/images/culture/insight-bg.jpg'

export default {
  mixins: [PageMixin],
  components: {
    ContentVisual,
    ContentTitle,
  },
  data() {
    return {
      visual,
      helloPhoto1,
      helloPhoto2,
      insightBG,
      spaces: [
        { size: 1, image: space1, bg: '', text: '' },
        { size: 1, image: space2, bg: '', text: 'The Fifty One Working Space' },
        { size: 2, image: space5, bg: '', text: '' },
        { size: 1, image: '', bg: '#f2634c', text: 'A space for a pleasant experience.' },
        { size: 1, image: space4, bg: '', text: '' },
      ]
    }
  },
}
</script>

<style scoped>
@import '@/assets/css/page-culture.css';
</style>