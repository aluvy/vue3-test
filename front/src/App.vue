<template>
  
  <Teleport to="#app-header"><AppHeader></AppHeader></Teleport>
  
  <div id="container">
    <router-view v-slot="{ Component, route }">
      <transition name="pageChange" mode="out-in" appear>
        <component :is="Component" :key="route.path" />
      </transition>
    </router-view>
  </div>

  <Teleport to="#app-footer"><AppFooter></AppFooter></Teleport>
  <Teleport to="body"><LoadScreen></LoadScreen></Teleport>
  <Teleport to="body"><ScrollTop></ScrollTop></Teleport>
</template>

<script>
import { mapGetters } from 'vuex'
import { scrollbar } from '@/utils/gsap.js'

import front from '@/utils/front.js'

import AppHeader from '@/components/layout/AppHeader.vue'
import AppFooter from '@/components/layout/AppFooter.vue'
import ScrollTop from '@/components/common/ScrollTop.vue'
import LoadScreen from '@/components/common/LoadScreen.vue'

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter,
    ScrollTop,
    LoadScreen
  },
  watch: {
    isOpenAside(state) { front.isOpenAside(state) },
    isNoScroll(state) { front.isNoScroll(state) },
  },
  computed: {
    ...mapGetters(['isOpenAside', 'isNoScroll']),
  },
  created() {
    // console.log(process.env);
    
    front.setVh();
    front.isScroll();

    window.addEventListener('resize', front.setVh);
    // window.addEventListener('scroll', front.isScroll);
    // scroll event
    scrollbar.addListener(s => {
      front.isScroll(s);
      // console.log(s.offset.y); // returns “scrollTop” equivalent
    });

    window.addEventListener('beforeunload', () => {
      document.querySelector('#app').classList.add('loading');  // page refresh
    });
	},
  unmounted() {
		window.removeEventListener('resize', front.setVh);
    // window.removeEventListener('scroll', front.isScroll);
    scrollbar.removeListener( s => {
      front.isScroll(s);
    })
	},
}
</script>

<style scoped>
/* page timer */
.pageChange-leave-active { transition: all .5s; }
</style>