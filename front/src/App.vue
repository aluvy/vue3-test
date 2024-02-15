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
  <LoadScreen></LoadScreen>
</template>

<script>
import { mapGetters } from 'vuex'
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
.pageChange-leave-active { animation: fade-in .2s; }
.pageChange-enter-active { animation-fill-mode: backwards; }
.pageChange-leave-active { animation-direction: reverse; }

#container { position: relative; min-height: var(--vh); margin-bottom: var(--footer-height, 38rem); z-index: 10; transition: all .3s ease; }
.OpenAside #container { filter: blur(5px); margin-bottom: 0; }
</style>