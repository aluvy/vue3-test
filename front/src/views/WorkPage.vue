<template>
  <div id="work-page">
    
    <section class="section black work-visual" data-theme="light">
      <ContentVisual :dimmed="true" mode="visualTrigger">
        <template #title>
          <ContentTitle
            :titleXL = "[ { delay: 0, text: `Finding the right one is` }, { delay: 1, text: `what we do best.` } ]"
            :visualTitle = "[ { delay: 2, text: `What We Made` } ]"
            theme="black"
            align="center"
          ></ContentTitle>
        </template>
        <template #visual>
          <video preload="auto" loop autoplay muted playsinline><source :src="video" type="video/mp4"></video>
        </template>
      </ContentVisual>
    </section>

    <div id="content">
      <WorkList :listGroups="listGroups"></WorkList>
    </div>


  </div>
</template>

<script>
import FetchPageMixin from '@/mixins/FetchPageMixin'
// '@/mixins/fetchPageMixin';

// component
import ContentVisual from '@/components/common/ContentVisual.vue'
import ContentTitle from '@/components/common/ContentTitle.vue'
import WorkList from '@/components/common/WorkList.vue'

// assets
import video from '@/assets/images/work/video.mp4'

export default {
  mixins: [FetchPageMixin],
  components: {
    ContentVisual,
    ContentTitle,
    WorkList
  },
  data() {
    return {
      video,
      listNum: 1,
      listState: this.$store.getInsightsStatus,
      listGroups: [],
      data: [],
    }
  },
  methods: {
    async fetchLists() {
      // if ( !this.listState ) return false;
      try {
        await this.$store.dispatch('dispatchWorkList', { num: this.listNum });
        this.listnum++;
        console.log('try', this.listNum);
      } catch (e) {
        console.log('error', e);
      }
    },
  },
  async mounted() {
    await this.fetchLists();
    this.listGroups = this.$store.getters.getInsights;
    const dataGroup = [
      { num: 5, layout: 51 },
      { num: 4, layout: 43 },
      { num: 2, layout: 21 },
      { num: 3, layout: 31 },
      { num: 2, layout: 21 },
      { num: 2, layout: 21 },
      { num: 3, layout: 31 },
      { num: 4, layout: 41 },
      { num: 4, layout: 46 },
      { num: 3, layout: 34 },
      { num: 3, layout: 31 },
      { num: 4, layout: 44 },
      { num: 3, layout: 34 },
      { num: 3, layout: 33 },
      { num: 4, layout: 41 },
      { num: 4, layout: 43 },
      { num: 2, layout: 21 }
    ];
    let testGroup = [...this.$store.getters.getInsights];
    let list = dataGroup.map( a => {
      return { layout: a.layout, data: testGroup.splice(0, a.num) };
    });
    this.listGroups = list;
    this.PageReady();
  }
}
</script>

<style scoped>
@import '@/assets/css/page-work.css';
</style>