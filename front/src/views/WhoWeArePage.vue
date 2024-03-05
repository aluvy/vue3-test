<template>
  <div id="who-page" ref="elem">

    <section class="section black who-visual" data-theme="light">
      <ContentVisual type="normal" :dimmed="true">
        <template #title>
          <ContentTitle
            :pageTitle = "[ { delay: 0, text: `WHO WE ARE` } ]"
            :titleL="[
              { delay: 1, text: `Special Group For` },
              { delay: 2, text: `Digital Marketing`,}
            ]"
            :desc = "[
              { delay: 3, text: `더피프티원은 매년 다양한 프로젝트 경험과 전문성 있는 인적자원으로`},
              { delay: 4, text: `프로젝트를 성공적으로 진행하며 업계를 선도합니다.` }
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
      <section class="section who-overview" data-theme="light">
        <div class="inner">
          <ContentTitle
            :titleS = "[ { delay: 1, text: `Overview` } ]"
            :titleL = "[ { delay: 2, text: `There Are Many Numbers In Between ‘0’ And ‘100’`} ]"
            theme="black"
          ></ContentTitle>
          <ul class="desc">
            <li>
              '0'과 '100'사이에는 많은 숫자가 존재합니다.<br>
              '100'이 모든것을 이루어낸 '완성'을 의미한다면 '0'은 이루어나가야 하는 '미완성'을 의미합니다.<br>
              누군가는 모든것을 이루어낸 '100'에 큰 의미를 부여하지만 우리는 '0'과 '100'사이의 '51(fifty-one)'에 주목합니다. '51'은 가능과 불가능을 구분짓는 '가능성'을 의미하기 때문입니다. 불가능을 가능으로 만드는 '51'의 순간을 우리는 함께 경험할 것입니다.
            </li>
            <li>
              If '100' represents 'complete' that achieved everything '0' represents 'incomplete' that has to achieve everything While someone gives significant meaning to '100' we focus on '51(fifty-one)' between '0' and '100' '51' represents 'possibility' that defferentiates possible and impossible We will experience the moment of '51' making the impossible to possible all together.
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
              <p>서울특별시 강남구 봉은사로18길 58</p>
            </li>
          </ul>
        </div>
      </section>

      <section class="section white who-service" data-theme="dark">
        <div class="inner">
          <ContentTitle
            :titleL="[ { delay: 1, text: `Our Services` }]"
            theme="white"
            align="center"
          ></ContentTitle>
          <swiper
            class="svSwiper gsap-item"
            :modules="modules"
            :loop="true"
            :draggable="true"
            :speed=0
            @swiper="onSwiper"
            @transitionStart="transitionStart"
          >
            <swiper-slide v-for="service in services" :key="service">
              <strong>{{ service.title }}</strong>
              <p>{{ service.desc }}</p>
            </swiper-slide>
            <div class="svSwiper-pagination">
              <div class="current">
                <ul ref="currentUl">
                  <li v-for="(item, i) in services" :key="i">{{ i + 1 }}</li>
                </ul>
              </div>
              <div class="divide">/</div>
              <div class="total">{{ services.length }}</div>
            </div>
            <div class="svSwiper-controller">
              <button type="button" class="btn_prev" @click="mySwiper.slidePrev()"><i class="fa fa-angle-left"></i><span class="blind">prev</span></button>
              <button type="button" class="btn_next" @click="mySwiper.slideNext()"><i class="fa fa-angle-right"></i><span class="blind">next</span></button>
            </div>
          </swiper>
        </div>
        <div class="bg">
          <div class="timeline" :style="`background-image: url(${serviceBG})`"></div>
        </div>
      </section>

      <section class="section white who-client" data-theme="dark">
        <div class="inner">
          <ContentTitle
            :titleS = "[ { delay: 1, text: `Our Clients`} ]"
            :titleL="[
              { delay: 2, text: `These Are The Customers` },
              { delay: 3, text: `Who Trusted Us.` },
            ]"
            theme="white"
            align="center"
          ></ContentTitle>
          <ul class="list">
            <li v-for="client in clients" :key="client"><img :src="client.img" :alt="client.alt"></li>
          </ul>
        </div>
      </section>

      <section class="section" data-theme="light">
        <PageLink :Links="[
          { url: '/contact-us', title: `CONTACT US`, bg: Linkbg }
        ]"></PageLink>
      </section>

    </div>
  </div>
