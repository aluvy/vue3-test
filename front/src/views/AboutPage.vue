<template>
  <div ref="elem">

    <section class="about-visual">
      <div class="about-slogan">
        <div class="slogan-inner">
          <ContentTitle
            titleS="ABOUT US"
            :titleL="['Awesome', 'Global Capability',]"
            desc="우리는 다양한 프로젝트 경험과 구성인력의 전문화로 조직간 Co-work을 통해 성공적인 프로젝트를 진행합니다."
            theme="black"
          ></ContentTitle>
          <!-- <h2 class="gsap-item">ABOUT US</h2>
          <strong>
            <span class="gsap-overlay"><span class="gsap-item">Awesome</span></span>
            <span class="gsap-overlay"><span class="gsap-item">Global Capability</span></span>
          </strong>
          <p class="gsap-item">우리는 다양한 프로젝트 경험과 구성인력의 전문화로 조직간 Co-work을 통해 성공적인 프로젝트를 진행합니다.</p> -->
          <SnsLink site="about" class="gsap-item"></SnsLink>
        </div>
      </div>
      <div class="about-bg gsap-item" :style="`background-image:url(${SubmainVisual})`"></div>
    </section>

    <section class="section">
      <div class="inner">
        <ul class="about-link">
          <li>
            <p><span class="gsap-overlay"><span class="gsap-item">About The Fifty One</span></span></p>
            <div>
              더피프티원은 전문화된 기술과 인력으로 통합 디지털 마케팅 서비스를 제공하는 Creative Design Agency 입니다.
            </div>
            <router-link class="btn" to="/who-we-are"><span>WHO WE ARE<i class="fa-solid fa-arrow-right"></i></span></router-link>
          </li>
          <li>
            <p><span class="gsap-overlay"><span class="gsap-item">Want To Work Us?</span></span></p>
            <div>
              우리에게 의뢰할 프로젝트가 있으신가요? 혹은 우리와 함께 성장하고 싶으신가요? 방문, 전화, 팩스, 메일로 얼마든 문의해 주세요.
            </div>
            <router-link class="btn" to="/contact-us"><span>CONTACE<i class="fa-solid fa-arrow-right"></i></span></router-link>
          </li>
        </ul>
      </div>
    </section>

    <section class="section">
      <div class="img gsap-item"><img :src="AboutImg01" alt=""></div>
    </section>

    <section class="section black">
      <div class="inner">
        <div class="about-awards">
          <ContentTitle
            theme="black"
            align="center"
            titleS="AWARDS"
            :titleL="[`We've Received Many`, `Awards, And We're Not`, `Very Shy About It.`]"
          ></ContentTitle>
          
          <ul>
            <li v-for="item in awards" :key="item">
              <router-link :to="item.link">
                <span>{{ item.title }}</span>
                <span>{{ item.desc }}</span>
                <span>{{ item.year }}</span>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <section class="section black">
      <div class="about-video">
        <video preload="auto" loop autoplay muted playsinline><source :src="AboutVideo" type="video/mp4"></video>
      </div>
    </section>

  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import SnsLink from '@/components/common/SnsLink.vue'
import ContentTitle from '@/components/common/ContentTitle.vue'

import SubmainVisual from '@/assets/images/about-submain-visual.jpg'
import AboutImg01 from '@/assets/images/about-img-01.jpg'
import AboutVideo from '@/assets/images/about-video.mp4'

gsap.registerPlugin(ScrollTrigger);

export default {
  components: {
    SnsLink,
    ContentTitle
  },
  setup() {
    const elem = ref();
    let ctx;

    onMounted(() => {
      ctx = gsap.context((self) => {
        const items = self.selector('.gsap-item');
        console.log('about', items);
        items.forEach((item) => {
          gsap.to(item, {
            scrollTrigger: {
              trigger: item,
              start: "top 80%",
              // end: "bottom 0",
              // markers: true,
              onEnter: (e) => {
                e.trigger.classList.add('onEnter');
              },
            },
          });
        });
      }, elem.value);
    });

    return { elem, ctx }
  },
  data() {
    return {
      SubmainVisual,
      AboutImg01,
      AboutVideo,
      awards: [
        { title: '교보 라이프플래닛 모바일 플랫폼', desc: '2018 WEB AWARD KOREA 기술 이노베이션 대상', year: '2018', link: '/#' },
        { title: '롯데호텔 글로벌 웹사이트', desc: '2018 WEB AWARD KOREA 여행/관광 분야 최우수상', year: '2018', link: '/#' },
        { title: '곤지암 리조트 웹사이트', desc: '2015 WEB AWARD KOREA 문화/레포츠 분야 최우수상', year: '2015', link: '/#' },
        { title: '교보문고 중고장터 웹사이트', desc: '2015 WEB AWARD KOREA 쇼핑 분야 대상', year: '2014', link: '/#' },
        { title: 'STX 커뮤니티 구축 및 운영', desc: '2014 WEB AWARD KOREA 레저/스포츠 분야 최우수상', year: '2014', link: '/#' },
        { title: '곤지암 화담숲 사이트 구축 및 개발', desc: '2014 WEB AWARD KOREA 여행/관광 분야 최우수상', year: '2014', link: '/#' },
      ]
    }
  },
}
</script>

