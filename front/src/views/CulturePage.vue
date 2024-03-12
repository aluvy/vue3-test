<template>
  <div id="culture-page">
    
    <section class="section black culture-visual" data-theme="white">
      <ContentVisual mode="visualTrigger">
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
      
      <section class="section white overview" data-theme="black">
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

      <section class="section white space" data-theme="black">
        <ul>
          <li v-for="space in spaces" :key="space" class="gsap-item" :class="{ big: space.size===2}"  :style="`background-image: url(${space.image}); background-color: ${space.bg}`">
            <p>{{ space.text }}</p>
          </li>
        </ul>
      </section>

      <section class="section insight" data-theme="white">
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

      <section class="section white benefit" data-theme="black">
        <ContentTitle
          :titleL = "[ { delay: 0, text: `Benefits` } ]"
          align="center"
        ></ContentTitle>
        <CarouselBenefit :slides="benefits"></CarouselBenefit>
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
import CarouselBenefit from '@/components/common/CarouselBenefit.vue'

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
    CarouselBenefit,
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
      ],
      benefits: [
        { title: 'Family', desc: '언제나 최고의 결과를 만들어내기 위해 노력하는 직원들의 뒤에는 가족이라는 든든한 지원군이 있습니다. 더피프티원은 가족과 함께하는 시간에 즐거움을 더하기 위해 구정과 추석에 상품권을 증정합니다.', },
        { title: 'Workshop & Party', desc: '매년 봄과 가을에 워크숍을 진행해, 평소 프로젝트 파견으로 모이기 어려운 직원들이 한자리에 모여 서로에 대해 알아가고 팀워크를 강화하는 시간을 가집니다. 12월에는 한 해를 마무리하는 송년 파티를 열어 일 년 동안 수고한 직원들에게 감사를 표하고, 인센티브와 상장 및 상금 수여식을 진행합니다.', },
        { title: 'Study', desc: '기획, 디자인, 퍼블리셔, 개발 직군 별로 체계적인 사내 교육을 진행합니다. 누구나 교육에 참여해 업무에 필요한 지식을 쌓고, 평소 파견 업무로 만나기 어려운 팀원들을 만나 더욱 가까워질 수 있습니다. 사내교육에 필요한 교재와 간식비, 저녁식사 비용이 기본으로 지원되며, 교육을 이수한 직원과 사내 강사에게는 인센티브 및 강사비가 지급됩니다.', },
        { title: 'Vacation', desc: '무더운 여름, 더피프티원 직원이라면 누구나 1주일 간의 여름 휴가를 즐길 수 있습니다. 오랜시간을 함께한 장기 근속자(3년/6년/10년)에게는 리프레쉬 휴가(유급)와 휴가비를 통해 고마운 마음을 전달합니다. 그 외에도 프로젝트를 성실히 이행하고 마무리한 경우 프로젝트 휴가, 프로젝트 수주 또는 성공적인 마무리 시에는 해외로 휴가를 떠날 수 있는 휴가비를 지급하고 있습니다.', },
      ]
    }
  },
}
</script>

<style scoped>
@import '@/assets/css/page-culture.css';
</style>