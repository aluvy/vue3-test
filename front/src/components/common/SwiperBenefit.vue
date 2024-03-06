<template>
  <swiper
    class="bfSwiper"
    :modules="modules"
    :slidesPerView="2"
    :centeredSlides="true"
    :loop="true"
    :draggable="true"
    :speed=300
    :pagination="{
      clickable: true,
      bulletElement: 'button'
    }"
    :observer="true"
    :observeSlideChildren="true"
    :observeParents="true"
    @swiper="onSwiper"
    @transitionStart="transitionStart"
    @transitionEnd="transitionEnd"
    @observerUpdate="observerUpdate"
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
import { Pagination, Autoplay, A11y } from 'swiper/modules';

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

    const onSwiper = (swiper) => {
      mySwiper.value = swiper;
      swiper.emit("transitionEnd");
    }

    const transitionStart = () => {
      // setPagination(swiper.realIndex);
    }

    const transitionEnd = () => {

    }

    const observerUpdate = () => {
      console.log('observerUpdate');
    }

    return {
      mySwiper,
      onSwiper,
      modules: [ Pagination, Autoplay, A11y ],

      transitionStart,
      transitionEnd,
      observerUpdate
    }
  },
  mounted() {

    // document.addEventListener("resize", ()=>{

    //   this.mySwiper.update();
    // })

  }
}
</script>

<style>
/* service | swiper */
.bfSwiper { position: relative; width: 100%; overflow: hidden; touch-action: pan-y; margin-top: 8rem; }
.bfSwiper .swiper-wrapper { position: relative; width: 100%; height: 100%; display: flex; z-index: 1; transition-property: transform; }
.bfSwiper .swiper-slide { position: relative; width: 100%; height: 100%; flex-shrink: 0; padding: 0 3rem; opacity: 0.3; transition: opacity .3s; }
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
</style>