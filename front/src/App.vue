<template>
  <app-header :asideOpen="asideOpen" @toggleAside="asideOpen = !asideOpen"></app-header>

  <div id="container" :class="{ blur: asideOpen }">
    <div id="content">
      <router-view v-slot="{ Component, route }">
        <transition name="pageChange" mode="out-in" appear>
          <component :is="Component" :key="route.path" />
        </transition>
      </router-view>
    </div>
  </div>

  <app-footer></app-footer>
</template>

<script>
import AppHeader from '@/components/layout/AppHeader.vue'
import AppFooter from '@/components/layout/AppFooter.vue'

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter,
  },
  data() {
    return {
      asideOpen: false,
    }
  },
  methods: {
    setVh() {
			document.documentElement.style.setProperty('--vh', `${window.innerHeight}px`);
		},
  },
  created() {
		window.addEventListener('resize', this.setVh);
		this.setVh();
	},
  unmounted() {
		window.removeEventListener('resize', this.setVh);
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