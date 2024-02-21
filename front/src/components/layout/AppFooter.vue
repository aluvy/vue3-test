<template>
  <footer id="footer" v-if="isFooter">
    <div class="footer-inner">
      <div class="footer-info">
        <strong>The Fifty One</strong>
        <p>Bongeunsa-ro 18-gil 58, Gangnam-gu, Seoul, Republic of Korea</p>
      </div>
      
      <SnsLink site="footer"></SnsLink>
      
      <div class="footer-copy">&copy; the Fiftyone Corp.</div>
    </div>
  </footer>
  <ScrollTop></ScrollTop>
</template>

<script>
import { mapGetters } from 'vuex';
import ScrollTop from '@/components/common/ScrollTop.vue'
import SnsLink from '@/components/common/SnsLink.vue'

export default {
  name: 'AppFooter',
  components: {
    SnsLink,
    ScrollTop
  },
  computed: {
    ...mapGetters(['isFooter']),
  },
}
</script>