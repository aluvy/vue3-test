<template>
  <div id="insight-page">
    
    <section class="section black culture-visual" data-theme="light">
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
      <section class="section" data-theme="light">
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
        console.log('try', this.listNum);
      } catch (e) {
        console.log('error', e);
      }
    },
  },
  async mounted() {
    await this.fetchLists();
    this.listGroups = this.$store.getters.getInsights;
    this.PageReady();
  }
}
</script>

<style scoped>
@import '@/assets/css/page-insight.css';
</style>