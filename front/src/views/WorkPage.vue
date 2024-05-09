<template>
  <div id="work-page">
    
    <section class="section black work-visual" data-theme="white">
      <VisualFull
        :titles = "[`Finding the right one is`, `what we do best.`]"
        :descs = "[`What We Made`]"
      >
        <template #visual>
          <video preload="auto" loop autoplay muted playsinline><source :src="video" type="video/mp4"></video>
        </template>
      </VisualFull>
    </section>

    <div id="content">
      
      <WorkList :listGroups="listGroups"></WorkList>

      <section class="section white stats" data-theme="black">
        <div class="inner">
          <ContentTitle
            :titleL = "[ { delay: 0, text: `Project Stats` } ]"
            theme="white"
            align="center"
          ></ContentTitle>
          <StatsCount :stats="[
            { count: 11, title: 'years', desc: 'Trough years of experience Having Gained experience' },
            { count: 104, title: 'members', desc: 'With specialties in each field Creative Professionals' },
            { count: 138, title: 'projects', desc: 'Focus on projects through selection and focus' },
          ]"></StatsCount>
        </div>
      </section>

      <section class="section black" data-theme="white">
        <LinkPagePrevNext :Links="[
          { url: '/culture', stitle: `Previous`, title: `Culture`, img: imgLinkBGCulture },
          { url: '/about', stitle: `Next`, title: `About Us`, img: imgLinkBGAbout },
        ]"></LinkPagePrevNext>
      </section>

    </div>

  </div>
</template>

<script>
import FetchPageMixin from '@/mixins/FetchPageMixin'

// component
import VisualFull from '@/components/visual/VisualFull.vue'
import ContentTitle from '@/components/common/ContentTitle.vue'
import WorkList from '@/components/common/WorkList.vue'
import StatsCount from '@/components/common/StatsCount.vue'
import LinkPagePrevNext from '@/components/common/LinkPagePrevNext.vue'

// assets
import video from '@/assets/images/work/video.mp4'
import imgLinkBGCulture from '@/assets/images/work/link-bg-culture.jpg'
import imgLinkBGAbout from '@/assets/images/work/link-bg-about.jpg'

export default {
  mixins: [FetchPageMixin],
  components: {
    VisualFull,
    ContentTitle,
    WorkList,
    StatsCount,
    LinkPagePrevNext
  },
  data() {
    return {
      video,
      listNum: 1,
      listState: this.$store.getWorksStatus,
      listGroups: [],
      // data: [],

      imgLinkBGCulture,
      imgLinkBGAbout
    }
  },
  methods: {
    async fetchLists() {
      // if ( !this.listState ) return false;
      try {
        await this.$store.dispatch('FETCH_GET_WORK_LIST', { num: this.listNum });
        this.listnum++;
        this.setDataLayout();
        // console.log('try', this.listNum);
      } catch (e) {
        console.log('error', e);
      }
    },
    setDataLayout() {
      const dataLayout = [
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
      let dataGroup = [...this.$store.getters.getWorks];
      let list = dataLayout.map( a => { return { layout: a.layout, data: dataGroup.splice(0, a.num) } });
      this.listGroups = list;
    }
  },
  async mounted() {
    await this.fetchLists();
    this.PageReady();
  }
}
</script>

<style scoped>
#work-page { background: #191919; }
.stats { padding: 8rem 0 12rem; }
</style>