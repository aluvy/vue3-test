<template>
  <div id="about-page" ref="elem">

    <section class="section black about-visual">
      <div class="slogan">
        <div class="slogan-inner">
          <ContentTitle
            titleS="ABOUT US"
            :titleL="['Awesome', 'Global Capability',]"
            desc="우리는 다양한 프로젝트 경험과 구성인력의 전문화로 조직간 Co-work을 통해 성공적인 프로젝트를 진행합니다."
            theme="black"
          ></ContentTitle>
          <SnsLink site="about" class="gsap-item"></SnsLink>
        </div>
      </div>
      <div class="bg gsap-item" :style="`background-image:url(${SubmainVisual})`"></div>
    </section>

    <section class="section about-link">
      <div class="inner">
        <ul class="list">
          <li v-for="link in links" :key="link">
            <ContentTitle
              :titleL="[ `${link.title}` ]"
              :desc="link.desc"
            ></ContentTitle>
            <router-link class="btn" :to="link.link"><span>{{ link.btn }}<i class="fa-solid fa-arrow-right"></i></span></router-link>
          </li>
        </ul>
      </div>
      <div class="img gsap-item"><img :src="AboutImg01" alt=""></div>
    </section>

    <section class="section black about-awards">
      <div class="inner">
        <ContentTitle
          theme="black"
          align="center"
          titleS="AWARDS"
          :titleL="[`We've Received Many`, `Awards, And We're Not`, `Very Shy About it.`]"
        ></ContentTitle>
        <ul class="list gsap-item">
          <li v-for="item in awards" :key="item">
            <router-link :to="item.link">
              <span class="title">{{ item.title }}</span>
              <span class="desc">{{ item.desc }}</span>
              <span class="year">{{ item.year }}</span>
            </router-link>
          </li>
        </ul>
      </div>
    </section>

    <section class="section black">
      <div class="about-video gsap-item">
        <video preload="auto" loop autoplay muted playsinline><source :src="AboutVideo" type="video/mp4"></video>
      </div>
    </section>

  </div>
</template>

<script>
import { gsapScrollTrigger, gsapKill } from '@/utils/gsap.js'

import SnsLink from '@/components/common/SnsLink.vue'
import ContentTitle from '@/components/common/ContentTitle.vue'

import SubmainVisual from '@/assets/images/about-submain-visual.jpg'
import AboutImg01 from '@/assets/images/about-img-01.jpg'
import AboutVideo from '@/assets/images/about-video.mp4'

