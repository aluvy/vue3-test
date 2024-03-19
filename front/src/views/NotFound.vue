<template>
  <div id="error-page">

    error

    
  </div>
</template>

<script>
import PageMixin from '@/mixins/PageMixin';

export default {
  components: {
  },
  mixins: [PageMixin],
  data() {
    return {
    }
  },
  async mounted() {
    await this.$nextTick();
    // gsapParallaxTrigger();
  },
}
</script>

<style scoped>
/* @import '@/assets/css/page-who.css'; */
</style>