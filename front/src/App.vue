<template>
  <div id="app">
    <app-header></app-header>

    <router-view v-slot="{ Component, route }">
      <transition name="pageChange" mode="out-in" appear>
        <component :is="Component" :key="route.path" />
      </transition>
    </router-view>

    <app-footer></app-footer>
  </div>
</template>

<script>
import AppHeader from '@/components/layout/AppHeader.vue'
import AppFooter from '@/components/layout/AppFooter.vue'

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter,
  }
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