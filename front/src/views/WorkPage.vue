<template>
  <div id="work-page">
    
    <section class="section black work-visual" data-theme="light">
      <ContentVisual>
        <template #title>
          <ContentTitle
            :titleXL="[ { delay: 2, text: `Finding the right one is` }, { delay: 3, text: `what we do best.` } ]"
            :descL="[ { delay: 4, text: `What We Made` } ]"
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
import '@/assets/css/page-work.css'
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
}
</script>

<style>

</style>