<template>
  <div>
    <swiper
      class="mySwiper"
      :class="{moveStart: moveStart, moveEnd: moveEnd}"
      :modules="modules"
      :direction="'vertical'"
      :allowTouchMove= "false"
      :slides-per-view="1"
      :space-between="0"
      :a11y="true"
      :loop="true"
      :speed=speed
      :draggable="true"
      :observer="true"
      :updateOnWindowResize="true"
      
      :pagination="{
        clickable: true,
        bulletElement: 'button'
      }"
      @swiper="onSwiper"
      @transitionEnd="transitionEnd"
      @transitionStart="transitionStart"
    >
      <swiper-slide v-for="(visual, i) in visuals" :key="visual" :virtualIndex="i">
        <div class="slogan-area">
          <div class="slogan" v-html="visual.slogan"></div>
          <div class="linkto">
            <router-link to="/#">View Project</router-link>
          </div>
        </div>
        <div class="img-area">
          <div class="img" :style="`background-image: url(${visual.img})`">
          </div>
        </div>
      </swiper-slide>
    </swiper>

    <div class="slide-controller">
      <button type="button" class="btn_prev" @click="mySwiper.slidePrev()"><i class="fa fa-angle-left"></i><span class="blind">prev</span></button>
      <button type="button" class="btn_next" @click="mySwiper.slideNext()"><i class="fa fa-angle-right"></i><span class="blind">next</span></button>
    </div>

  </div>
</template>

<script>
import { ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Pagination, A11y, Virtual } from 'swiper/modules';

import image1 from '@/assets/images/main-visual-2024-happy-new-goods.jpg';
import image2 from '@/assets/images/main-visual-golden-time-year-end-party.jpg';
import image3 from '@/assets/images/main-visual-hyundaicard-my-company.png';
import image4 from '@/assets/images/main-visual-tvn-drama-voice-season4.png';
import image5 from '@/assets/images/main-visual-amorepacific.png';
import image6 from '@/assets/images/main-visual-hyundai-n-brand.jpg';
import image7 from '@/assets/images/main-visual-culture.jpg';
import image8 from '@/assets/images/main-visual-company-relocation.jpg';

// https://codepen.io/PeterBrain/pen/eYeEoGW

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    let mySwiper = ref();
    const speed = ref(750);
    const moveStart = ref(false);
    const moveEnd = ref(true);

    const onSwiper = (elem) => {
      mySwiper.value = elem;
      elem.emit("transitionEnd");
    }

    const transitionStart = () => {
      moveStart.value = true;
      moveEnd.value = false;
    }

    const transitionEnd = () => {
      moveStart.value = false;
      moveEnd.value = true;
    }

    return {
      mySwiper,
      onSwiper,
      transitionEnd,
      transitionStart,
      modules: [ Autoplay, Pagination, A11y, Virtual ],

      speed,
      moveStart,
      moveEnd
    };
  },
  data() {
    return {
      visuals: [
        { url: '', img: image1, slogan: '<p><span>2024 Happy</span></p><p><span>New Goods</span></p>' },
        { url: '', img: image2, slogan: '<p><span>Golden Time</span></p><p><span>Year-end</span></p><p><span>Party</span></p>' },
        { url: '', img: image3, slogan: '<p><span>HYUNDAICARD</span></p><p><span>My Company</span></p>' },
        { url: '', img: image4, slogan: '<p><span>TVN Drama</span></p><p><span>Voice</span></p><p><span>Season4</span></p>' },
        { url: '', img: image5, slogan: '<p><span>AMOREPACIFIC</span></p>' },
        { url: '', img: image6, slogan: '<p><span>Hyundai N</span></p><p><span>Brand</span></p>' },
        { url: '', img: image7, slogan: '<p><span>Culture</span></p>' },
        { url: '', img: image8, slogan: '<p><span>Company</span></p><p><span>Relocation</span></p>' },
      ],
    }
  },
  mounted() {
    this.$store.commit('setNoScroll', true);
  },
  unmounted() {
    this.$store.commit('setNoScroll', false);
  },
}
</script>

<style>
:root {
  --mainSwiper-easing: cubic-bezier(0.4, 0, 0.2, 1);
  --mainSwiper-duration: 660ms;
  --mainSwiper-delay: 550ms;
  --mainSwiper-subDelay: 550ms;
}

