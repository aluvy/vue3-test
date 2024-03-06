<template>
  <section id="main-page" data-theme="light">
    <SwiperMain :slides="visuals"></SwiperMain>
  </section>
</template>

<script>
import PageMixin from '@/mixins/PageMixin';

// components
import SwiperMain from '@/components/common/SwiperMain.vue'

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
  mixins: [PageMixin],
  components: {
    SwiperMain,
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
#main-page { background: #000; }
</style>