export default {
  components: {
    SnsLink,
    ContentTitle
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
      ],
      links: [
        {
          title: 'About The Fifty One',
          desc: '더피프티원은 전문화된 기술과 인력으로 통합 디지털 마케팅 서비스를 제공하는 Creative Design Agency 입니다.',
          btn: 'WHO WE ARE',
          link: '/who-we-are',
        },
        {
          title: 'Want To Work Us?',
          desc: '우리에게 의뢰할 프로젝트가 있으신가요? 혹은 우리와 함께 성장하고 싶으신가요? 방문, 전화, 팩스, 메일로 얼마든 문의해 주세요.',
          btn: 'CONTACT',
          link: '/contact-us',
        },
      ],
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

<style>
#about-page { background: #111; }

/* visual */
.about-visual { display: flex; align-items: stretch; justify-content: space-between; min-height: var(--vh); max-height: 90rem; overflow-y: hidden; }
.about-visual .slogan { flex: 0 0 50%; display: flex; align-items: center; justify-content: flex-end; color: #fff; }
.about-visual .slogan-inner { width: 100%; max-width: calc(var(--max-width)/2); padding: var(--inner-pad); padding-right: 2rem; font-size: 1.6rem; }
.about-visual .slogan .title-area .desc { padding-right: 4rem; }
.about-visual .bg { flex: 1 1 50%; max-width: 50%; min-width: 50%; background-size: cover; background-position: center; background-repeat: no-repeat; }

/* about link */
.about-link .list { display: flex; align-items: stretch; justify-content: space-between; padding: 12rem 0; }
.about-link .list li { flex: 0 0 calc(50% - 2rem); }
.about-link .list .btn { position: relative; display: block; width: fit-content; height: 4.6rem; line-height: 4.6rem; text-align: center; font-size: 1.4rem; margin-top: 3rem; transition: all .3s; padding-bottom: 4px; box-sizing: content-box; }
.about-link .list .btn span { display: flex; align-items: center; justify-content: center; padding: 0 5rem; border: 2px solid #000; border-radius: 4px; letter-spacing: 0.055rem; transition: all .3s; }
.about-link .list .btn span i { position: absolute; right: 4rem; color: #fff; transition: all .3s; }
.about-link .list .btn:hover { transform: translate3d(0, -5px, 0); }
.about-link .list .btn:hover span { background: #000; color: #fff; padding: 0 6rem 0 4rem; }
.about-link .list .btn:hover span i { right: 3rem; }
.about-link .img img { width: 100%; }

/* awards */
.about-awards { padding: 12rem 0; }
.about-awards .list { margin-top: 10rem; }
.about-awards .list a { position: relative; display: flex; align-items: center; justify-content: space-between; font-size: 1.6rem; color: #fff; padding: 2.5rem; }
.about-awards .list a::before { position: absolute; left: 0; bottom: 0; content: ''; width: 100%; height: 1px; background: rgba(255,255,255, 0.2); }
.about-awards .list a::after { position: absolute; left: 0; bottom: 0; content: ''; width: 100%; height: 100%; background: #ff7061; transform: perspective(1000px) rotateX(90deg); transform-origin: bottom center; opacity: 0; transition: all .3s; }
.about-awards .list a:hover::after { transform: perspective(1000px) rotateX(0deg); opacity: 1; }
.about-awards .list a > span { position: relative; z-index: 2; }
.about-awards .list .title { flex: 0 0 30%; }
.about-awards .list .desc { flex: 0 0 40%; }
.about-awards .list .year { flex: 0 0 10%; text-align: right; margin-left: auto; }

/* video */
.about-video { position: relative; height: 60rem; overflow: hidden; }
.about-video video { position: absolute; left: 50%; top: 50%; transform: translate3d(-50%, -50%, 0); min-width: 100%; min-height: 100%; }
.about-video::before { position: absolute; inset: 0; content:''; background: rgba(0,0,0, 0.4); z-index: 2; }


/* delay */
.about-visual .title-s .gsap-item.onEnter { animation-delay: .3s; }
.about-visual .title-l .gsap-overlay:nth-child(1) .gsap-item.onEnter { animation-delay: .4s; }
.about-visual .title-l .gsap-overlay:nth-child(2) .gsap-item.onEnter { animation-delay: .5s; }
.about-visual .desc .gsap-item.onEnter { animation-delay: .6s; }

/* animation */
.about-visual .sns-wrap.onEnter { animation-name: fade-in-slide-up-50; animation-delay: .7s; }
.about-visual .bg.onEnter { animation-name: fade-in-slide-left-20; animation-duration: 1s; animation-delay: .3s; }
.about-link .img.onEnter { animation-name: fade-in-slide-up-50; animation-duration: 1s; }
.about-awards .list.onEnter { animation-name: fade-in-slide-up-50; animation-duration: 1s; }



@media only screen and (max-width: 1600px) {
  /* .about-slogan strong { font-size: 4.7rem; } */
  /* .about-link li p { font-size: 4.7rem; } */
}

@media only screen and (max-width: 1024px) {
  .about-visual { display: block; max-width: var(--max-width); margin: 0 auto; padding: var(--inner-pad); min-height: inherit; max-height: inherit; }
  .about-visual .slogan { display: block; padding: 9rem 0; }
  .about-visual .slogan-inner { max-width: initial; padding: 0; }
  .about-visual .slogan .title-area .desc { padding-right: 6rem; }
  .about-visual .bg { max-width: initial; min-width: initial; }
  .about-visual .bg::before { content:''; display: block; padding-bottom: 50%; }

  .about-link .list { display: block; padding: 8rem 0; }
  .about-link .list li + li { margin-top: 5rem; }

  .about-awards { padding: 10rem 0; }
  .about-awards .list { margin-top: 8rem; }
  .about-awards .list a { flex-wrap: wrap; }
  .about-awards .list .title { flex: 0 0 100%; }
  .about-awards .list .desc { flex: 0 0 100%; margin: 0.8rem 0 0; }
  .about-awards .list .year { flex: 0 0 100%; text-align: center; margin: 1rem 0 0;}


  /* animation */
  .about-visual .bg.onEnter { animation-name: fade-in-slide-up-50; }
}

@media only screen and (max-width: 768px) {
  .about-visual .bg::before { padding-bottom: 80%; }
}
</style>