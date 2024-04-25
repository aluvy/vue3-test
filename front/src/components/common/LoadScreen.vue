<template>
  <div id="load-screen">
    <span class="mask-top" data-position="top"></span>
    <span class="mask-right" data-position="right"></span>
    <span class="mask-bottom" data-position="bottom"></span>
    <span class="mask-left" data-position="left"></span>
  </div>
</template>

<script>
import { gsapLoader, gsapLoaderEnd } from '@/utils/gsap.js';
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['isLoading']),
  },
  watch: {
    isLoading(n) {
      if ( !n ) {
        gsapLoader();
      } else {
        gsapLoaderEnd();
      }
    }
  }
}
</script>

<style scoped>
#load-screen > span { position:fixed; z-index: 9999; background:#191919; }
#load-screen .mask-top { left: 0; top: 0; right: 0; bottom: 50%; }
#load-screen .mask-right { left: 50%; top: 0; right: 0; bottom: 0; }
#load-screen .mask-bottom { left: 0; top: 50%; right: 0; bottom: 0; }
#load-screen .mask-left { left: 0; top: 0; right: 50%; bottom: 0; }
</style>