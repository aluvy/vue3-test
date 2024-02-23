<template>
  <div id="who-page" ref="elem">

    <section class="section black who-visual">
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

    <section class="section who-overview">
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

    <section class="section white who-service">
      <div class="inner">
        swiper
      </div>
      <div class="bg"></div>
    </section>

    <section class="section white who-client">
      <div class="inner">
        <ContentTitle
          titleS="Our Clients"
          :titleL="['These Are The Customers', 'Who Trusted Us.',]"
          theme="white"
          align="center"
        ></ContentTitle>
      </div>
    </section>

  </div>
</template>

<script>
import '@/assets/css/page-who.css'

import { gsapScrollTrigger, gsapKill } from '@/utils/gsap.js'

import ContentTitle from '@/components/common/ContentTitle.vue'

export default {
  components: {
    ContentTitle,
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