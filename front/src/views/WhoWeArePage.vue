<template>
  <div id="who-page" ref="elem">

    <section class="section black who-visual" data-headerTheme="light">
      <div class="slogan">
        <div class="slogan-inner">
          <ContentTitle
            titleS="WHO WE ARE"
            :titleL="['Special Group For', 'Digital Marketing',]"
            desc="더피프티원은 매년 다양한 프로젝트 경험과 전문성 있는 인적자원으로 프로젝트를 성공적으로 진행하며 업계를 선도합니다."
            theme="black"
          ></ContentTitle>
        </div>
      </div>
      <div class="bg gsap-item"></div>
    </section>

    <section class="section who-overview" data-headerTheme="light">
      <div class="inner">
        <ContentTitle
          titleS="Overview"
          :titleL="[`There Are Many Numbers In Between ‘0’ And ‘100’`,]"
          theme="black"
        ></ContentTitle>
        <ul class="desc">
          <li>
            '0'과 '100'사이에는 많은 숫자가 존재합니다.<br>
            '100'이 모든것을 이루어낸 '완성'을 의미한다면 '0'은 이루어나가야 하는 '미완성'을 의미합니다.<br>
            누군가는 모든것을 이루어낸 '100'에 큰 의미를 부여하지만 우리는 '0'과 '100'사이의<br>
            '51(fifty-one)'에 주목합니다. '51'은 가능과 불가능을 구분짓는 '가능성'을 의미하기 때문입니다. 불가능을 가능으로 만드는 '51'의 순간을 우리는 함께 경험할 것입니다.
          </li>
          <li>
            If '100' represents 'complete' that achieved everything '0' represents 'incomplete' that has to achieve everything While someone gives significant meaning to '100' we focus on '51(fifty-one)' between '0' and '100'<br>
            '51' represents 'possibility' that defferentiates possible and impossible We will experience the moment of '51' making the impossible to possible all together.
          </li>
        </ul>
        <ul class="info">
          <li class="gsap-item">
            <strong>Company</strong>
            <p>(주)더피프티원</p>
            <p>조종영 대표이사</p>
            <p>2011년 4월 11일(법인설립)</p>
            <p>80명(자회사 정규직원 포함)</p>
          </li>
          <li class="gsap-item">
            <strong>Business Field</strong>
            <p>디지털마케팅 에이전시</p>
            <p>디지털 콘텐츠 서비스</p>
            <p>UX컨설팅 서비스</p>
          </li>
          <li class="gsap-item">
            <strong>Contact</strong>
            <p>Head Office</p>
            <p>서울특별시 강남구</p>
            <p>봉은사로18길 58</p>
          </li>
        </ul>
      </div>
    </section>

    <section class="section white who-service" data-headerTheme="dark">
      <div class="inner">
        swiper
      </div>
      <div class="bg"></div>
    </section>

    <section class="section white who-client" data-headerTheme="dark">
      <div class="inner">
        <ContentTitle
          titleS="Our Clients"
          :titleL="['These Are The Customers', 'Who Trusted Us.',]"
          theme="white"
          align="center"
        ></ContentTitle>
        <ul class="list">
          <li v-for="client in clients" :key="client"><img :src="client.img" :alt="client.alt"></li>
        </ul>
      </div>
    </section>

    <section class="section who-link" data-headerTheme="light">
      <ul>
        <li>
          <router-link to="/contact-us">CONTACT US</router-link>
        </li>
      </ul>
    </section>

  </div>
</template>

<script>
import '@/assets/css/page-who.css'
import PageMixin from '@/mixins/PageMixin';
import { gsapScrollTrigger, gsapKill } from '@/utils/gsap.js'
import ContentTitle from '@/components/common/ContentTitle.vue'

// assets
import client1 from '@/assets/images/who/client-logo01.jpg'
import client2 from '@/assets/images/who/client-logo02.jpg'
import client3 from '@/assets/images/who/client-logo03.jpg'
import client4 from '@/assets/images/who/client-logo04.jpg'
import client5 from '@/assets/images/who/client-logo05.jpg'
import client6 from '@/assets/images/who/client-logo06.jpg'
import client7 from '@/assets/images/who/client-logo07.jpg'
import client8 from '@/assets/images/who/client-logo08.jpg'
import client9 from '@/assets/images/who/client-logo09.jpg'
import client10 from '@/assets/images/who/client-logo10.jpg'
import client11 from '@/assets/images/who/client-logo11.jpg'
import client12 from '@/assets/images/who/client-logo12.jpg'
import client13 from '@/assets/images/who/client-logo13.jpg'
import client14 from '@/assets/images/who/client-logo14.jpg'
import client15 from '@/assets/images/who/client-logo15.jpg'
import client16 from '@/assets/images/who/client-logo16.jpg'
import client17 from '@/assets/images/who/client-logo17.jpg'
import client18 from '@/assets/images/who/client-logo18.jpg'
import client19 from '@/assets/images/who/client-logo19.jpg'
import client20 from '@/assets/images/who/client-logo20.jpg'
import client21 from '@/assets/images/who/client-logo21.jpg'
import client22 from '@/assets/images/who/client-logo22.jpg'
import client23 from '@/assets/images/who/client-logo23.jpg'
import client24 from '@/assets/images/who/client-logo24.jpg'

export default {
  components: {
    ContentTitle,
  },
  mixins: [PageMixin],
  data() {
    return {
      clients: [
        { img: client1, alt: 'LG Electronics', },
        { img: client2, alt: 'LG CNS', },
        { img: client3, alt: 'LG U+', },
        { img: client4, alt: 'LG Hausys', },
        { img: client5, alt: 'LOTTE HOTELS &amp; RESORTS', },
        { img: client6, alt: '롯데정보통신', },
        { img: client7, alt: 'KYOBO', },
        { img: client8, alt: 'SK telecom', },
        { img: client9, alt: 'SAMSUNG', },
        { img: client10, alt: 'HYUNDAI', },
        { img: client11, alt: 'MORE PACIFIC', },
        { img: client12, alt: 'GS Retail', },
        { img: client13, alt: 'KIA', },
        { img: client14, alt: 'KT', },
        { img: client15, alt: 'CJ', },
        { img: client16, alt: 'ebay', },
        { img: client17, alt: 'Hyundai Motor Company', },
        { img: client18, alt: 'HANKOOK driving emotion', },
        { img: client19, alt: 'SERVEONE 주식회사 서브원', },
        { img: client20, alt: 'AUCTION', },
        { img: client21, alt: 'KBS', },
        { img: client22, alt: 'PAGODA', },
        { img: client23, alt: '쌍용정보통신', },
        { img: client24, alt: 'LOTTE.COM', },
      ]
    }
  },
  async mounted() {
    await this.$nextTick();
    setTimeout(() => {
      const elem = this.$refs.elem;
      gsapScrollTrigger(elem);
    }, 1);
  },
  unmounted() {
    gsapKill();
  },
}
</script>