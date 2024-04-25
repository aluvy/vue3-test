<template>
  <div id="insight-page">
    
    <section class="section black culture-visual" data-theme="white">
      <VisualFull
        :titles = "[`INSIGHT`]"
        :descs="[`피프티원의 새로운 이야기`]"
        :dimmed="false"
      >
        <template #visual>
          <div class="img" :style="`background-image: url(${visual})`"></div>
        </template>
      </VisualFull>
    </section>

    <div id="content">
      <section class="section" data-theme="white">
        <InsightList :listGroups="listGroups"></InsightList>
        
        <div class="Requesting" v-if="Requesting"><div class="spin"></div></div>
        
        <transition name="smooth">
          <div class="all-data-loaded" v-if="EndRequestTxt"><p>All data loaded.</p></div>
        </transition>
        
        <div class="infinite-scroll"></div>

      </section>
    </div>
  </div>
</template>

<script>
import FetchPageMixin from '@/mixins/FetchPageMixin';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

// component
import VisualFull from '@/components/visual/VisualFull.vue'
// import ContentTitle from '@/components/common/ContentTitle.vue'
import InsightList from '@/components/common/InsightList.vue'

// assets
import visual from '@/assets/images/insight/visual.jpg'

export default {
  mixins: [FetchPageMixin],
  components: {
    VisualFull,
    // ContentTitle,
    InsightList,
  },
  data() {
    return {
      visual,
      EndRequest: false,
      EndRequestTxt: false,
      Requesting: false,
      NumberOfRequests: 1,
      listGroups: [],
    }
  },
  methods: {
    async fetchLists() {
      if ( this.Requesting ) return;
      if ( this.EndRequest ) return;
      if ( this.NumberOfRequests >= 4 ) {
        this.setEndRequest();
        return;
      }

      const timer = this.NumberOfRequests === 1 ? 0 : 500;

      try {
        this.Requesting = true;
        await this.$store.dispatch('FETCH_GET_INSIGHT_LIST', { num: this.NumberOfRequests });
        setTimeout(()=>{
          this.setDataLayout(this.NumberOfRequests);
          this.NumberOfRequests++;
        }, timer); // 느린척하기
      } catch (e) {
        console.log('error', e);
        this.setEndRequest();
      }
    },
    setEndRequest() {
      this.Requesting = false;
      this.EndRequest = true;
      this.EndRequestTxt = true;
      setTimeout(()=>{
        this.EndRequestTxt = false;
      }, 1000);
      return;
    },
    setDataLayout(num) {
      let dataLayout;
      let dataLayout1 = [
        { num: 5, layout: 52 },
        { num: 1, layout: 11 },
        { num: 5, layout: 51 },
      ];
      let dataLayout2 = [
        { num: 5, layout: 52 },
        { num: 1, layout: 11 },
        { num: 5, layout: 51 },
        { num: 5, layout: 52 },
        { num: 1, layout: 11 },
        { num: 5, layout: 53 },
        { num: 4, layout: 41 },
      ];
      let dataLayout3 = [
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

      if( num === 1 ) dataLayout = dataLayout1;
      if( num === 2 ) dataLayout = dataLayout2;
      if( num === 3 ) dataLayout = dataLayout3;

      let dataGroup = [...this.$store.getters.getInsights];
      let list = dataLayout.map( a => { return { layout: a.layout, data: dataGroup.splice(0, a.num) } });

      this.listGroups = list;
      this.Requesting = false;
    },
    infiniteScroll() {
      const infiniteScroll = document.querySelectorAll('.infinite-scroll');
      if (!infiniteScroll.length) return;

      console.log('infiniteScroll');

      gsap.to('.infinite-scroll', {
        scrollTrigger: {
          start: '90% 90%',
          // end: '0 10px',
          scrub: 1,
          // markers: true,
          onEnter: async () => {
            console.log('onEnter');
            await this.fetchLists();
          },
        },
      });
    }
  },
  async mounted() {
    await this.fetchLists();
    this.PageReady();
    this.infiniteScroll();
  },
}
</script>

<style scoped>
#insight-page { background: #191919; }

/* .infinite-scroll { height: 1rem; background-color: red; } */

.all-data-loaded { height: 10rem; display: flex; align-items: center; justify-content: center; }
.all-data-loaded p { text-align: center; color: #fff; font-size: 1.6rem; opacity: 0.7; }
/* transition */
.smooth-enter-active,
.smooth-leave-active { transition: height .3s; }
#insight-page .all-data-loaded.smooth-leave-to { height: 0; overflow: hidden; }



.Requesting { display: flex; align-items: center; justify-content: center; padding: 5rem; animation: fade-in .3s; }
.Requesting .spin { width: 5rem; height: 5rem; border-radius: 5rem; border: 3px solid rgba(255,255,255, 0.2); border-right-color: #ff7061; animation: spin 1s infinite linear; }

@keyframes spin {
  0% { transform: rotate(0) scale(1); }
  50% { transform: rotate(180deg) scale(0.8); }
  100% { transform: rotate(360deg) scale(1); }
}

</style>