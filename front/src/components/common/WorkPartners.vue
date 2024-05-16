<template>
  <ul class="work-partner">
    <li v-for="partner in partners" :key="partner">
      <div class="partner-logo">
        <img :src="partner.logoImage" alt="">
      </div>
      <p>{{ partner.title }}</p>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    partners: { type: Array, default(){ return [] } },
  },
}
</script>

<style scope>
.work-partner { display: flex; align-items: flex-end; justify-content: space-evenly; gap: 2rem; margin-top: 8rem; }
.work-partner li { flex: 1 1 33.333%; max-width: 30rem; text-align: center; }
.work-partner li .partner-logo { height: 8rem; }
.work-partner li .partner-logo img { width: 100%; height: 100%; max-width: 20rem; object-fit: contain; }
.work-partner li p { font-weight: 700; margin-top: 2.6rem; }

@media only screen and (max-width: 1280px) {
  .work-partner { justify-content: center; }
}
@media only screen and (max-width: 1024px) {
  .work-partner li { max-width: 25rem; }
  .work-partner li .partner-logo { height: 6rem; }
  .work-partner li .partner-logo img { max-width: 16rem; }
}
@media only screen and (max-width: 768px) {
  .work-partner { display: block; }
  .work-partner li { max-width: initial; }
  .work-partner li + li { margin-top: 8rem; }
  .work-partner li p { margin-top: 1.6rem; }
}
</style>./WorkList.vue