<style>
#container { background: #191919; }

/* visual */
section.about-visual { display: flex; align-items: stretch; justify-content: space-between; min-height: var(--vh); max-height: 90rem; overflow-y: hidden; }
.about-slogan { flex: 0 0 50%; display: flex; align-items: center; justify-content: flex-end; color: #fff; }
.slogan-inner { width: 100%; max-width: calc(var(--max-width)/2); padding: var(--inner-pad); padding-right: 2rem; font-size: 1.6rem; }
/* .about-slogan h2 { font-size: 1.6rem; color: #bfbfbf; line-height: 1.57; }
.about-slogan strong { display: block; font-size: 5.6rem; line-height: 1.2; margin: 2.4rem 0 0; word-break: keep-all; }
.about-slogan strong > span { display: block; }
.about-slogan p { font-size: 1.6rem; line-height: 1.8; padding-right: 5rem; color: #bfbfbf; margin: 2.4rem 0 0; } */
.about-bg { flex: 1 1 50%; max-width: 50%; min-width: 50%; background-size: cover; background-position: center; background-repeat: no-repeat; }
.about-bg::before { content: ''; display: block; width: 100%; padding-bottom: 100%; }

section.section { background: #fff; overflow-y: hidden; }
section.section.black { background: #191919; }
section.section .inner { width: 100%; max-width: var(--max-width); padding: var(--inner-pad); margin: 0 auto; }

/* about link */
.about-link { display: flex; align-items: stretch; justify-content: space-between; padding: 12rem 0; }
.about-link li { flex: 0 0 calc(50% - 4rem); }
.about-link li p { font-size: 5.6rem; line-height: 1.18; font-weight: 700; }
.about-link li div { font-size: 1.6rem; margin-top: 2.4rem; line-height: 1.9; }
.btn-overlay { overflow: hidden; }
.btn { position: relative; display: block; width: fit-content; height: 4rem; line-height: 4.6rem; text-align: center; font-size: 1.4rem; margin-top: 3rem; transition: all .3s; padding-bottom: 4px; }
.btn span { display: flex; align-items: center; justify-content: center; padding: 0 5rem; border: 2px solid #000; border-radius: 4px; letter-spacing: 0.055rem; transition: all .3s; }
.btn span i { position: absolute; right: 4rem; color: #fff; transition: all .3s; }
.btn:hover { transform: translate3d(0, -5px, 0); }
.btn:hover span { background: #000; color: #fff; padding: 0 6rem 0 4rem; }
.btn:hover span i { right: 3rem; }

/* awards */
.about-awards { padding: 12rem 0; }


/* video */
.about-video { position: relative; height: 60rem; overflow: hidden; }
.about-video video { position: absolute; left: 50%; top: 50%; transform: translate3d(-50%, -50%, 0); min-width: 100%; min-height: 100%; }
.about-video::before { position: absolute; inset: 0; content:''; background: rgba(0,0,0, 0.4); z-index: 2; }

/* animation */
.gsap-overlay { overflow: hidden; }
.gsap-item { animation-fill-mode: backwards; animation-duration: .5s; opacity: 0; }
.gsap-overlay .gsap-item { display: inline-block; }
.gsap-item.onEnter { opacity: 1; }


.about-slogan h2.onEnter { animation-name: fade-in-slide-up-50; animation-delay: .3s; }
.about-slogan strong .onEnter { animation-name: slide-up; }
.about-slogan strong *:nth-child(1) .onEnter { animation-delay: .4s; }
.about-slogan strong *:nth-child(2) .onEnter { animation-delay: .5s; }
.about-slogan p.onEnter { animation-name: fade-in-slide-up-50; animation-delay: .6s; }
.about-slogan .sns-wrap.onEnter { animation-name: fade-in-slide-up-50; animation-delay: .7s; }

.about-bg.onEnter { animation: fade-in-slide-left-20 1s; animation-delay: .7s; animation-fill-mode: backwards; }

.about-link li p .onEnter { animation: slide-up .5s; }
.img.gsap-item.onEnter { animation: fade-in-slide-up-50 1s; }



@media only screen and (max-width: 1600px) {
  .about-slogan strong { font-size: 4.7rem; }
  .about-link li p { font-size: 4.7rem; }
}

@media only screen and (max-width: 1024px) {
  section.about-visual { display: block; max-width: var(--max-width); margin: 0 auto; padding: var(--inner-pad); min-height: inherit; max-height: inherit; }
  .about-slogan { display: block; padding: 9rem 0; }
  .slogan-inner { max-width: initial; padding: 0; }
  .about-slogan strong { font-size: 4.4rem; }
  .about-bg { max-width: initial; min-width: initial; }
  .about-bg::before { padding-bottom: 50%; }

  .about-bg.onEnter { animation-name: fade-in-slide-up-50; }
}
</style>