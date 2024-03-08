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
      <WorkList :listgroups="listgroups"></WorkList>
      ddddsadsfds<br>ddddsadsfds<br>ddddsadsfds<br>ddddsadsfds<br>ddddsadsfds<br>ddddsadsfds<br>ddddsadsfds<br>ddddsadsfds<br>ddddsadsfds<br>ddddsadsfds<br>ddddsadsfds<br>ddddsadsfds<br>ddddsadsfds<br>ddddsadsfds<br>ddddsadsfds<br>ddddsadsfds<br>ddddsadsfds<br>ddddsadsfds<br>ddddsadsfds<br>ddddsadsfds<br>ddddsadsfds<br>ddddsadsfds<br>ddddsadsfds<br>ddddsadsfds<br>ddddsadsfds<br>ddddsadsfds<br>ddddsadsfds<br>ddddsadsfds<br>ddddsadsfds<br>ddddsadsfds<br>ddddsadsfds<br>ddddsadsfds<br>ddddsadsfds<br>ddddsadsfds<br>ddddsadsfds<br>ddddsadsfds<br>ddddsadsfds<br>ddddsadsfds<br>ddddsadsfds<br>ddddsadsfds<br>ddddsadsfds<br>ddddsadsfds<br>ddddsadsfds<br>ddddsadsfds<br>ddddsadsfds<br>ddddsadsfds<br>ddddsadsfds<br>ddddsadsfds<br>ddddsadsfds<br>ddddsadsfds<br>ddddsadsfds<br>ddddsadsfds<br>ddddsadsfds<br>ddddsadsfds<br>ddddsadsfds<br>ddddsadsfds<br>ddddsadsfds<br>ddddsadsfds<br>ddddsadsfds<br>ddddsadsfds<br>ddddsadsfds<br>ddddsadsfds<br>ddddsadsfds<br>ddddsadsfds<br>ddddsadsfds<br>ddddsadsfds<br>ddddsadsfds<br>
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
      listgroups: [],
    }
  },
  methods: {
    async fetchLists() {
      // if ( !this.listState ) return false;
      try {
        await this.$store.dispatch('dispatchInsightList', { num: this.listnum });
        this.listnum++;
        console.log('try', this.listnum);
      } catch (e) {
        console.log('error', e);
      }
    },
  },
  async mounted() {
    // await this.$nextTick();
    // setTimeout(()=>{
    //   this.PageReady();
    // }, 100);
    await this.fetchLists();
    this.listgroups = this.$store.getters.getInsights;
    this.PageReady();
  }
}
</script>

<style scoped>
@import '@/assets/css/page-work.css';
</style>