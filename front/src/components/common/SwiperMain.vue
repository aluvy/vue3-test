<template>
  <swiper
    class="mySwiper"
    :class="{moveStart: moveStart, moveEnd: !moveStart, up: !direction, down: direction}"
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
    :mousewheel="true"
    :autoplay="{
      delay: 3000,
      disableOnInteraction: false,
    }"
    :pagination="{
      clickable: true,
      bulletElement: 'button'
    }"
    @swiper="onSwiper"
    @transitionStart="transitionStart"
    @transitionEnd="transitionEnd"
    @touchEnd="touchMove"
  >
    <swiper-slide v-for="(slide, i) in slides" :key="slide" :virtualIndex="i">
      <div class="slogan-area">
        <div class="slogan">
          <strong v-for="word in slide.slogan" :key="word"><span>{{ word }}</span></strong>
        </div>
        <div class="linkto">
          <router-link to="/#">View Project</router-link>
        </div>
      </div>
      <div class="img-area">
        <div class="img" :style="`background-image: url(${slide.img})`">
        </div>
      </div>
    </swiper-slide>
  </swiper>

  <div class="slide-controller">
    <button type="button" class="btn_prev" @click="mySwiper.slidePrev()"><i></i><span class="blind">prev</span></button>
    <button type="button" class="btn_next" @click="mySwiper.slideNext()"><i></i><span class="blind">next</span></button>
  </div>
</template>

<script>
import { ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Pagination, A11y, Virtual } from 'swiper/modules';

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
    const speed = ref(650);
    const moveStart = ref(false);
    const direction = ref(true);   // up: false, down: true
    const translate = ref(0);

    const onSwiper = (swiper) => {
      mySwiper.value = swiper;
      swiper.emit("transitionEnd");
      setTimeout(() => { setCustomClass(swiper) }, 1);
    }

    const transitionStart = (swiper) => {
      moveStart.value = true;
      direction.value = ( translate.value > swiper.translate ) ? true : false;
      translate.value = swiper.translate;
      setTimeout(() => { setCustomClass(swiper) }, 1);
    }

    const transitionEnd = () => {
      moveStart.value = false;
    }

    const setCustomClass = (swiper) => {
      const { slides, activeIndex, previousIndex } = swiper;
      try {
        slides.forEach((a, i)=>{
          a.classList.remove('custom-prev');
          a.classList.remove('custom-next');
          a.classList.remove('custom-beforeIdx');

          if( i === activeIndex )       a.classList.add('custom-active');
          else if ( i < activeIndex )   a.classList.add('custom-prev');
          else                          a.classList.add('custom-next');
          if( i === previousIndex)      a.classList.add('custom-beforeIdx');
        });
      } catch(e) {
        console.log(e);
      }
    }

    const touchMove = (swiper, event) => {
      console.log(swiper, event);
    }

    return {
      mySwiper,
      onSwiper,
      transitionEnd,
      transitionStart,
      modules: [ Autoplay, Pagination, A11y, Virtual ],

      speed,
      moveStart,
      direction,
      touchMove
    };
  },
}
</script>

<style>
:root {
  --mainSwiper-easing: cubic-bezier(0.4, 0, 0.2, 1);
  --mainSwiper-delay: 500ms;

  /* img scale */
  --mainSwiper-img-scale-duration: 600ms;

  /* dimmed */
  --mainSwiper-dimmed-duration: 400ms;

    /* slogan */
  --mainSwiper-active-slogan-duration: 600ms;
  --mainSwiper-active-slogan-delay: 0ms;
  --mainSwiper-prev-slogan-duration: 600ms;
  --mainSwiper-prev-slogan-delay: 400ms;
}

