<template>
  <div id="scroll-top">
    <button type="button" title="to top" @click="scrollTop">
      <span>
        <i class="fa fa-angle-up"></i><i class="fa fa-angle-up"></i>
      </span>
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isRun: false
    }
  },
  methods: {
    scrollTop() {
      if(this.isRun) return;
      if(window.scrollY === 0) return;

      this.isRun = true;
      this.intervalId = setInterval(() => {
        if (window.scrollY === 0) {
          this.isRun = false;
          clearInterval(this.intervalId);
        }
        window.scroll(0, window.scrollY - 50);
      }, 20);
    }
  }
}
</script>

<style scoped>
#scroll-top { position: fixed; right: 2rem; bottom: 2rem; opacity: 1; transition: all .3s cubic-bezier(0.86, 0, 0.07, 1) .3s; z-index: 10; }

button { position: relative; display: block; width: 5rem; height: 5rem; border-radius: 5rem; background-color:rgba(0,0,0, 0.25); overflow: hidden; }
button::before { position: absolute; left: 0; top: 0; content: ''; display: block; width: 100%; height: 100%; border-radius: 100%; background: #ff7061; transform: scale(0); transition: transform .3s cubic-bezier(.55,0,.1,1); }

button span { position: absolute; left: 0; top: 0; display: block; transition: all .2s ease; z-index: 2; }
button i { display: flex; align-items: center; justify-content: center; width: 5rem; height: 5rem; color: #fff; }

button:hover { top: -100%; }
button:hover::before { transform: scale(1); }

.OpenAside #scroll-top { bottom: -2rem; opacity: 0; }
html:not(.scroll) #scroll-top { bottom: -2rem; opacity: 0; }
</style>