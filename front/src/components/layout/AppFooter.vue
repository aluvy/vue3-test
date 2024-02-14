<template>
  <footer id="footer">
    <div class="footer-inner">
      <div class="footer-info">
        <strong>The Fifty One</strong>
        <p>Bongeunsa-ro 18-gil 58, Gangnam-gu, Seoul, Republic of Korea</p>
      </div>
      <div class="footer-sns">
        <ul>
          <li><a href="https://blog.naver.com/the_51" target="blank" title="새 창 열림"><i class="fa fa-facebook"></i></a></li>
          <li><a href="https://www.youtube.com/channel/UCWD7HJBP5pbpu_NHeb6tBEw" target="blank" title="새 창 열림"><i class="fa fa-youtube-play"></i></a></li>
          <li><a href="https://www.instagram.com/t51_official/" target="blank" title="새 창 열림"><i class="fa fa-instagram"></i></a></li>
        </ul>
      </div>
      <div class="footer-copy">&copy; the Fiftyone Corp.</div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter',
}
</script>

<style scope>
#footer { position: fixed; left: 0; bottom: 0; right: 0; height: 38rem; background: url(@/assets/images/footer-bg.jpeg) center #191919; background-size: cover; z-index: 0; }
#footer::after { position: absolute; left:0; top: 0; right: 0; bottom: 0; content:''; background: #1c1c1c; opacity: .8; }

.footer-inner { position: relative; padding: 6.6rem 0 0; text-align: center; color: #fff; z-index: 2; }

.footer-info { font-size: 1.6rem; }
.footer-info strong { display: block; font-size: 1.6rem; font-weight: 600; }
.footer-info p { margin-top: 1rem; font-weight: 300; }

.footer-sns { padding: 8.5rem 0 0; }
.footer-sns ul { display: flex; align-items: center; justify-content: center; }
.footer-sns ul li + li { margin-left: 2rem; }
.footer-sns ul li a { display:flex; align-items: center; justify-content: center; width: 5rem; height: 5rem; border-radius: 5rem; border: 2px solid rgba(255,255,255, .1); font-size: 1.7rem; color: rgba(255,255,255, .4); transition: all .3s; }
.footer-sns ul li a:hover { border-color: rgba(255,255,255, 1); color: rgba(255,255,255, 1); }

.footer-copy { font-size: 1.2rem; color: #878787; padding: 2.5rem 0 0; }
</style>