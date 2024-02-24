<template>
  <div id="work-page">
    
    <section class="section black work-visual" data-theme="light">
      <ContentVisual>
        <template v-slot:title>
          <ContentTitle
            :titleXL="[
              { delay: 2, text: `Finding the right one is` },
              { delay: 3, text: `what we do best.` }
            ]"
            :descL="[ { delay: 4, text: `What We Made` } ]"
            theme="black"
            align="center"
          ></ContentTitle>
          <div class="scroll-down-wrap no-border">
            <a href="#" class="section-down-arrow ">
              <svg class="nectar-scroll-icon" viewBox="0 0 30 45" enable-background="new 0 0 30 45">
                <path class="nectar-scroll-icon-path" fill="none" stroke="#ffffff" stroke-width="2" stroke-miterlimit="10" d="M15,1.118c12.352,0,13.967,12.88,13.967,12.88v18.76  c0,0-1.514,11.204-13.967,11.204S0.931,32.966,0.931,32.966V14.05C0.931,14.05,2.648,1.118,15,1.118z"></path>
              </svg>
            </a>
          </div>
        </template>
        <template v-slot:visual>
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