</template>

<script>
import PageMixin from '@/mixins/PageMixin';
import { ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, A11y } from 'swiper/modules';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

// component
import ContentVisual from '@/components/common/ContentVisual.vue'
import ContentTitle from '@/components/common/ContentTitle.vue'
import PageLink from '@/components/common/PageLink.vue'

// assets
import visual from '@/assets/images/who/visual.jpg'
import serviceBG from '@/assets/images/who/service-bg.jpg'
import Linkbg from '@/assets/images/who/link-bg.jpg'
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
    ContentVisual,
    ContentTitle,
    Swiper,
    SwiperSlide,
    PageLink
  },
  mixins: [PageMixin],
  setup() {
    let mySwiper = ref();
    let currentUl = ref();
    let activeIndex = ref(0);

    const onSwiper = (swiper) => {
      mySwiper.value = swiper;
      setPagination(swiper.realIndex);
    }

    const transitionStart = (swiper) => {
      setPagination(swiper.realIndex);
    }

    const setPagination = (index) => {
      currentUl.value.style.transform = `translate3D(${20 * index * -1}px, 0, 0)`;
    }

    return {
      mySwiper,
      onSwiper,
      modules: [ Autoplay, A11y ],

      transitionStart,
      setPagination,

      currentUl,
      activeIndex,
    }
  },
  data() {
    return {
      visual,
      serviceBG,
      Linkbg,
      services: [
        {
          title: `"Web Service뿐만 아니라 Mobile도 아우르는 강력한 Cross Business 구축 경험 및 기술 보유"`,
          desc: `Web과 Mobile의 경계가 허물어지고 있는 Digital Marketing Trend를 분석하고, 이를 선도하기 위해 꾸준한 Mobile 기술 투자(HTML5&UX)를 이행하여 관련 Technology 및 Skill을 보유`,
        },
        {
          title: `"다양한 산업/고객의 인터넷 및 모바일 서비스 구축 및 운영"`,
          desc: `협업에 최적화된 내부 업무 Process를 바탕으로 기획, 디자인, 개발, QM 등 통합(Integrated) 서비스를 제공`,
        },
        {
          title: `"Adobe Marketing Cloud Solution에 대한 공식 Partner로서 다양한 경험 및 업계 선도"`,
          desc: `Adobe Marketing Cloud Solution의 공식 Partner사로 다수의 Global Project 수행 및 구축 경험을 통해 Digital Marketing 분야 업계 선도`,
        },
        {
          title: `다년간의 전문성을 보유한 인적자원과 효율적 Service 개발 및 Know-How 보유`,
          desc: `성공적 프로젝트 수행을 위해 적합 기술을 가진 Division/Team을 엄선하고, 전문 인력 선별 투입으로 높은 고객만족도 제공`,
        }
      ],
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
  methods: {
    svSwiperBGTimeline() {
      gsap.timeline({ scrollTrigger :{
        trigger: ".who-service",
        start: "bottom 100%",
        end: "botton -200",
        scrub: 1,
        // markers: true,
        // pin: true, 
        // events: onEnter onLeave onEnterBack onLeaveBack
        toggleActions: "restart none none reverse"
        // options: play, pause, resume, reset, restart, complete, reverse, none    
      }})
      .from(".timeline", { y : '-100', duration: 2, ease: 'none' })
    }
  },
  mounted() {
    this.svSwiperBGTimeline();
  },
  unmounted() {
    const triggers = ScrollTrigger.getAll();
    triggers.forEach(trigger => trigger.kill());
  }
}
</script>

<style scoped>
@import '@/assets/css/page-who.css';
</style>