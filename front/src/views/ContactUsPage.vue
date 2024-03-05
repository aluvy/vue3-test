<template>
  <div id="contact-page">
    
    <section class="section black contact-visual" data-theme="light">
      <ContentVisual type="normal" :dimmed="true">
        <template #title>
          <ContentTitle
            :pageTitle = "[ { delay: 0, text: `CONTACT` } ]"
            :titleL = "[ { delay: 1, text: `Want To Work` }, { delay: 2, text: `With Us?` } ]"
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

      <section class="section contact" data-theme="light">
        <div id="map">
          <KakaoMap></KakaoMap>
        </div>
        <div class="location">
          <ContentTitle
            :titleL="[
              { delay: 1, text: `Location.` },
            ]"
            :desc = "[
              { delay: 2, text: `우리에게 의뢰할 프로젝트가 있으신가요? 혹은 우리와 함께 성장하고 싶으신가요?`},
              { delay: 3, text: `방문, 전화, 팩스, 메일로 얼마든 문의주세요` }
            ]"
            theme="black"
          ></ContentTitle>
          <div class="cont gsap-item">
            <strong>(주)더피프티원</strong>
            <p>서울특별시 강남구 봉은사로18길 58</p>
            <p>Tel: 02 332 6251 / 2</p>
            <p>Fax: 02 332 6253</p>
            <p>Email: contact@the-51.com</p>
          </div>
        </div>
      </section>
      
      <section class="section" data-theme="light">
        <PageLink :Links="[
          { url: '/who-we-are', title: `WHO WE ARE`, bg: Linkbg }
        ]"></PageLink>
      </section>

    </div>
  </div>
</template>

<script>
import PageMixin from '@/mixins/PageMixin';

// component
import ContentVisual from '@/components/common/ContentVisual.vue'
import ContentTitle from '@/components/common/ContentTitle.vue'
import KakaoMap from '@/components/common/KakaoMap.vue'
import PageLink from '@/components/common/PageLink.vue'

// assets
import visual from '@/assets/images/contact/visual.jpg'
import Linkbg from '@/assets/images/contact/link-bg.jpg'

export default {
  mixins: [PageMixin],
  components: {
    ContentVisual,
    ContentTitle,
    KakaoMap,
    PageLink
  },
  data() {
    return {
      visual,
      Linkbg,
    }
  },
}
</script>

<style scoped>
@import '@/assets/css/page-contact.css';
</style>