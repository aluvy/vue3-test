<template>
  <footer id="footer">
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
import ScrollTop from '@/components/common/ScrollTop.vue'
import SnsLink from '@/components/common/SnsLink.vue'

export default {
  name: 'AppFooter',
  components: {
    SnsLink,
    ScrollTop
  },
  // watch: {
  //   $route(to, from) {
  //     (to.path === '/main')
  //       ? this.show = false
  //       : this.show = true;
  //   },
  // },
  // data() {
  //   return {
  //     show: true
  //   }
  // },
}
</script>

<style scoped>
#footer { position: fixed; left: 0; bottom: 0; right: 0; height: var(--footer-height, 38rem); background: url(@/assets/images/footer-bg.jpeg) center #191919; background-size: cover; z-index: 0; }
#footer::after { position: absolute; left:0; top: 0; right: 0; bottom: 0; content:''; background: #1c1c1c; opacity: .8; }
.footer-inner { position: relative; text-align: center; color: #fff; max-width: var(--max-width); margin: 6.6rem auto 0; padding: var(--inner-pad); z-index: 2; }
.footer-info { font-size: 1.6rem; }
.footer-info strong { display: block; font-size: 1.6rem; font-weight: 600; }
.footer-info p { margin-top: 1rem; font-weight: 300; }
.footer-copy { font-size: 1.2rem; color: #878787; padding: 2.5rem 0 0; }
</style>