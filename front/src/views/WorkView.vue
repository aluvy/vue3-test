<template>
  <div id="work-view">
    
    <section class="section black work-visual" data-theme="white">
      <VisualFull :titles = "title" :descs = "[date]">
        <template #visual>
          <div class="img">
            <img :src="visual">
          </div>
        </template>
      </VisualFull>
    </section>

    <div id="content">
      fdddsddasdff
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