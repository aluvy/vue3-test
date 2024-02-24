<template>
  <div id="culture-page">
    
    <section class="section black culture-visual" data-theme="light">
      <ContentVisual>
        <template #title>
          <ContentTitle
            :titleXL = "[ { delay: 2, text: `Here,` }, { delay: 3, text: `The Fifty One` } ]"
            :visualTitle = "[ { delay: 4, text: `Culture` } ]"
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
      ddddsadsfds
    </div>

  </div>
</template>

<script>
import '@/assets/css/page-culture.css'
import PageMixin from '@/mixins/PageMixin';

// component
import ContentVisual from '@/components/common/ContentVisual.vue'
import ContentTitle from '@/components/common/ContentTitle.vue'

// assets
import visual from '@/assets/images/culture/visual.jpg'

export default {
  mixins: [PageMixin],
  components: {
    ContentVisual,
    ContentTitle,
  },
  data() {
    return {
      visual,
    }
  },
}
</script>