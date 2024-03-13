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
      listNum: 1,
      listState: this.$store.getInsightsStatus,
      listGroups: [],
    }
  },
  methods: {
    async fetchLists() {
      // if ( !this.listState ) return false;
      try {
        await this.$store.dispatch('dispatchInsightList', { num: this.listNum });
        this.listNum++;
        this.setDataLayout();
        // console.log('try', this.listNum);
      } catch (e) {
        console.log('error', e);
      }
    },
    setDataLayout() {
      const dataLayout = [
        { num: 5, layout: 52 },
        { num: 1, layout: 11 },
        { num: 5, layout: 51 },
        { num: 5, layout: 52 },
        { num: 1, layout: 11 },
        { num: 5, layout: 53 },
        { num: 4, layout: 41 },
        { num: 1, layout: 11 },
        { num: 5, layout: 51 },
        { num: 4, layout: 41 },
      ];
      let dataGroup = [...this.$store.getters.getInsights];
      let list = dataLayout.map( a => {
        return { layout: a.layout, data: dataGroup.splice(0, a.num) };
      });
      // let list = dataGroup;
      this.listGroups = list;
    }
  },
  async mounted() {
    await this.fetchLists();
    // this.listGroups = this.$store.getters.getInsights;

    // const dataLayout = [
    //   { num: 4, layout: 41 },
    //   { num: 5, layout: 51 },
    //   { num: 1, layout: 11 },
    //   { num: 4, layout: 41 },
    //   { num: 5, layout: 53 },
    //   { num: 1, layout: 11 },
    //   { num: 5, layout: 52 },
    //   { num: 5, layout: 51 },
    //   { num: 1, layout: 11 },
    //   { num: 5, layout: 52 },
    // ];
    // let dataGroup = [...this.$store.getters.getInsights];
    // let list = dataLayout.map( a => {
    //   return { layout: a.layout, data: dataGroup.splice(0, a.num) };
    // });
    // let list = dataGroup;
    // this.listGroups = list;

    this.PageReady();
  }
}
</script>

<style scoped>
@import '@/assets/css/page-insight.css';
</style>