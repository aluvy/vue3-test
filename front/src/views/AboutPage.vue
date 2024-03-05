<template>
  <div id="about-page" ref="elem">

    <section class="section black about-visual" data-theme="light">
      <ContentVisual type="halfLeft">
        <template #title>
          <ContentTitle
            :pageTitle = "[ { delay: 0, text: `ABOUT US` } ]"
            :titleL = "[ { delay: 1, text: `Awesome` }, { delay: 2, text: `Global Capability` } ]"
            :desc = "[
              { delay: 3, text: `우리는 다양한 프로젝트 경험과 구성인력의 전문화로 조직간 Co-work을 통해 성공적인 프로젝트를 진행합니다.`},
            ]"
            theme="black"
          ></ContentTitle>
          <SnsLink site="about" class="gsap-item"></SnsLink>
        </template>
        <template #visual>
          <div class="img" :style="`background-image: url(${visual})`"></div>
        </template>
      </ContentVisual>
    </section>


    <div id="content">
      <section class="section white about-link" data-theme="dark">
        <div class="inner">
          <ul class="list">
            <li v-for="link in links" :key="link">
              <ContentTitle
                :titleL = "[ { delay: 1, text: `${link.title}` } ]"
                :desc="[ { delay: 2, text: `${link.desc}` } ]"
              ></ContentTitle>
              <router-link class="btn" :to="link.link"><span>{{ link.btn }}<i class="fa-solid fa-arrow-right"></i></span></router-link>
            </li>
          </ul>
        </div>
      </section>

      <section class="section white about-img" data-theme="light">
        <div class="img gsap-item"><img :src="poster" alt=""></div>
      </section>

      <section class="section black about-awards" data-theme="light">
        <div class="inner">
          <ContentTitle
            :titleS = "[ { delay: 1, text: `AWARDS` } ]"
            :titleL = "[
              { delay: 1, text: `We've Received Many` },
              { delay: 1, text: `Awards, And We're Not` },
              { delay: 1, text: `Very Shy About it.` }
            ]"
            theme="black"
            align="center"
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

      <section class="section black" data-theme="light">
        <div class="about-video gsap-item">
          <video preload="auto" loop autoplay muted playsinline><source :src="video" type="video/mp4"></video>
        </div>
      </section>
    </div>

  </div>
</template>

<script>
// import '@/assets/css/page-about.css'
import PageMixin from '@/mixins/PageMixin';

// component
import ContentVisual from '@/components/common/ContentVisual.vue'
import ContentTitle from '@/components/common/ContentTitle.vue'
import SnsLink from '@/components/common/SnsLink.vue'

// assets
import visual from '@/assets/images/about/visual.jpg'
import poster from '@/assets/images/about/poster.jpg'
import video from '@/assets/images/about/video.mp4'

export default {
  components: {
    ContentVisual,
    ContentTitle,
    SnsLink,
  },
  mixins: [PageMixin],
  data() {
    return {
      visual,
      poster,
      video,
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
}
</script>

<style scoped>
@import '@/assets/css/page-about.css';
</style>