<template>
  <div>
    <swiper
      class="mySwiper"
      :class="{moveStart: moveStart, moveEnd: moveEnd, up: !direction, down: direction}"
      :modules="modules"
      :direction="'vertical'"
      :effect="'fade'"
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
import { Autoplay, Pagination, A11y, Virtual, EffectFade } from 'swiper/modules';

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
    let mySwiper = ref();
    const speed = ref(750);
    const moveStart = ref(false);
    const moveEnd = ref(true);
    const direction = ref(true);   // up: false, down: true
    const translate = ref(0);
    // const beforeIdx = ref(null);

    const onSwiper = (swiper) => {
      mySwiper.value = swiper;
      swiper.emit("transitionEnd");
      setTimeout(() => { setCustomClass(swiper) }, 1);
    }

    const transitionStart = (swiper) => {
      moveStart.value = true;
      moveEnd.value = false;
      direction.value = ( translate.value > swiper.translate ) ? true : false;
      translate.value = swiper.translate;
      setTimeout(() => { setCustomClass(swiper) }, 1);
    }

    const transitionEnd = () => {
      moveStart.value = false;
      moveEnd.value = true;
    }

    const setCustomClass = (swiper) => {
      const { slides, activeIndex, previousIndex } = swiper;
      
      slides.forEach((a, i)=>{
        a.classList.remove('custom-prev');
        a.classList.remove('custom-next');
        a.classList.remove('custom-beforeIdx');
        if( i === activeIndex ) {
          a.classList.add('custom-active');
        } else if ( i < activeIndex ) {
          a.classList.add('custom-prev');
        } else {
          a.classList.add('custom-next');
        }
        if( i === previousIndex) {
          a.classList.add('custom-beforeIdx');
        }
      });
    }

    return {
      mySwiper,
      onSwiper,
      transitionEnd,
      transitionStart,
      modules: [ Autoplay, Pagination, A11y, Virtual, EffectFade ],

      speed,
      moveStart,
      moveEnd,
      direction
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
    document.documentElement.classList.add('rock-scroll');
  },
  unmounted() {
    document.documentElement.classList.remove('rock-scroll');
  },
}
</script>

<style>
:root {
  --mainSwiper-speed: 750ms;
  --mainSwiper-easing: cubic-bezier(0.4, 0, 0.2, 1);
  --mainSwiper-duration: 660ms;
  --mainSwiper-delay: 600ms;
  --mainSwiper-subDelay: 550ms;


  /* img scale */
  --mainSwiper-active-scale-duration: 600ms;
  --mainSwiper-active-scale-delay: 550ms;

  --mainSwiper-prev-scale-duration: 600ms;
  --mainSwiper-prev-scale-delay: 550ms;

  /* dimmed */
  --mainSwiper-dimmed-duration: 400ms;
  --mainSwiper-active-dimmed-delay: 550ms;

    /* slogan */
  --mainSwiper-prev-slogan-duration: 600ms;
  --mainSwiper-prev-slogan-delay: 550ms;
}