.mySwiper { width: 100%; height: var(--vh); background: #000; overflow: hidden; z-index: 4; }
.mySwiper .swiper-wrapper { transition-delay: var(--mainSwiper-delay); transition-timing-function: var(--mainSwiper-easing); }
.mySwiper .swiper-slide { position: relative; width: 100%; height: var(--vh); transition-timing-function: ease-out; }

/*** imgarea ******************************************************/
.mySwiper .swiper-slide .img-area { width: 100%; height: var(--vh); z-index: 1; }
.mySwiper .swiper-slide .img-area .img { position: relative; width: 100%; height: 100%; background-position: center; background-size: cover; background-repeat: no-repeat; transform: scale(0.6); transition-property: transform; transition-duration: var(--mainSwiper-img-scale-duration); transition-timing-function: var(--mainSwiper-easing); }

/* imgarea - img - scale */
.mySwiper.moveStart .swiper-slide .img-area .img { transform: scale(0.5); }
.mySwiper.moveEnd .swiper-slide.swiper-slide-active .img-area .img { transform: scale(1.01); }

/*** imgarea - img - dimmed ******************************************************/
.mySwiper .swiper-slide .img-area .img::before { position: absolute; left: 0; top: 0; display: block; content:''; width: 100%; height: 100%; background: rgba(0,0,0, 0.4); opacity: 1; transition-property: opacity; transition-duration: var(--mainSwiper-dimmed-duration); }
.mySwiper.moveStart .swiper-slide .img-area .img::before { opacity: 0; }

/*** slogan-area ******************************************************/
.mySwiper .slogan-area { position: absolute; left: 50%; top: 50%; transform: translate3D(-50%, -50%, 0); width: 100%; max-width: var(--max-width); padding: var(--inner-pad); max-height: var(--vh); z-index: 2; }
.mySwiper .slogan-area .slogan { display: flex; flex-wrap: wrap; align-items: center; font-size: 8.4rem; line-height: 1.2; font-weight: 700; color: #fff; }
.mySwiper .slogan-area .slogan strong { display: inline-block; overflow: hidden; padding-right: 2rem; }
.mySwiper .slogan-area .slogan strong span { display: inline-block; width: fit-content; word-break: keep-all; transition-property: transform; }
.mySwiper .swiper-slide[data-swiper-slide-index='0'] .slogan { width: 60%; }
.mySwiper .swiper-slide[data-swiper-slide-index='1'] .slogan { width: 60%; }
.mySwiper .swiper-slide[data-swiper-slide-index='2'] .slogan { width: 80%; }
.mySwiper .swiper-slide[data-swiper-slide-index='3'] .slogan { width: 60%; }
.mySwiper .swiper-slide[data-swiper-slide-index='4'] .slogan { width: 100%; }
.mySwiper .swiper-slide[data-swiper-slide-index='5'] .slogan { width: 70%; }
.mySwiper .swiper-slide[data-swiper-slide-index='6'] .slogan { width: 100%; }
.mySwiper .swiper-slide[data-swiper-slide-index='7'] .slogan { width: 50%; }

/* slogan - active motion */
.mySwiper .swiper-slide-active .slogan-area .slogan strong span { transform: translate3D(0, 0, 0); transition-duration: var(--mainSwiper-active-slogan-duration); transition-delay: var(--mainSwiper-active-slogan-delay); }
.mySwiper.moveStart.down .swiper-slide-active .slogan-area .slogan strong span { transform: translate3D(0, 120%, 0); }
.mySwiper.moveStart.up .swiper-slide-active .slogan-area .slogan strong span { transform: translate3D(0, -120%, 0);}

/* slogan - prev & next motion */
.mySwiper .swiper-slide-prev .slogan-area .slogan strong span,
.mySwiper .swiper-slide-next .slogan-area .slogan strong span { transition-duration: var(--mainSwiper-prev-slogan-duration); transition-delay: var(--mainSwiper-prev-slogan-delay); }
.mySwiper.moveStart.down .swiper-slide-prev .slogan-area .slogan strong span { transform: translate3D(0, -120%, 0); }
.mySwiper.moveStart.up .swiper-slide-next .slogan-area .slogan strong span { transform: translate3D(0, 120%, 0); }

/* slogan - link */
.mySwiper .slogan-area .linkto { font-size: 1.6rem; color: #fff; line-height: 1.9; letter-spacing: 0.065em; margin: 2.5rem 0 0; overflow: hidden; }
.mySwiper .slogan-area .linkto a { position: relative; display: block; width: fit-content; opacity: 0; transition-property: transform, opacity; transition-duration: 0.5s, 0.3s; transition-delay: var(--mainSwiper-prev-slogan-delay); }

/* slogan - link - active motion */
.mySwiper.moveEnd .slogan-area .linkto a { transform: translate3D(0, 0, 0); opacity: 1; }
.mySwiper.moveStart.down .slogan-area .linkto a { transform: translate3D(0, 110%, 0); }
.mySwiper.moveStart.up .slogan-area .linkto a { transform: translate3D(0, -110%, 0); }

/* slogan - link - prev & next motion */
.mySwiper.moveStart .swiper-slide-prev .slogan-area .linkto a,
.mySwiper.moveStart .swiper-slide-next .slogan-area .linkto a { transition-delay: var(--mainSwiper-active-slogan-delay); }
.mySwiper.moveStart.down .swiper-slide-prev .slogan-area .linkto a { transform: translate3D(0, -110%, 0); }
.mySwiper.moveStart.up .swiper-slide-next .slogan-area .linkto a { transform: translate3D(0, 110%, 0); }

/* slogan - link hover motion */
.mySwiper .slogan-area .linkto a::after { position: absolute; left: 0; bottom: 0; content: ''; display: block; width: 0; height: 2px; background: #ffffff; transition: width .3s; }
.mySwiper .slogan-area .linkto a:hover::after { width: 100%; }


/*** pagination ******************************************************/
.swiper-pagination { position: fixed; right: 50%; top: 50%; margin-right: 9rem; transform: translate3D( calc(var(--max-width) / 2) , -50%, 0); display: flex; flex-direction: column; align-items: flex-end; z-index: 9; }
.swiper-pagination-bullet { padding: 0.8rem 0; }
.swiper-pagination-bullet::before { content:''; display: block; width: 1.5rem; height: 2px; background: #fff; opacity: 0.5; transition: all .3s; }
.swiper-pagination-bullet-active::before { width: 3rem; opacity: 1; }


/*** controller ******************************************************/
.slide-controller { position: fixed; left: 50%; bottom: 5rem; margin-left: 9rem; transform: translateX(calc(var(--max-width) / 2 * -1)); display: flex; align-items: center; z-index: 5; }
.slide-controller button { position: relative; width: 4.4rem; height: 4.4rem; font-size: 1rem; line-height: 1.2rem; color: #fff; border-radius: 100%; border: 1px solid rgba(255,255,255, 0.5); }
.slide-controller button + button { margin-left: 1.4rem; }
/* button arrow */
.slide-controller button i { position: absolute; left: 50%; top: 50%; display: block; width: 13%; height: 13%; transform: translate3d(-50%, -50%, 0); transition: left .3s var(--ease-InOutExpo); }
.slide-controller button i::before { content:''; display: block; width: 100%; height: 100%; border: 1px solid #fff; border-width: 1px 1px 0 0; }
.slide-controller button.btn_prev i::before { transform: rotate(-135deg); }
.slide-controller button.btn_next i::before { transform: rotate(45deg); }
.slide-controller button i::after { position: absolute; top: 50%; content:''; display: block; width: 0; height: 1px; background: #fff; transform: translate3d(0, -50%, 0); transition: width 0.3s var(--ease-InOutExpo); }
.slide-controller button.btn_prev i::after { left: 0; }
.slide-controller button.btn_next i::after { right: 0; }
/* controller | hover */
.slide-controller button:hover i::after { width: 1.6rem; }
.slide-controller button.btn_prev:hover i { left: calc(50% - 15%); }
.slide-controller button.btn_next:hover i { left: calc(50% + 15%); }



@media only screen and (max-width: 1440px) {
  .swiper-pagination { right: 9rem; margin-right: 0; transform: translate3D(0, -50%, 0); }
  .slide-controller { left: 9rem; margin-left: 0; transform: initial; }
}

@media only screen and (max-width: 1024px) {
  .mySwiper .slogan-area .slogan { font-size: 6.3rem; }
}

@media only screen and (max-width: 768px) {
  .mySwiper .slogan-area .slogan { font-size: 5.8rem; }
  .mySwiper .swiper-slide[data-swiper-slide-index='4'] .slogan { width: 90%; }
  .mySwiper .swiper-slide[data-swiper-slide-index='6'] .slogan { width: 50%; }
  .swiper-pagination { right: 4rem; }
  .slide-controller { left: 4rem; margin-left: 0; transform: initial; }
}

@media only screen and (max-width: 600px) {
  .mySwiper .slogan-area .slogan { font-size: 5rem; }
  .mySwiper .swiper-slide[data-swiper-slide-index='4'] .slogan { width: 100%; }
  .mySwiper .swiper-slide[data-swiper-slide-index='7'] .slogan { width: 100%; }
  .swiper-pagination { display: none; }
}

@media only screen and (max-width: 425px) {
  .mySwiper .slogan-area .slogan { width: 100%; font-size: 4.2rem; }
}

@media only screen and (max-width: 375px) {
  .mySwiper .slogan-area .slogan { font-size: 4rem; }
  .slide-controller { left: 2rem; }
}


/* media query - height */
@media only screen and (max-height: 650px) {
  .mySwiper .slogan-area .slogan { width: calc(100% - 6rem); font-size: 4.4rem; }
  .mySwiper .slogan-area .linkto { margin-top: 1rem; }
  .slide-controller { bottom: 3rem; }
}
</style>