<template>
  <div id="work-view">
    
    <section class="section black work-visual" data-theme="white">
      <VisualFull
        :titles = "title"
        :descs = "[date]"
      >
        <template #visual>
          <div class="img">
            <img :src="visual">
          </div>
        </template>
      </VisualFull>
    </section>

    <div id="content">
      fdddsddasdff

      <section class="section white" data-theme="white">
        <ul class="">
          <li>
            <router-link to="">
              <div class="txt">
                <span>Previous Project</span>
                <strong>HYUNDAICARD My Company</strong>
                <svg class="next-arrow" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 39 12"><line class="top" x1="23" y1="-0.5" x2="29.5" y2="6.5" stroke="#ffffff;"></line><line class="bottom" x1="23" y1="12.5" x2="29.5" y2="5.5" stroke="#ffffff;"></line></svg>
              </div>
              <div class="bg"><img src="" alt=""></div>
            </router-link>
          </li>
          <li>
            <router-link to="">
              <div class="txt">
                <span>Next Project</span>
                <strong>AMOREPACIFIC</strong>
                <svg class="next-arrow" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 39 12"><line class="top" x1="23" y1="-0.5" x2="29.5" y2="6.5" stroke="#ffffff;"></line><line class="bottom" x1="23" y1="12.5" x2="29.5" y2="5.5" stroke="#ffffff;"></line></svg>
              </div>
              <div class="bg"></div>
            </router-link>
          </li>
        </ul>
        <!-- <LinkPagePrevNext :Links="[
          { url: '/culture', stitle: `Previous`, title: `Culture`, img: imgLinkBGCulture },
          { url: '/about', stitle: `Next`, title: `About Us`, img: imgLinkBGAbout },
        ]"></LinkPagePrevNext> -->
      </section>
    </div>

  </div>
</template>

<script>
import FetchPageMixin from '@/mixins/FetchPageMixin';

// component
import VisualFull from '@/components/visual/VisualFull.vue'
// import ContentTitle from '@/components/common/ContentTitle.vue'

// assets
// import visual from '@/assets/images/insight/20240101-visual.jpg'
import visual from '@/assets/images/insight/visual.jpg'

export default {
  mixins: [FetchPageMixin],
  components: {
    VisualFull,
    // ContentTitle,
  },
  data() {
    return {
      visual,
      title: [],
      date: '',
      data: [
        { title: '', desc: '', image: '', },
        { title: '', desc: '', image: '', },
        { title: '', desc: '', image: '', },
        { title: '', desc: '', image: '', },
        { title: '', desc: '', image: '', },
      ],
    }
  },
  mounted() {
    this.title = ['HYUNDAICARD', 'My Company'];
    // this.title = this.title.map((o,i)=>{
    //   return { delay: i, text: o }
    // })

    this.date = 'Web & Mobile Site';

    this.PageReady();
  }
}
</script>

<style scoped>

</style>