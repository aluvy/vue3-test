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
      
      <section class="section white" data-theme="black">
        Hello,
        The Fifty One

        회사는 때때로 하루 중 가장 긴 시간을 보내는 장소가 됩니다. 더피프티원은 따뜻한 관심과 든든한 지원을 통해, 오랜 시간을 함께하는 직원들을 위한 또 하나의 가족이 되고자 합니다.
또한 무엇보다 우리가 함께 일하는 과정이 즐거워야 하기에 직원들의 창의성을 극대화 하기 위하여 쾌적하고 창의적인 근무환경을 제공하고 있습니다. 비지니스와 크리에이티브의 균형을 조화롭게 하기 위한 회사 노력을 통해 줄거운 업무 환경이 되도록 합니다.

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

export default {
  mixins: [PageMixin],
  components: {
    ContentVisual,
    ContentTitle,
  },
  data() {
    return {
      visual,
    }
  },
}
</script>

<style scoped>
@import '@/assets/css/page-culture.css';
</style>