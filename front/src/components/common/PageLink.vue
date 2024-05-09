<template>
  <ul class="pagelink" v-if="Links.length > 0">
    <li v-for="link in Links" :key="link" :style="`background-image:url(${link.bg})`">
      <router-link :to="link.url" class="gsap-item">{{ link.title }}</router-link>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    Links: { type: Array, default(){ return [] } },
  }
}
</script>

<style scoped>
.pagelink { display: flex; align-items: center; justify-content: space-between; }
.pagelink li { flex: 1 1 auto; position: relative; background-position: center; background-size: cover; background-repeat: no-repeat; }
.pagelink li::after { position: absolute; inset: 0; content:''; opacity: 0; transition: all .3s; background: rgba(0,0,0, 0.5); }
.pagelink li a { position: relative; height: 23rem; display: flex; align-items: center; justify-content: center; font-size: 2.8rem; color: #fff; font-weight: 700; z-index: 2; }
.pagelink li:hover::after { opacity: 1; }
.pagelink li a.onEnter { animation: fade-in-slide-up-20 .5s; }

@media only screen and (max-width: 768px) {
  .pagelink { display: block; }
}
</style>