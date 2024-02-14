<template>
  <footer id="footer">
    <div class="footer-inner">
      <div class="footer-info">
        <strong>The Fifty One</strong>
        <p>Bongeunsa-ro 18-gil 58, Gangnam-gu, Seoul, Republic of Korea</p>
      </div>
      
      <SnsLink site="footer"></SnsLink>
      
      <!-- <div class="footer-sns">
        <ul>
          <li><a href="https://blog.naver.com/the_51" target="blank" title="새 창 열림"><i class="fa fa-facebook"></i></a></li>
          <li><a href="https://www.youtube.com/channel/UCWD7HJBP5pbpu_NHeb6tBEw" target="blank" title="새 창 열림"><i class="fa fa-youtube-play"></i></a></li>
          <li><a href="https://www.instagram.com/t51_official/" target="blank" title="새 창 열림"><i class="fa fa-instagram"></i></a></li>
        </ul>
      </div> -->
      <div class="footer-copy">&copy; the Fiftyone Corp.</div>
    </div>
  </footer>
</template>

<script>
import SnsLink from '@/components/common/SnsLink.vue'

export default {
  name: 'AppFooter',
  components: {
    SnsLink
  },
}
</script>

<style scoped>
#footer { position: fixed; left: 0; bottom: 0; right: 0; height: var(--footer-height, 38rem); background: url(@/assets/images/footer-bg.jpeg) center #191919; background-size: cover; z-index: 0; }
#footer::after { position: absolute; left:0; top: 0; right: 0; bottom: 0; content:''; background: #1c1c1c; opacity: .8; }

.footer-inner { position: relative; padding: 6.6rem 0 0; text-align: center; color: #fff; z-index: 2; }
.footer-info { font-size: 1.6rem; }
.footer-info strong { display: block; font-size: 1.6rem; font-weight: 600; }
.footer-info p { margin-top: 1rem; font-weight: 300; }
.footer-copy { font-size: 1.2rem; color: #878787; padding: 2.5rem 0 0; }
</style>