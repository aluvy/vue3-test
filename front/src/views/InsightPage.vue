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
      request: true,
      listNum: 1,
      listState: this.$store.getInsightsStatus,
      listGroups: [],
    }
  },
  methods: {
    async fetchLists() {
      if ( !this.request ) return;

      // console.log('fetched', this.listNum);
      try {
        
        this.request = false;
        await this.$store.dispatch('FETCH_GET_INSIGHT_LIST', { num: this.listNum });
        this.setDataLayout(this.listNum);
        // this.listNum++;
        // console.log(this.listNum);
        
        // console.log('try', this.listNum);
      } catch (e) {
        console.log('error', e);
      }
    },
    setDataLayout(num) {
      // console.log('setDataLayout', num);
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

      if( num === 1 ) dataLayout = dataLayout1;
      if( num === 2 ) dataLayout = dataLayout2;
      if( num === 3 ) dataLayout = dataLayout3;

      let dataGroup = [...this.$store.getters.getInsights];
      let list = dataLayout.map( a => { return { layout: a.layout, data: dataGroup.splice(0, a.num) } });
      this.listGroups = list;

      setTimeout(()=>{
        this.request = true;
      }, 2000);

      // gsapRefresh();
    },
    // infiniteHandler($state) {
    //   console.log('infiniteHandler', $state);

    //   // var formData = new FormData();
		// 	// 	formData.append('currPage', this.page);
		// 	// 	formData.append('pageSize', '10');
		// 	// 	this.$store
		// 	// 		.dispatch('FETCH_GET_PRODUCT_LIST', formData)
		// 	// 		.then(({ data }) => {
		// 	// 			if (data.productPageList.length) {
		// 	// 				console.log(this.page);
		// 	// 				this.page += 1;
		// 	// 				this.$store.commit('SET_PRODUCT_LIST', data.productPageList);
		// 	// 				$state.loaded();
		// 	// 			} else {
		// 	// 				$state.complete();
		// 	// 			}
		// 	// 		});
		// 	// 	console.log(this.$store.state.productList);
    // },
    isScrollEnd() {
      // const scroll = Math.ceil(window.scrollY + window.innerHeight);
      // const myScroll = document.body.scrollHeight - document.querySelector("#footer").clientHeight;
      // // console.log( 'ee',  scroll >= myScroll );
      // if ( !scroll >= myScroll ) return;

      // console.log('isScrollEnd', this.request);
      // if (this.request) this.fetchLists();
    }
  },
  updated() {
    console.log('updated');
    // this.listNum = 1;
  },
  async mounted() {
    this.listNum = 1;
    await this.fetchLists();
    this.PageReady();
    window.addEventListener('scroll', this.isScrollEnd);
  },
  unmounted() {
    this.listNum = 1;
    window.removeEventListener('scroll', this.isScrollEnd);
  }
}
</script>

<style scoped>
@import '@/assets/css/page-insight.css';
</style>