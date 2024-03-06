<template>
  <swiper
    class="svSwiper gsap-item"
    :modules="modules"
    :loop="true"
    :draggable="true"
    :speed=0
    @swiper="onSwiper"
    @transitionStart="transitionStart"
  >
    <swiper-slide v-for="slide in slides" :key="slide">
      <strong>{{ slide.title }}</strong>
      <p>{{ slide.desc }}</p>
    </swiper-slide>
    <div class="svSwiper-pagination">
      <div class="current">
        <ul ref="currentUl">
          <li v-for="(item, i) in slides" :key="i">{{ i + 1 }}</li>
        </ul>
      </div>
      <div class="divide">/</div>
      <div class="total">{{ slides.length }}</div>
    </div>
    <div class="svSwiper-controller">
      <button type="button" class="btn_prev" @click="mySwiper.slidePrev()"><i class="fa fa-angle-left"></i><span class="blind">prev</span></button>
      <button type="button" class="btn_next" @click="mySwiper.slideNext()"><i class="fa fa-angle-right"></i><span class="blind">next</span></button>
    </div>
  </swiper>
</template>

<script>
import { ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, A11y } from 'swiper/modules';

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
}
</script>

<style>
/* service | swiper */
.svSwiper { position: relative; width: 100%; overflow: hidden; z-index: 4; touch-action: pan-y; margin-top: 3rem; padding: 0 22rem 5.6rem; }
.svSwiper .swiper-wrapper { position: relative; width: 100%; height: 100%; display: flex; z-index: 1; transition-property: transform; }
.svSwiper .swiper-slide { position: relative; width: 100%; height: 100%; text-align: center; flex-shrink: 0; transition-property: transform; display: block; transition-property: all; }
.svSwiper .swiper-slide strong,
.svSwiper .swiper-slide p { transform: translate3d(-3rem, 0, 0); opacity: 0; transition-property: transform opacity; transition-duration: .5s; word-break: keep-all; }
.svSwiper .swiper-slide strong { display: block; color: #000; font-size: 2rem; }
.svSwiper .swiper-slide p { font-size: 1.4rem; color: #333; margin-top: 1rem; }
/* service | swiper | active */
.svSwiper.swiper-backface-hidden .swiper-slide { backface-visibility: hidden; opacity: 0 !important; transform: translateZ(0); }
.svSwiper.swiper-backface-hidden .swiper-slide-active { opacity: 1!important; }
.svSwiper .swiper-slide-active strong,
.svSwiper .swiper-slide-active p { transform: translate3d(0, 0, 0); opacity: 1; }
/* service | swiper | controller */
.svSwiper-controller button { position: absolute; top: 0; width: 4.4rem; height: 4.4rem; font-size: 1.9rem; line-height: 1.2rem; color: #000; z-index: 99; }
.svSwiper-controller .btn_prev { left: 7rem; }
.svSwiper-controller .btn_next { right: 7rem; }
.svSwiper-controller button i { transition: all .3s var(--ease-InOutExpo); }
.svSwiper-controller button::after { position: absolute; left: calc(50% - 1.1rem); top: calc(50% - 1px); content:''; display: block; width: 2.2rem; height: 2px; background: #000; transform: scaleX(0); transition: transform 0.3s var(--ease-InOutExpo); }
.svSwiper-controller button:hover::after { transform: scaleX(1); }
.svSwiper-controller button.btn_prev:hover i { transform: translate3D(-1rem, 0, 0); }
.svSwiper-controller button.btn_next:hover i { transform: translate3D(1rem, 0, 0); }
/* service | swiper | pagination */
.svSwiper-pagination { position: absolute; left: 0; bottom: 0; display: flex; align-items: center; justify-content: center; width: 100%; font-size: 1.6rem; color: #000; line-height: 2rem; text-align: center; letter-spacing: 0.6rem; }
.svSwiper-pagination .current,
.svSwiper-pagination .current ul li,
.svSwiper-pagination .device,
.svSwiper-pagination .total { flex: 0 0 2rem; text-align: center; overflow: hidden; }
.svSwiper-pagination .current ul { display: flex; align-items: center; transition: transform .3s; }
.svSwiper-pagination .divide { margin: 0 0.6rem; }

.svSwiper.onEnter { animation-name: scale-out-1; animation-duration: .3s; }

@media only screen and (max-width: 1024px) {
  .svSwiper { padding: 0 7rem 5.6rem; }
  .svSwiper-controller .btn_prev { left: 0; }
  .svSwiper-controller .btn_next { right: 0; }
}
@media only screen and (max-width: 768px) {
  .svSwiper { padding: 0; }
  .svSwiper-controller { position: relative; width: 100%; max-width: 42rem; margin: 0 auto; }
  .svSwiper-controller button { top: initial; bottom: 0; }
  .svSwiper-pagination { position: initial; left: initial; bottom: initial; line-height: 4.4rem; margin: 2rem 0 0; }
}
</style>