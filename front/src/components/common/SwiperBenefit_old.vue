<template>
  <swiper
    class="bfSwiper"
    ref="bfSwiper"
    :modules="modules"
    :spaceBetween="0"
    :slidesPerView="'auto'"
    :activeIndex="0"
    :centeredSlides="true"
    :loop="true"

    :draggable="true"
    :speed="300"
    :pagination="{
      clickable: true,
      bulletElement: 'button'
    }"
    
    @swiper="onSwiper"
    @transitionStart="transitionStart"
    @transitionEnd="transitionEnd"
    @observerUpdate="observerUpdate"
    @beforeResize="beforeResize"
  >
    <swiper-slide v-for="slide in slides" :key="slide">
      <div class="bubble">
        <p>{{ slide.desc }}</p>
      </div>
      <strong>{{ slide.title }}</strong>
    </swiper-slide>
    
  </swiper>
</template>

<script>
import { ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, A11y } from 'swiper/modules';

// import 'swiper/css';
// import 'swiper/css/pagination';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  props: {
    slides: Object,
  },
  setup() {
    let mySwiper = ref();
    // let bfSwiper = ref();

    const onSwiper = (swiper) => {
      mySwiper.value = swiper;
      // console.log(swiper.activeIndex);

      
      // swiper.loopDestroy();
      // swiper.loopCreate();
      // swiper.slideTo(0);
      // swiper.emit("transitionEnd");
      // console.log(swiper);
    }

    const transitionStart = () => {
      // setPagination(swiper.realIndex);

    }

    const transitionEnd = () => {
      // console.log(swiper.activeIndex);
    }

    const observerUpdate = () => {
      // console.log('observerUpdate');
    }

    const beforeResize = (swiper) => {
      console.log('beforeResize', swiper);
      // swiper.attachEvents();
      // swiper.destroy(false, true);
      // onSwiper();
      // swiper.init(bfSwiper.value);
      swiper.update();
      // swiper.updateSize();
      // swiper.updateSlides();
      // swiper.slideTo(swiper.activeIndex);
      // console.log(onSwiper);
    }

    return {
      mySwiper,
      onSwiper,
      modules: [ Pagination, A11y ],

      transitionStart,
      transitionEnd,
      observerUpdate,
      beforeResize
    }
  },
  // methods: {
  //   swiperInit() {
  //     const bfSwiper = this.$refs.bfSwiper;
  //     const options = {
  //       // :modules="modules"
  //       spaceBetween: 0,
  //       slidesPerView: 'auto',
  //       activeIndex: 0,
  //       centeredSlides: true,
  //       loopL: true,

  //       draggable: true,
  //       speed: 300,
  //       pagination: {
  //         clickable: true,
  //         bulletElement: 'button'
  //       },
        
  //       // @swiper="onSwiper"
  //       // @transitionStart="transitionStart"
  //       // @transitionEnd="transitionEnd"
  //       // @observerUpdate="observerUpdate"
  //       // @beforeResize="beforeResize"
  //     }

  //     new Swiper(bfSwiper, options);
  //     console.log(bfSwiper);
  //   },
  // },
  // mounted() {
  //   console.log('mounted', this.swiperInit);
  // }
}
</script>

<style>
/* service | swiper */
.bfSwiper { position: relative; width: 100%; overflow: hidden; touch-action: pan-y; margin-top: 8rem; }
.bfSwiper .swiper-wrapper { position: relative; width: 100%; height: 100%; display: flex; z-index: 1; transition-property: transform; }
.bfSwiper .swiper-slide { position: relative; width: 70%; height: 100%; flex-shrink: 0; opacity: 0.3; transition: opacity .3s; }
.bfSwiper .bubble { position: relative; color: #000; font-size: 1.4rem; line-height: 1.6; padding: 5rem; padding-left: 10rem; border-radius: 1rem; }
.bfSwiper .bubble::before { position: absolute; left: 3rem; top: 0; content: open-quote open-quote; letter-spacing: -0.8rem; font-size: 13rem; color: rgba(0,0,0, 0.4); font-family: 'sans-serif'; }
.bfSwiper .bubble::after { position: absolute; left: calc(50% - 1.5rem); bottom: -1rem; content: ''; display: block; width: 3rem; height: 3rem; border-radius: 0.6rem; background: #6d6d6d; transform: rotate(45deg); opacity: 0; }
.bfSwiper .swiper-slide > strong { display: block; text-align: center; margin-top: 4rem; }

.bfSwiper .bubble,
.bfSwiper .bubble::before,
.bfSwiper .bubble::after { transition: all .3s;}

/* active */
.bfSwiper .swiper-slide-active { opacity: 1; }
.bfSwiper .swiper-slide-active .bubble { color: #fff; background: #6d6d6d; }
.bfSwiper .swiper-slide-active .bubble::before { color: rgba(0,0,0, 0.1); }
.bfSwiper .swiper-slide-active .bubble::after { opacity: 1; }

/* pagination */
.bfSwiper .swiper-pagination { display: flex; align-items: center; justify-content: center; margin-top: 8rem; }
.bfSwiper .swiper-pagination-bullet { width: 3rem; height: 3rem; opacity: 0.25; transition: opacity .3s; }
.bfSwiper .swiper-pagination-bullet + .swiper-pagination-bullet { margin-left: 8px; }
.bfSwiper .swiper-pagination-bullet::before { content: ''; display: block; width: 100%; height: 4px; background: #666; }
.bfSwiper .swiper-pagination-bullet-active { opacity: 1; }



@media only screen and (max-width: 1024px) {
  /* .bfSwiper { padding: 0 7rem 5.6rem; } */

}
@media only screen and (max-width: 768px) {
  /* .bfSwiper { padding: 0; } */
}
@media only screen and (max-width: 425px) {
  .bfSwiper .swiper-slide { width: 100%; }
}
</style>