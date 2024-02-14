<template>
  <AppHeader></AppHeader>
  
  <div id="container">
    <div id="content">
      <router-view v-slot="{ Component, route }">
        <transition name="pageChange" mode="out-in" appear>
          <component :is="Component" :key="route.path" />
        </transition>
      </router-view>
    </div>
  </div>

  <AppFooter></AppFooter>
  <ScrollTop></ScrollTop>
</template>

<script>
import { mapGetters } from 'vuex'
import AppHeader from '@/components/layout/AppHeader.vue'
import AppFooter from '@/components/layout/AppFooter.vue'
import ScrollTop from '@/components/common/ScrollTop.vue'


export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter,
    ScrollTop
  },
  watch: {
    isOpenAside(state) {
      state
        ? document.documentElement.classList.add('OpenAside')
        : document.documentElement.classList.remove('OpenAside');
    }
  },
  computed: {
    ...mapGetters(['isOpenAside']),
  },
  methods: {
    setVh() {
			document.documentElement.style.setProperty('--vh', `${window.innerHeight}px`);
		},
    isScroll() {
      (window.scrollY > 10)
        ? document.documentElement.classList.add('scroll')
        : document.documentElement.classList.remove('scroll');
    }
  },
  created() {
		window.addEventListener('resize', this.setVh);
    window.addEventListener('scroll', this.isScroll);
		this.setVh();
    this.isScroll();
	},
  unmounted() {
		window.removeEventListener('resize', this.setVh);
    window.removeEventListener('scroll', this.isScroll);
	},
}
</script>

<style scoped>
.pageChange-enter-active,
.pageChange-leave-active { animation: pageChange .2s; }
.pageChange-enter-active { animation-fill-mode: backwards; }
.pageChange-leave-active { animation-direction: reverse; }

@keyframes pageChange {
	0% { opacity: 0; }
	100% { opacity: 1; }
}
</style>