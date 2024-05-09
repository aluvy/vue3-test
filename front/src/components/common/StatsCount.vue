<template>
  <ul class="stats-cont" v-if="stats.length > 0">
    <li class="item" v-for="stat in stats" :key="stat">
      <strong class="count" :data-count="stat.count">11</strong>
      <span>{{ stat.title }}</span>
      <p>{{ stat.desc }}</p>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    stats: { type: Array, default(){ return [] } },
  }
}
</script>

<style scoped>
.stats-cont { margin-top: 6rem; display: flex; align-items: flex-start; justify-content: space-around; }
.stats-cont li { flex: 0 1 20%; text-align: center; }
.stats-cont li strong { display: block; font-size: 9rem; color: #6d6d6d; line-height: 1; }
.stats-cont li span { display: block; font-weight: 500; font-size: 1.8rem; color: #6d6d6d; margin-top: 4rem; }
.stats-cont li p { font-size: 1.6rem; color: #000; font-weight: 500; word-break: keep-all; line-height: 1.8; margin-top: 3rem; }

@media only screen and (max-width: 1024px) {
  .stats-cont li { flex: 0 1 30%; }  
  .stats-cont li span { margin-top: 3rem; }
  .stats-cont li p { margin-top: 2rem; }
}
@media only screen and (max-width: 768px) {
  .stats-cont ul { display: block; }
  .stats-cont ul li + li { margin-top: 7rem; }
  .stats-cont li span { margin-top: 2rem; }
  .stats-cont li p { margin-top: 0.4rem; }
}
@media only screen and (max-width: 425px) {
  .stats-cont li strong { font-size: 6rem; }
}
</style>