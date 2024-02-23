<template>
  <header id="header" :class="{ white: theme==='white', black: theme==='black' }" ref="header" v-if="isHeader">
    <div class="header-inner">
      <h1 class="header-logo">
        <router-link to="/main"><img :src="logo" alt="The Fifty One"></router-link>
      </h1>
      <button type="button" class="header-menu" @click="setOpenAside" title="menu"><span></span></button>
    </div>

    <AsideMenu></AsideMenu>
  </header>
</template>

<script>
import { mapGetters } from 'vuex';
import AsideMenu from '@/components/common/AsideMenu.vue'

import logoW from '@/assets/images/common/header-logo-w.png'
import logoB from '@/assets/images/common/header-logo-b.png'

export default {
  name: 'AppHeader',
  components: {
    AsideMenu
  },
  data() {
    return {
      logoW,
      logoB,
      theme: 'white'
    }
  },
  computed: {
    ...mapGetters(['isHeader']),
    logo() {
      return (this.theme==='white') ? logoW : logoB;
    }
  },
  methods: {
    setOpenAside() {
      const isOpenAside = this.$store.getters.isOpenAside;
      this.$store.commit('setOpenAside', !isOpenAside);
    },
  }
}
</script>