.mySwiper { width: 100%; height: var(--vh); background: #000; overflow: hidden; z-index: 4; }
.mySwiper .swiper-slide { position: relative; width: 100%; height: var(--vh); z-index: 1; }
.mySwiper .swiper-slide-active { z-index: 5; }
.mySwiper .swiper-slide-prev,
.mySwiper .swiper-slide-next { z-index: 2; }



/*** imgarea ******************************************************/
.mySwiper .swiper-slide .img-area { width: 100%; height: var(--vh); z-index: 1; transition-property: transform; transition-duration: 0s; }

/* imgarea - show */
.mySwiper.down .swiper-slide-prev,
.mySwiper.up .swiper-slide-next { opacity: 1!important; }
/* .mySwiper .custom-active,
.mySwiper .custom-beforeIdx { opacity: 1!important; } */

.mySwiper .swiper-slide-active .img-area,
.mySwiper.down .swiper-slide-prev .img-area,
.mySwiper.up .swiper-slide-next .img-area { opacity: 1!important; }

/* custom-beforeIdx */

/* imgarea - active motion */
.mySwiper .swiper-slide-active .img-area { transform: translate3D(0, 0, 0); transition-duration: 750ms; }
.mySwiper.moveStart.down .swiper-slide-active .img-area { transform: translate3D(0, 100%, 0); transition-duration: 0s; }
.mySwiper.moveStart.up .swiper-slide-active .img-area { transform: translate3D(0, -100%, 0); transition-duration: 0s; }

/* imgarea - prev & next motion */
.mySwiper .swiper-slide-prev .img-area,
.mySwiper .swiper-slide-next .img-area { transition-duration: 0s; }
.mySwiper .custom-prev .img-area { transform: translate3D(0, -100%, 0); transition-delay: var(--mainSwiper-prev-scale-delay); transition-duration: 750ms; }
.mySwiper .custom-next .img-area { transform: translate3D(0, 100%, 0); transition-delay: var(--mainSwiper-prev-scale-delay); transition-duration: 750ms; }


/* imgarea - img - scale */
.mySwiper .swiper-slide .img-area .img { position: relative; width: 100%; height: 100%; background-position: center; background-size: cover; background-repeat: no-repeat; transform: scale(0.5); transition-property: transform; transition-duration: var(--mainSwiper-dimmed-duration); transition-timing-function: var(--mainSwiper-easing); }
.mySwiper.moveEnd .swiper-slide-active .img-area .img { transform: scale(1.01); transition-delay: var(--mainSwiper-active-scale-delay); }






/*** imgarea - img - dimmed ******************************************************/
.mySwiper .swiper-slide .img-area .img::before { position: absolute; left: 0; top: 0; display: block; content:''; width: 100%; height: 100%; background: rgba(0,0,0, 0.4); transition-property: opacity; transition-duration: var(--mainSwiper-dimmed-duration); }
.mySwiper.moveStart .swiper-slide .img-area .img::before { opacity: 0; }
.swiper-slide.swiper-slide-active .img-area .img::before { opacity: 1; }
.mySwiper.moveStart .swiper-slide.swiper-slide-active .img-area .img::before { transition-delay: 0s; }
.mySwiper.moveEnd .swiper-slide.swiper-slide-active .img-area .img::before { transition-delay: var(--mainSwiper-active-dimmed-delay); }


/*** slogan-area ******************************************************/
.mySwiper .slogan-area { position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); width: 100%; max-width: var(--max-width); padding: var(--inner-pad); max-height: var(--vh); overflow: hidden; opacity: 0; z-index: 2; }
.mySwiper .slogan-area .slogan { font-size: 6.3rem; line-height: 1.2; font-weight: 700; color: #fff; }
.mySwiper .slogan-area .slogan p { overflow: hidden; }
.mySwiper .slogan-area .slogan p span { display: block; width: fit-content; transform: translate3D(0, 120%, 0); transition-property: transform; transition-duration: var(--mainSwiper-prev-slogan-duration); }

/* slogan - show */
.mySwiper .swiper-slide-active .slogan-area,
.mySwiper.moveStart.down .swiper-slide-prev .slogan-area,
.mySwiper.moveStart.up .swiper-slide-next .slogan-area {  opacity: 1; }

/* slogan - active motion */
.mySwiper .swiper-slide-active .slogan-area .slogan p span { transform: translate3D(0, 0, 0); }
.mySwiper.moveStart.down .swiper-slide-active .slogan-area .slogan p span { transform: translate3D(0, 120%, 0); transition-duration: 0s; }
.mySwiper.moveStart.up .swiper-slide-active .slogan-area .slogan p span { transform: translate3D(0, -120%, 0); transition-duration: 0s; }

/* slogan - prev & next motion */
.mySwiper.moveStart.down .swiper-slide-prev .slogan-area .slogan p span { transform: translate3D(0, -120%, 0); transition-delay: var(--mainSwiper-prev-slogan-delay); }
.mySwiper.moveStart.up .swiper-slide-next .slogan-area .slogan p span { transform: translate3D(0, 120%, 0); transition-delay: var(--mainSwiper-prev-slogan-delay); }

/* slogan - link */
.mySwiper .slogan-area .linkto { font-size: 1.6rem; color: #fff; line-height: 1.9; letter-spacing: 0.065em; margin: 2.5rem 0 0; overflow: hidden; }
.mySwiper .slogan-area .linkto a { position: relative; display: block; width: fit-content; opacity: 0; transform: translate3d(0, 120%, 0); transition-property: transform, opacity; transition-duration: 0.5s, 0.2s; }

/* slogan - link - show */
.mySwiper .swiper-slide-active .slogan-area .linkto a { opacity: 1; }

/* slogan - link - active motion */
.mySwiper .swiper-slide-active .slogan-area .linkto a { transform: translate3D(0, 0, 0); }
.mySwiper.moveStart.down .swiper-slide-active .linkto a { transform: translate3D(0, 120%, 0); transition-duration: 0s; }
.mySwiper.moveStart.up .swiper-slide-active .linkto a { transform: translate3D(0, -120%, 0); transition-duration: 0s; }

/* slogan - link - prev & next motion */
.mySwiper.moveStart.down .swiper-slide-prev .slogan-area .linkto a { transform: translate3D(0, -120%, 0); transition-delay: var(--mainSwiper-prev-slogan-delay); }
.mySwiper.moveStart.up .swiper-slide-next .slogan-area .linkto a { transform: translate3D(0, 120%, 0); transition-delay: var(--mainSwiper-prev-slogan-delay); }

/* slogan - link hover motion */
.mySwiper .slogan-area .linkto a::after { position: absolute; left: 0; bottom: 0; content: ''; display: block; width: 0; height: 2px; background: #ffffff; transition: width .3s; }
.mySwiper .slogan-area .linkto a:hover::after { width: 100%; }



/*** pagination ******************************************************/
.swiper-pagination { position: fixed; right: 9rem; top: 50%; transform: translateY(-50%); display: flex; flex-direction: column; align-items: flex-end; z-index: 9; }
.swiper-pagination-bullet { padding: 0.8rem 0; }
.swiper-pagination-bullet::before { content:''; display: block; width: 1.5rem; height: 2px; background: #fff; opacity: 0.5; transition: all .3s; }
.swiper-pagination-bullet-active::before { width: 3rem; opacity: 1; }


/*** controller ******************************************************/
.slide-controller { position: fixed; left: 9rem; bottom: 5rem; display: flex; align-items: center; z-index: 5; }
.slide-controller button { position: relative; width: 4.4rem; height: 4.4rem; font-size: 1rem; line-height: 1.2rem; color: #fff; border-radius: 100%; border: 1px solid rgba(255,255,255, 0.5); }
.slide-controller button + button { margin-left: 1.4rem; }
.slide-controller button i { transition: all .25s var(--ease-InOutExpo); }
.slide-controller button::after { position: absolute; left: calc(50% - 0.7rem); top: calc(50% - 0.8px); content:''; display: block; width: 1.4rem; height: 1px; background: #fff; transform: scaleX(0); transition: transform 0.25s var(--ease-InOutExpo); }
.slide-controller button:hover::after { transform: scaleX(1); }
.slide-controller button.btn_prev:hover i { transform: translateX(-0.6rem); }
.slide-controller button.btn_next:hover i { transform: translateX(0.6rem); }



/* @media only screen and (max-width: 1024px) {
  .slide-controller { left: 4rem; }
} */
</style>