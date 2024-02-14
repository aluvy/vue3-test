<template>
  <div>
    <div class="main-slide"></div>
    <div class="slide-controller">
      <button type="button"><i class="fa fa-angle-left"></i><span class="blind">prev</span></button>
      <button type="button"><i class="fa fa-angle-right"></i><span class="blind">next</span></button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visuals: [
        { link: '', img: '', }
      ],
    }
  },
}
</script>

<style scoped>
.main-slide { position: absolute; left: 0; top: 0; right: 0; bottom: 0; background:url(@/assets/images/main-visual-culture.jpg); background-size: cover; }

.slide-controller { position: fixed; left: 9rem; bottom: 5rem; display: flex; align-items: center; }
.slide-controller button { position: relative; width: 4.4rem; height: 4.4rem; color: #fff; border-radius: 100%; border: 1px solid rgba(255,255,255, 0.5); }
.slide-controller button + button { margin-left: 1.4rem; }
.slide-controller button::after { position: absolute; left: 50%; top: 50%; content:''; display: block; width: 1.4rem; height: 1px; background: #fff; transform: scaleX(0) translateX(-50%); transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1); }
.slide-controller button:hover::after { transform: scaleX(1) translateX(-50%); }
</style>