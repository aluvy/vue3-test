<template>
  <div class="sns-wrap" :class="site">
    <ul>
      <li v-for="item in items" :key="item">
        <a :href="item.href" target="blank" title="새 창 열림">
          <i :class="item.ico"></i>
          <span class="blind">{{ item.value }}</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    site: String,
  },
  data() {
    return {
      items: [
        { value: 'naver blog', href: 'https://blog.naver.com/the_51', ico: 'fa fa-facebook', },
        { value: 'youtube', href: 'https://www.youtube.com/channel/UCWD7HJBP5pbpu_NHeb6tBEw', ico: 'fa fa-youtube-play', },
        { value: 'instagram', href: 'https://www.instagram.com/t51_official/', ico: 'fa fa-instagram', },
      ]
    }
  },
}
</script>

<style scoped>
/* aside */
.sns-wrap.aside { position: fixed; right: 2.8rem; bottom: 2.8rem; }
.sns-wrap.aside ul { display: flex; align-items: center; }
.sns-wrap.aside li + li { margin-left: 1.6rem; }
.sns-wrap.aside li a { display: flex; align-items: center; justify-content: center; width: 3.2rem; height: 3.2rem; color: #fff; opacity: .7; transition: opacity .3s; }
.sns-wrap.aside li a:hover { opacity: 1; }
.sns-wrap.aside li { animation: scale .3s; animation-delay: 1s; animation-fill-mode: backwards; }
.sns-wrap.aside li:nth-child(1) { animation-delay: 0.79s; }
.sns-wrap.aside li:nth-child(2) { animation-delay: 0.83s; }
.sns-wrap.aside li:nth-child(3) { animation-delay: 0.87s; }

/* footer */
.sns-wrap.footer { padding: 8.5rem 0 0; }
.sns-wrap.footer ul { display: flex; align-items: center; justify-content: center; }
.sns-wrap.footer ul li + li { margin-left: 2rem; }
.sns-wrap.footer ul li a { display:flex; align-items: center; justify-content: center; width: 5rem; height: 5rem; border-radius: 5rem; border: 2px solid rgba(255,255,255, .1); font-size: 1.7rem; color: rgba(255,255,255, .4); transition: all .3s; }
.sns-wrap.footer ul li a:hover { border-color: rgba(255,255,255, 1); color: rgba(255,255,255, 1); }

@keyframes scale {
  0% { transform: scale(0) }
  100% { transform: scale(1) }
}
</style>