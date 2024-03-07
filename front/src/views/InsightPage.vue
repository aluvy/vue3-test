<template>
  <div id="insight-page">
    
    <section class="section black culture-visual" data-theme="light">
      <ContentVisual mode="parallax">
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
        <InsightList :listgroups="listgroups"></InsightList>

        <div v-if="!listState">All Items Loaded</div>

        {{ comments }}
        <InfiniteLoading @infinite="loadData" />

      </section>
    </div>
  </div>
</template>

<!-- <script setup>
  import { ref } from "vue";
  import InfiniteLoading from "v3-infinite-loading";
  import "v3-infinite-loading/lib/style.css";

  let comments = ref([]);
  let page = 1;
  const loadData = async $state => {
    console.log("loading...");

    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/comments?_limit=10&_page=" + page
      );
      const json = await response.json();
      if (json.length < 10) $state.complete();
      else {
        comments.value.push(...json);
        $state.loaded();
      }
      page++;
    } catch (error) {
      $state.error();
    }
  };
</script> -->

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
    // InfiniteLoading,
  },
  data() {
    return {
      visual,
      listnum: 1,
      listState: this.$store.getInsightsStatus,
      listgroups: [],
      // comments: [],
      // page: 1,
    }
  },
  methods: {
    async fetchLists() {
      try {
        await this.$store.dispatch('dispatchInsightList', { num: this.listnum });
        this.listnum++;
        console.log('try', this.listnum);
      } catch (e) {
        console.log('error', e);
      }
    },
    // async loadData(state) {
    //   console.log("loading...", state);
    //   try {
    //     const response = await fetch(
    //       "https://jsonplaceholder.typicode.com/comments?_limit=10&_page=" +
    //         this.page
    //     );
    //     const json = await response.json();
    //     if (json.length < 10) state.complete();
    //     else {
    //       this.comments.push(...json);
    //       state.loaded();
    //     }
    //     this.page++;
    //   } catch (error) {
    //     state.error();
    //   }
    // },
  },
  async created() {
    await this.fetchLists();
    this.listgroups = this.$store.getters.getInsights;
    this.onPageReady();
  }
}
</script>

<style scoped>
@import '@/assets/css/page-insight.css';
</style>