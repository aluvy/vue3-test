<template>
  <div id="error-page">

    error

    
  </div>
</template>

<script>
import FetchPageMixin from '@/mixins/FetchPageMixin';

export default {
  components: {
  },
  mixins: [FetchPageMixin],
  data() {
    return {
    }
  },
  async mounted() {
    await this.$nextTick();
    // gsapParallaxTrigger();
    this.PageReady();
  },
}
</script>

<style scoped>
/* @import '@/assets/css/page-who.css'; */
</style>