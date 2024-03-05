<template>
  <div id="insight-page">
    
    <section class="section black culture-visual" data-theme="light">
      <ContentVisual>
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
      insight
    </div>
  </div>
</template>

<script>
// import '@/assets/css/page-insight.css'
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
    ContentTitle
  },
  data() {
    return {
      visual
    }
  },
}
</script>

<style scoped>
@import '@/assets/css/page-insight.css';
</style>