<template>
  <div id="work-page">
    
    <section class="section black work-visual" data-theme="light">
      <ContentVisual :dimmed="true" mode="visualTrigger">
        <template #title>
          <ContentTitle
            :titleXL = "[ { delay: 0, text: `Finding the right one is` }, { delay: 1, text: `what we do best.` } ]"
            :visualTitle = "[ { delay: 2, text: `What We Made` } ]"
            theme="black"
            align="center"
          ></ContentTitle>
        </template>
        <template #visual>
          <video preload="auto" loop autoplay muted playsinline><source :src="video" type="video/mp4"></video>
        </template>
      </ContentVisual>
    </section>

    <div id="content">
      ddddsadsfds
    </div>


  </div>
</template>

<script>
import PageMixin from '@/mixins/PageMixin';

// component
import ContentVisual from '@/components/common/ContentVisual.vue'
import ContentTitle from '@/components/common/ContentTitle.vue'

// assets
import video from '@/assets/images/work/video.mp4'

export default {
  mixins: [PageMixin],
  components: {
    ContentVisual,
    ContentTitle,
  },
  data() {
    return {
      video,
    }
  },
  mounted() {
    console.log('video', this.video);
    
    // this.video.addEventListener("DOMContentLoaded", function(){
    //   console.log('DOMContentLoaded')
    //  // Handler when the DOM is fully loaded
    // });
  }
}
</script>

<style scoped>
@import '@/assets/css/page-work.css';
</style>