<template>
  <div id="insight-view">
    
    <section class="section black culture-visual" data-theme="white">
      <ContentVisual mode="visualTrigger" :dimmed="true">
        <template #title>
          <ContentTitle
            :titleL = "title"
            :desc = "[ { delay: 1, text: date } ]"
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
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import FetchPageMixin from '@/mixins/FetchPageMixin';

// component
import ContentVisual from '@/components/common/ContentVisual.vue'
import ContentTitle from '@/components/common/ContentTitle.vue'

// assets
// import visual from '@/assets/images/insight/visual.jpg'

export default {
  mixins: [FetchPageMixin],
  components: {
    ContentVisual,
    ContentTitle,
  },
  data() {
    return {
      visual: '',
      title: [],
      date: '',
    }
  },
  methods: {
    async getStoreData() {
      let data = this.$store.getters.getInsights;
      
      if(data.length < 1) {
        await this.fetchLists();
        data = this.$store.getters.getInsights;
      }
      const insightId = this.$route.path.split("/")[2];
      const item = data.filter( x => String(x.idx) === insightId)[0];
      
      this.title = item.title;
      this.title = this.title.map((o,i)=>{
        return { delay: i, text: o }
      });

      this.date = item.date;
      this.date = `${this.date.slice(0,4)}.${this.date.slice(4,6)}`;

      this.visual = item.visual;
    },
    async fetchLists() {
      try {
        await this.$store.dispatch('FETCH_GET_ALL_INSIGHT_LIST', { num: this.NumberOfRequests });
      } catch (e) {
        console.log('error', e);
      }
    },
  },
  update() {
    this.getStoreData();
  },
  async mounted() {
    await this.getStoreData();
    this.PageReady();
  }
}
</script>

<style scoped>
#insight-view { background: #191919;}
</style>