.mySwiper { width: 100%; height: var(--vh); background: #000; overflow: hidden; z-index: 4; }
.mySwiper .swiper-wrapper { transition-delay: var(--mainSwiper-delay); transition-timing-function: var(--mainSwiper-easing); }
.mySwiper .swiper-slide { position: relative; width: 100%; height: var(--vh); transition-timing-function: ease-out; }

/* img area */
.mySwiper .swiper-slide .img-area { width: 100%; height: var(--vh); z-index: 1; }
.mySwiper .swiper-slide .img-area .img { position: relative; width: 100%; height: 100%; background-position: center; background-size: cover; background-repeat: no-repeat; transform: scale(0.5); transition-property: transform; transition-duration: var(--mainSwiper-duration); transition-timing-function: var(--mainSwiper-easing); }
.mySwiper.moveStart .swiper-slide .img-area .img { transform: scale(0.5); }
.mySwiper.moveEnd .swiper-slide.swiper-slide-active .img-area .img { transform: scale(1.01); }

/* dimmed */
.mySwiper .swiper-slide .img-area .img::before { position: absolute; left: 0; top: 0; display: block; content:''; width: 100%; height: 100%; background: rgba(0,0,0, 0.4); opacity: 1; transition-property: opacity; transition-duration: var(--mainSwiper-duration); }
.mySwiper.moveStart .swiper-slide .img-area .img::before { opacity: 0; }


.mySwiper .slogan-area { position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); width: 100%; max-width: var(--max-width); padding: var(--inner-pad); max-height: var(--vh); /* opacity: 0; */ z-index: 2; }
.mySwiper .slogan-area .slogan { font-size: 6.3rem; line-height: 1.2; font-weight: 700; color: #fff; }
.mySwiper .slogan-area .slogan p { overflow: hidden; }
.mySwiper .slogan-area .slogan p span { display: block; width: fit-content; transform: translateY(0); transition-property: transform; transition-delay: 0; transition-duration: .5s; }


.mySwiper.moveStart .swiper-slide:not(.swiper-slide-active) .slogan-area .slogan p span { transform: translateY(-100%); transition-delay: var(--mainSwiper-subDelay); }
.mySwiper.moveEnd .swiper-slide:not(.swiper-slide-active) .slogan-area .slogan p span { transform: translateY(0); transition-delay: var(--mainSwiper-delay); }

.mySwiper.moveStart .swiper-slide-active .slogan-area .slogan p span { transform: translateY(100%); transition-duration: 0s; }
.mySwiper.moveEnd .swiper-slide-active .slogan-area .slogan p span { transform: translateY(0); }


.mySwiper .slogan-area .linkto { font-size: 1.6rem; color: #fff; line-height: 1.9; letter-spacing: 0.065em; margin: 2.5rem 0 0; overflow: hidden; }
.mySwiper .slogan-area .linkto a { position: relative; display: block; width: fit-content; opacity: 0; transition: opacity .3s; transition-delay: var(--mainSwiper-delay); }
.mySwiper .slogan-area .linkto a::after { position: absolute; left: 0; bottom: 0; content: ''; display: block; width: 0; height: 2px; background: #fff; transition: width .3s; }
.mySwiper .slogan-area .linkto a:hover::after { width: 100%; }
.mySwiper.moveEnd .slogan-area .linkto a { opacity: 1; }



/* pagination */
.swiper-pagination { position: fixed; right: 9rem; top: 50%; transform: translateY(-50%); display: flex; flex-direction: column; align-items: flex-end; z-index: 9; }
.swiper-pagination-bullet { padding: 0.8rem 0; }
.swiper-pagination-bullet::before { content:''; display: block; width: 1.5rem; height: 2px; background: #fff; opacity: 0.5; transition: all .3s; }
.swiper-pagination-bullet-active::before { width: 3rem; opacity: 1; }





/* controller */
.slide-controller { position: fixed; left: 9rem; bottom: 5rem; display: flex; align-items: center; z-index: 5; }
.slide-controller button { position: relative; width: 4.4rem; height: 4.4rem; font-size: 1rem; line-height: 1.2rem; color: #fff; border-radius: 100%; border: 1px solid rgba(255,255,255, 0.5); }
.slide-controller button + button { margin-left: 1.4rem; }
.slide-controller button i { transition: all .25s var(--ease-InOutExpo); }
.slide-controller button::after { position: absolute; left: calc(50% - 0.7rem); top: calc(50% - 0.8px); content:''; display: block; width: 1.4rem; height: 1px; background: #fff; transform: scaleX(0); transition: transform 0.25s var(--ease-InOutExpo); }
.slide-controller button:hover::after { transform: scaleX(1); }
.slide-controller button.btn_prev:hover i { transform: translateX(-0.6rem); }
.slide-controller button.btn_next:hover i { transform: translateX(0.6rem); }
</style>