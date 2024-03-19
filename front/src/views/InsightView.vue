<template>
  <div id="insight-view">
    
    <section class="section black culture-visual" data-theme="white">
      <ContentVisual mode="visualTrigger" :dimmed="true">
        <template #title>
          <ContentTitle
            :titleXL = "title"
            :visualTitle = "[ { delay: 1, text: date } ]"
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
import PageMixin from '@/mixins/PageMixin';

// component
import ContentVisual from '@/components/common/ContentVisual.vue'
import ContentTitle from '@/components/common/ContentTitle.vue'

// assets
import visual from '@/assets/images/insight/visual.jpg'

export default {
  mixins: [PageMixin],
  components: {
    ContentVisual,
    ContentTitle,
  },
  data() {
    return {
      visual,
      title: [],
      date: '',
    }
  },
  mounted() {

    // const insightId = this.$route.params.insightId;
    const insightId = this.$route.path.split("/")[2];
    const data = this.$store.getters.getInsights;
    const item = data.filter( x => String(x.idx) === insightId);
    
    console.log(insightId, data, item);
    

    this.title = ['2024', 'Happy New Goods'];
    this.title = this.title.map((o,i)=>{
      return { delay: i, text: o }
    })

    this.date = '20240101';
    this.date = `${this.date.slice(0,4)}.${this.date.slice(4,6)}`;

  }
}
</script>

<style scoped>
#insight-view { background: #191919;}
</style>