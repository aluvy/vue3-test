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
          <div class="stats-cont">
            <ul>
              <li>
                <strong class="count" data-count="11">11</strong>
                <span>years</span>
                <p>Trough years of experience Having Gained experience</p>
              </li>
              <li>
                <strong class="count" data-count="104">104</strong>
                <span>members</span>
                <p>With specialties in each field Creative Professionals</p>
              </li>
              <li>
                <strong class="count" data-count="138">138</strong>
                <span>projects</span>
                <p>Focus on projects through selection and focus</p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section class="section white" data-theme="white">
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
    LinkPagePrevNext
  },
  data() {
    return {
      video,
      listNum: 1,
      listState: this.$store.getWorksStatus,
      listGroups: [],
      // data: [],
      stats: [ 11, 104, 138 ],

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
.stats-cont { margin-top: 6rem; }
.stats-cont ul { display: flex; align-items: flex-start; justify-content: space-between; }
.stats-cont li { flex: 0 1 20%; text-align: center; }
.stats-cont li strong { display: block; font-size: 9rem; color: #6d6d6d; line-height: 1; }
.stats-cont li span { display: block; font-weight: 500; font-size: 1.8rem; color: #6d6d6d; margin-top: 4rem; }
.stats-cont li p { font-size: 1.6rem; color: #000; font-weight: 500; word-break: keep-all; line-height: 1.8; margin-top: 3rem; }
</style>