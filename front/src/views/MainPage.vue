<template>
  <section id="main-page" data-theme="light">
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
    >
      <swiper-slide v-for="(visual, i) in visuals" :key="visual" :virtualIndex="i">
        <div class="slogan-area">
          <div class="slogan">
            <strong v-for="word in visual.slogan" :key="word"><span>{{ word }}</span></strong>
          </div>
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

  </section>
</template>

<script>
// import '@/assets/css/page-main.css'
import PageMixin from '@/mixins/PageMixin';
import { ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Pagination, A11y, Virtual } from 'swiper/modules';

// assets
import image1 from '@/assets/images/main/visual-2024-happy-new-goods.jpg';
import image2 from '@/assets/images/main/visual-golden-time-year-end-party.jpg';
import image3 from '@/assets/images/main/visual-hyundaicard-my-company.png';
import image4 from '@/assets/images/main/visual-tvn-drama-voice-season4.png';
import image5 from '@/assets/images/main/visual-amorepacific.png';
import image6 from '@/assets/images/main/visual-hyundai-n-brand.jpg';
import image7 from '@/assets/images/main/visual-culture.jpg';
import image8 from '@/assets/images/main/visual-company-relocation.jpg';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  mixins: [PageMixin],
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

    return {
      mySwiper,
      onSwiper,
      transitionEnd,
      transitionStart,
      modules: [ Autoplay, Pagination, A11y, Virtual ],

      speed,
      moveStart,
      direction
    };
  },
  data() {
    return {
      visuals: [
        { url: '', img: image1, slogan: ['2024', 'Happy', 'New', 'Goods'] },
        { url: '', img: image2, slogan: ['Golden', 'Time', 'Year-end', 'Party'] },
        { url: '', img: image3, slogan: ['HYUNDAICARD', 'My', 'Company'] },
        { url: '', img: image4, slogan: ['TVN', 'Drama', 'Voice', 'Season4'] },
        { url: '', img: image5, slogan: ['AMOREPACIFIC'] },
        { url: '', img: image6, slogan: ['Hyundai', 'N', 'Brand'] },
        { url: '', img: image7, slogan: ['Culture'] },
        { url: '', img: image8, slogan: ['Company', 'Relocation'] },
      ],
    }
  },
  mounted() {
    document.documentElement.classList.add('rock-scroll');
    this.$store.commit('setFooter', false);
  },
  unmounted() {
    document.documentElement.classList.remove('rock-scroll');
    this.$store.commit('setFooter', true);
  },
}
</script>

<style scoped>
@import '@/assets/css/page-main.css';
</style>