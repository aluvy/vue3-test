<template>
  <header id="header">
    <div class="header-inner">
      <h1 class="header-logo">
        <router-link to="/main"><img src="@/assets/images/header-logo.png" alt="The Fifty One"></router-link>
      </h1>
      <button type="button" class="header-menu" @click="setOpenAside" title="menu"><span></span></button>
    </div>

    <AsideMenu></AsideMenu>
  </header>
</template>

<script>
import AsideMenu from '@/components/common/AsideMenu.vue'

export default {
  name: 'AppHeader',
  components: {
    AsideMenu
  },
  methods: {
    setOpenAside() {
      const isOpenAside = this.$store.getters.isOpenAside;
      this.$store.commit('setOpenAside', !isOpenAside);
    }
  }
}
</script>

<style scoped>
#header { position: fixed; left: 0; top: 0; right: 0; padding-top: 3rem; z-index: 999; }
.header-inner { position: relative; max-width: var(--max-width); padding: var(--inner-pad); margin: 0 auto; display: flex; align-items: center; justify-content: space-between; z-index: 9; }
.header-logo a { display: block; }
.header-logo img { display: block; height: 4.4rem; margin-right: auto; }
.header-menu { position: relative; display: flex; align-items: center; justify-content: center; width: 4.2rem; height: 4.2rem; }
.header-menu span { position: relative; }
.header-menu span,
.header-menu span::before,
.header-menu span::after { display: block; width: 2.5rem; height: .3rem; background: #fff; border-radius: .3rem; transition: all .3s; }
.header-menu span::before,
.header-menu span::after { content: ''; position: absolute; }
.header-menu span::before { top: -9px; }
.header-menu span::after { bottom: -9px; }
/* openAside */
.OpenAside .header-menu span { background: transparent; }
.OpenAside .header-menu span::before { transform: rotate(45deg) translate(7px, 6px) scale(.771); }
.OpenAside .header-menu span::after { transform: rotate(-45deg) translate(7px, -6px) scale(.771); }
</style>