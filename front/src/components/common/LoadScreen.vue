<template>
  <div id="load-screen" v-if="isLoading">
    <span class="mask-top"></span>
    <span class="mask-right"></span>
    <span class="mask-bottom"></span>
    <span class="mask-left"></span>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['isLoading']),
  },
  methods: {
    setLoading() {
      setTimeout(()=>{ this.$store.commit('setLoading', false) }, 800);  // mask animation time  
    }
  },
  updated() {
    this.setLoading();
  },
  mounted() {
    this.setLoading();
  }
}
</script>

<style scoped>
#load-screen { position: fixed; left: 0; top: 0; right: 0; bottom: 0; overflow: hidden; z-index: 9999; /* animation: fade-in .5s ease;*/ }
#load-screen > span { position:absolute; background:#191919; animation-duration: .8s; animation-timing-function: var(--ease-InOutExpo); animation-fill-mode: forwards; animation-delay: 0s; }
#load-screen .mask-top { left: 0; top: 0; right: 0; bottom: 50%; animation-name: mask-top; }
#load-screen .mask-right { left: 50%; top: 0; right: 0; bottom: 0; animation-name: mask-right; }
#load-screen .mask-bottom { left: 0; top: 50%; right: 0; bottom: 0; animation-name: mask-bottom; }
#load-screen .mask-left { left: 0; top: 0; right: 50%; bottom: 0; animation-name: mask-left; }

@keyframes mask-top {
  0% { transform:translateY(0) translateZ(0); }
  100% { transform:translateY(-100%) translateZ(0); }
}
@keyframes mask-right {
  0% { transform:translateY(0) translateZ(0); }
  100% { transform:translateX(100%) translateZ(0); }
}
@keyframes mask-bottom {
  0% { transform:translateY(0) translateZ(0); }
  100% { transform:translateY(100%) translateZ(0); }
}
@keyframes mask-left {
  0% { transform:translateY(0) translateZ(0); }
  100% { transform:translateX(-100%) translateZ(0); }
}
</style>