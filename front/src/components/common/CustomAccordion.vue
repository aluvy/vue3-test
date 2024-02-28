<template>
  <div class="acco-item">
    <div class="part-ttl">
        <slot name="title"></slot>
    </div>
    <div class="acco-cont" ref="content" :style="{ height: height }">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    state: Boolean,
  },
  data() {
    return {
      height: 0,
    }
  },
  watch: {
    state() {
      const scrollHeight = this.$refs.content.scrollHeight;
      this.height = ( this.state ) ? `${scrollHeight}px` : `0px`;
    }
  },
}
</script>

<style scoped>
.acco-cont { overflow: hidden; transition: height .5s; transition-timing-function: var(--ease-InOutExpo); }
</style>