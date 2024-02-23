<template>
  <header id="header" v-if="isHeader">
    <div class="header-inner">
      <h1 class="header-logo">
        <router-link to="/main"><span class="blind">The Fifty One</span></router-link>
      </h1>
      <button type="button" class="header-menu" @click="setOpenAside" title="menu"><span></span></button>
    </div>

    <AsideMenu></AsideMenu>
  </header>
</template>

<script>
import { mapGetters } from 'vuex';
import AsideMenu from '@/components/common/AsideMenu.vue'

export default {
  name: 'AppHeader',
  components: {
    AsideMenu
  },
  computed: {
    ...mapGetters(['isHeader']),
  },
  methods: {
    setOpenAside() {
      const isOpenAside = this.$store.getters.isOpenAside;
      this.$store.commit('setOpenAside', !isOpenAside);
    },
  }
}
</script>