<template>
  <div id="contact-page">
    
    <section class="section black contact-visual" data-theme="light">
      <ContentVisual type="normal" :dimmed="true">
        <template #title>
          <ContentTitle
            :pageTitle = "[ { delay: 1, text: `CONTACT` } ]"
            :titleL = "[ { delay: 2, text: `Want To Work` }, { delay: 3, text: `With Us?` } ]"
            :desc = "[
              { delay: 3, text: `더피프티원은 다양한 프로젝트 경험과 구성인력의 전문화로 조직간`},
              { delay: 4, text: `Co-Work을 통해 성공적인 프로젝트를 진행합니다.` }
            ]"
            theme="black"
          ></ContentTitle>
        </template>
        <template #visual>
          <div class="img" :style="`background-image: url(${visual})`"></div>
        </template>
      </ContentVisual>
    </section>

    <div id="content">
      content
    </div>
  </div>
</template>

<script>
import '@/assets/css/page-contact.css'
import PageMixin from '@/mixins/PageMixin';

// component
import ContentVisual from '@/components/common/ContentVisual.vue'
import ContentTitle from '@/components/common/ContentTitle.vue'

// assets
import visual from '@/assets/images/contact/visual.jpg'


export default {
  mixins: [PageMixin],
  components: {
    ContentVisual,
    ContentTitle
  },
  data() {
    return {
      visual,
    }
  },
}
</script>