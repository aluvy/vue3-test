<template>
  <ul class="linkpage-prevnext" v-if="Links.length > 0">
    <li class="item" v-for="link in Links" :key="link">
      
      <router-link :to="link.url">
        <div class="txt">
          <span>{{ link.stitle }}</span>
          <strong>{{ link.title }}</strong>
        </div>
        <div class="bg"><img :src="link.img" alt=""></div>
      </router-link>

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
.linkpage-prevnext { display: flex; align-items: center; justify-content: space-between; }
.linkpage-prevnext li { flex: 0 0 50%; }
.linkpage-prevnext li a { position: relative; display: block; }
.linkpage-prevnext li a::after { content: ''; display: block; padding-bottom: 32%; }
.linkpage-prevnext li a .txt { position: absolute; inset: 0; display: flex; flex-direction: column; align-items: center; justify-content: center; color: #fff; z-index: 2; }
.linkpage-prevnext li a span { display: block; font-size: 1.6rem; }
.linkpage-prevnext li a strong { display: block; font-size: 3rem; font-weight: 300; margin: 0.5rem 0 0; }
.linkpage-prevnext li a .bg { position: absolute; inset: 0; overflow: hidden; z-index: 1; }
.linkpage-prevnext li a .bg img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; transition: transform .4s; }

/* hover */
.linkpage-prevnext li a:hover .bg img,
.linkpage-prevnext li a:focus .bg img { transform: scale(1.1); }

@media only screen and (max-width: 1280px) {
  .linkpage-prevnext li a strong { font-size: 2.5rem; }
}
@media only screen and (max-width: 1024px) {
  .linkpage-prevnext li a::after { padding-bottom: 36%; }
}
@media only screen and (max-width: 768px) {
  .linkpage-prevnext { display: block; }
  .linkpage-prevnext li a::after { padding-bottom: 32%; }
  .linkpage-prevnext li a strong { font-size: 2.4rem; }
}
@media only screen and (max-width: 425px) {
  .linkpage-prevnext li a::after { padding-bottom: 40%; }
}
@media only screen and (max-width: 320px) {
  .linkpage-prevnext li a::after { padding-bottom: 50%; }
}
</style>