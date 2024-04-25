<template>
  <section id="main-page" data-theme="white" :style="`background-image: url(${image1})`">
    <SwiperMain :slides="visuals"></SwiperMain>
  </section>
</template>

<script>
import FetchPageMixin from '@/mixins/FetchPageMixin';

// components
import SwiperMain from '@/components/common/SwiperMain.vue'

// assets
import image1 from '@/assets/images/main/visual-2024-happy-new-goods.jpg';
import image2 from '@/assets/images/main/visual-golden-time-year-end-party.jpg';
import image3 from '@/assets/images/main/visual-hyundaicard-my-company.jpg';
import image4 from '@/assets/images/main/visual-tvn-drama-voice-season4.jpg';
import image5 from '@/assets/images/main/visual-amorepacific.jpg';
import image6 from '@/assets/images/main/visual-hyundai-n-brand.jpg';
import image7 from '@/assets/images/main/visual-culture.jpg';
import image8 from '@/assets/images/main/visual-company-relocation.jpg';

export default {
  mixins: [FetchPageMixin],
  components: {
    SwiperMain,
  },
  data() {
    return {
      image1,
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
  async mounted() {
    document.documentElement.classList.add('rock-scroll');
    this.$store.commit('setFooter', false);
    this.PageReady();
  },
  unmounted() {
    document.documentElement.classList.remove('rock-scroll');
    this.$store.commit('setFooter', true);
  },
}
</script>

<style scoped>
#main-page { background-color: #000; background-size: 0px; background-repeat: no-repeat; background-position: -10rem; }
</style>