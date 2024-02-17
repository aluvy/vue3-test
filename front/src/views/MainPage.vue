<template>
  <div>
    <!-- <div class="slide-wrap">
      <div class="main-slide"></div>
    </div> -->

    <swiper
      :modules="modules"
      :direction="'vertical'"
      :slides-per-view="1"
      :space-between="0"
      :a11y="true"
      :loop="true"
      :speed="0"
      :autoplay="{
        delay: 1000,
        disableOnInteraction: true,
      }"
      navigation
      :pagination="{ clickable: true }"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
    >
      <swiper-slide v-for="visual in visuals" :key="visual">
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
      <button type="button" class="btn_prev" @click="swiper.slidePrev"><i class="fa fa-angle-left"></i><span class="blind">prev</span></button>
      <button type="button" class="btn_next" @click="test"><i class="fa fa-angle-right"></i><span class="blind">next</span></button>
    </div>

  </div>
</template>

<script>
import { Swiper, SwiperSlide, useSwiper } from 'swiper/vue';
import { Autoplay, Navigation, Pagination, A11y } from 'swiper/modules';
// import 'swiper/css';
import 'swiper/css/navigation';
// import 'swiper/css/A11y';
import 'swiper/css/pagination';


import image1 from '@/assets/images/main-visual-2024-happy-new-goods.jpg';
import image2 from '@/assets/images/main-visual-golden-time-year-end-party.jpg';
import image3 from '@/assets/images/main-visual-hyundaicard-my-company.png';
import image4 from '@/assets/images/main-visual-tvn-drama-voice-season4.png';
import image5 from '@/assets/images/main-visual-amorepacific.png';
import image6 from '@/assets/images/main-visual-hyundai-n-brand.jpg';
import image7 from '@/assets/images/main-visual-culture.jpg';
import image8 from '@/assets/images/main-visual-company-relocation.jpg';


export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const swiper = useSwiper();
    // const swiperSlide = useSwiperSlide();

    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log('slide change');
    };
    return {
      swiper,
      // swiperSlide,
      onSwiper,
      onSlideChange,
      modules: [Autoplay, Navigation, Pagination, A11y],
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
  created() {
    console.log(this.swiper);
  },
  methods: {
    test() {
      console.log(this.swiper);
    }
  }
}
</script>

<style>
.swiper { position: fixed; left: 0; top: 0; width: 100%; height: var(--vh); background: #000; overflow: hidden; z-index: 4; }
.swiper-wrapper { /* position: fixed; */ left: 0; top: 0; width: 100%; /*height: var(--vh); overflow: hidden;*/ z-index: 4; }
.swiper-slide { position: relative; width: 100%; height: var(--vh); }
.swiper-slide .img-area { position: absolute; left: 0; top: 0; width: 100%; height: var(--vh); z-index: 1; }
.swiper-slide .img-area .img { width: 100%; height: 100%; background-position: center; background-size: cover; background-repeat: no-repeat; transform: scale(0.5); transition: transform .3s; }

.swiper-slide-prev {  }
.swiper-slide-active {  }
.swiper-slide-next {}




.slogan-area { position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); width: 100%; max-width: var(--max-width); padding: var(--inner-pad); max-height: var(--vh); /* display: none; */ z-index: 2; }
.slogan-area .slogan { font-size: 6.3rem; line-height: 1.2; font-weight: 700; color: #fff; }
.slogan-area .slogan p { overflow: hidden; }
.slogan-area .slogan p span { display: block; width: fit-content; }



.slogan-area .linkto { font-size: 1.6rem; color: #fff; line-height: 1.9; letter-spacing: 0.065em; margin: 2.5rem 0 0; overflow: hidden; }
.slogan-area .linkto a { position: relative; display: block; width: fit-content; }
.slogan-area .linkto a::after { position: absolute; left: 0; bottom: 0; content: ''; display: block; width: 0; height: 2px; background: #fff; transition: width .3s; }
.slogan-area .linkto a:hover::after { width: 100%; }

/* active */
.swiper-slide-active.swiper-slide .img-area .img { transform: scale(1); }


/* 
.swiper-slide-prev .slogan-area .slogan p span { animation: fade-out-slide-up-50 .3s; }

.swiper-slide-active .slogan-area { display: block; }
.swiper-slide-active .slogan-area .slogan p span { animation: fade-in-slide-up-50 .3s; animation-delay: .2s; animation-fill-mode: backwards; }
.swiper-slide-active .slogan-area .linkto a { animation: fade-in-slide-up-50 .3s; }


.swiper-slide-prev .img-area .img,
.swiper-slide-next .img-area .img { }
.swiper-slide-active .img-area .img { transform: scale(1);  } */


/* .main-slide { position: absolute; left: 0; top: 0; right: 0; bottom: 0; background:url(@/assets/images/main-visual-2024-happy-new-goods.jpg); background-size: cover; } */



.slide-controller { position: fixed; left: 9rem; bottom: 5rem; display: flex; align-items: center; z-index: 5; }
.slide-controller button { position: relative; width: 4.4rem; height: 4.4rem; font-size: 1rem; line-height: 1.2rem; color: #fff; border-radius: 100%; border: 1px solid rgba(255,255,255, 0.5); }
.slide-controller button + button { margin-left: 1.4rem; }
.slide-controller button i { transition: all .25s var(--ease-InOutExpo); }
.slide-controller button::after { position: absolute; left: calc(50% - 0.7rem); top: calc(50% - 0.8px); content:''; display: block; width: 1.4rem; height: 1px; background: #fff; transform: scaleX(0); transition: transform 0.25s var(--ease-InOutExpo); }

.slide-controller button:hover::after { transform: scaleX(1); }

.slide-controller button.btn_prev:hover i { transform: translateX(-0.6rem); }
.slide-controller button.btn_next:hover i { transform: translateX(0.6rem); }



</style>