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