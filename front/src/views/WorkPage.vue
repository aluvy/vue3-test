<template>
  <div id="work-page">
    
    <section class="section black work-visual" data-theme="white">
      <VisualFull :titles = "[`Finding the right one is`, `what we do best.`]" :descs = "[`What We Made`]">
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

      <section class="section" data-theme="white">
        
      </section>

      <section class="section" data-theme="white">
        <PageLink :Links="[
          { url: '/contact-us', title: `CONTACT US`, bg: '' },
          { url: '/contact-us', title: `CONTACT US`, bg: '' },
        ]"></PageLink>
      </section>

    </div>

  </div>
</template>

<script>
import FetchPageMixin from '@/mixins/FetchPageMixin'
// '@/mixins/fetchPageMixin';

// component
import VisualFull from '@/components/visual/VisualFull.vue'
import ContentTitle from '@/components/common/ContentTitle.vue'
import WorkList from '@/components/common/WorkList.vue'
import PageLink from '@/components/common/PageLink.vue'

// assets
import video from '@/assets/images/work/video.mp4'

export default {
  mixins: [FetchPageMixin],
  components: {
    VisualFull,
    ContentTitle,
    WorkList,
    PageLink
  },
  data() {
    return {
      video,
      listNum: 1,
      listState: this.$store.getWorksStatus,
      listGroups: [],
      // data: [],
      stats: [ 11, 104, 138 ],

      prevPage: { title:'Preious', name: 'Culture', link: '/culture', bg: '' },
      nextPage: { title: 'Next', name: 'About Us', link: '/about', bg: '' },
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