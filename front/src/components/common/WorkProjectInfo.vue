<template>
  <ul class="project-info">
    <li v-for="info in infos" :key="info">
      <div class="ttl">{{ info.title }}</div>
      <div class="txt"><span v-for="item in info.txt" :key="item">{{ item }}</span></div>
    </li>
  </ul>
  <ul class="project-desc">
    <li>
      <div class="ttl">{{ project.title }}</div>
      <div class="txt">{{ project.desc }}</div>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    infos: { type: Array, default(){ return [] } },
    project: { type: Object, default(){ return {} } },
  },
}
</script>

<style scope>


@media only screen and (max-width: 1280px) {
  
}
@media only screen and (max-width: 1024px) {
  
}
@media only screen and (max-width: 768px) {
  
}
</style>./WorkList.vue