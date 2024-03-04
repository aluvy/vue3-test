<template>
  
  <AppHeader></AppHeader>
  
  <div id="container">
    <router-view v-slot="{ Component, route }">
      <transition name="pageChange" mode="out-in" appear>
        <component :is="Component" :key="route.path" />
      </transition>
    </router-view>
  </div>

  <AppFooter></AppFooter>
  <LoadScreen></LoadScreen>
</template>

<script>
// import store from '@/store/';
import { mapGetters } from 'vuex'

import AppHeader from '@/components/layout/AppHeader.vue'
import AppFooter from '@/components/layout/AppFooter.vue'
import LoadScreen from '@/components/common/LoadScreen.vue'

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter,
    LoadScreen
  },
  watch: {
    isOpenAside(state) {
      state
        ? document.documentElement.classList.add('OpenAside')
        : document.documentElement.classList.remove('OpenAside');
    },
    isNoScroll(state) {
      state
        ? document.documentElement.classList.add('no-scroll')
        : document.documentElement.classList.remove('no-scroll');
    },
  },
  computed: {
    ...mapGetters(['isOpenAside', 'isNoScroll']),
  },
  methods: {
    setVh() {
			document.documentElement.style.setProperty('--vh', `${window.innerHeight}px`);
		},
    isScroll() {
      if (window.scrollY > 10) {
        document.documentElement.classList.add('scrolled');
        this.$store.commit('setScrolled', true);
      } else {
        document.documentElement.classList.remove('scrolled');
        this.$store.commit('setScrolled', false);
      }
    },
  },
  created() {
		window.addEventListener('resize', this.setVh);
    window.addEventListener('scroll', this.isScroll);
		this.setVh();
    this.isScroll();

    window.addEventListener('beforeunload', () => {
      document.querySelector('#app').classList.add('loading');  // page refresh
    });
	},
  unmounted() {
		window.removeEventListener('resize', this.setVh);
    window.removeEventListener('scroll', this.isScroll);
	},
}
</script>

<style scoped>
/* page timer */
.pageChange-leave-active { transition: all .5s; }
</style>