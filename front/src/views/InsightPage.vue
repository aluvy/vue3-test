<template>
  <div id="insight-page">
    
    <section class="section black culture-visual" data-theme="white">
      <ContentVisual mode="visualTrigger">
        <template #title>
          <ContentTitle
            :titleXL = "[ { delay: 0, text: `INSIGHT` } ]"
            :visualTitle = "[ { delay: 1, text: `더피프티원의 새로운 이야기` } ]"
            theme="black"
            align="center"
          ></ContentTitle>
        </template>
        <template #visual>
          <div class="img" :style="`background-image: url(${visual})`"></div>
        </template>
      </ContentVisual>
    </section>

    <div id="content">
      <section class="section" data-theme="white">
        <InsightList :listGroups="listGroups"></InsightList>

        <div v-if="!listState">All Items Loaded</div>

      </section>
    </div>
  </div>
</template>

<script>
import FetchPageMixin from '@/mixins/FetchPageMixin';

// component
import ContentVisual from '@/components/common/ContentVisual.vue'
import ContentTitle from '@/components/common/ContentTitle.vue'
import InsightList from '@/components/common/InsightList.vue'

// assets
import visual from '@/assets/images/insight/visual.jpg'

export default {
  mixins: [FetchPageMixin],
  components: {
    ContentVisual,
    ContentTitle,
    InsightList,
  },
  data() {
    return {
      visual,
      request: false,
      listNum: 1,
      listState: this.$store.getInsightsStatus,
      listGroups: [],
    }
  },
  methods: {
    async fetchLists() {
      // if ( !this.listState ) return false;
      this.request = false;
      console.log('fetched', this.listNum);
      try {
        await this.$store.dispatch('dispatchInsightList', { num: this.listNum });
        this.listNum++;
        this.setDataLayout();
        this.request = true;
        // console.log('try', this.listNum);
      } catch (e) {
        console.log('error', e);
      }
    },
    setDataLayout() {
      let dataLayout;
      let dataLayout1 = [
        { num: 5, layout: 52 },
        { num: 1, layout: 11 },
        { num: 5, layout: 51 },
      ];
      let dataLayout2 = [
        { num: 5, layout: 52 },
        { num: 1, layout: 11 },
        { num: 5, layout: 53 },
        { num: 4, layout: 41 },
      ];
      let dataLayout3 = [
        { num: 1, layout: 11 },
        { num: 5, layout: 51 },
        { num: 4, layout: 41 },
      ];

      if( this.listNum === 2 ) dataLayout = dataLayout1;
      if( this.listNum === 3 ) dataLayout = dataLayout2;
      if( this.listNum === 4 ) dataLayout = dataLayout3;

      let dataGroup = [...this.$store.getters.getInsights];
      let list = dataLayout.map( a => { return { layout: a.layout, data: dataGroup.splice(0, a.num) } });
      this.listGroups = list;
    },
    isScrollEnd() {
      const scroll = Math.ceil(window.scrollY + window.innerHeight);
      const myScroll = document.body.scrollHeight - document.querySelector("#footer").clientHeight;
      console.log( 'ee',  scroll >= myScroll );
      if ( !scroll >= myScroll ) return;

      console.log('eeeeee', this.request);
      if (this.request) this.fetchLists();
    }
  },
  async mounted() {
    await this.fetchLists();
    this.PageReady();
    window.addEventListener('scroll', this.isScrollEnd);
  },
  unmounted() {
    window.removeEventListener('scroll', this.isScrollEnd);
  }
}
</script>

<style scoped>
@import '@/assets/css/page-insight.css';
</style>