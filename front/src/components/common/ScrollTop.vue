<template>
  <transition name="slideup">
    <div id="scroll-top" v-if="isScrolled || (isScrolled && !isOpenAside) ">
      <button type="button" title="to top" @click="scrollTop">
        <span>
          <i class="fa fa-angle-up"></i><i class="fa fa-angle-up"></i>
        </span>
      </button>
    </div>
  </transition>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      isRun: false
    }
  },
  computed: {
    ...mapGetters(['isOpenAside', 'isScrolled']),
  },
  methods: {
    scrollTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    },
    // scrollTop() {
    //   if(this.isRun) return;
    //   if(window.scrollY === 0) return;

    //   const speed = window.scrollY * 0.05;

    //   this.isRun = true;
    //   this.intervalId = setInterval(() => {
    //     if (window.scrollY === 0) {
    //       this.isRun = false;
    //       clearInterval(this.intervalId);
    //     }
    //     window.scroll(0, window.scrollY - speed);
    //   }, 20);
    // }
  }
}
</script>

<style scoped>
#scroll-top { position: fixed; right: 2rem; bottom: 2rem; z-index: 10; }
#scroll-top button { position: relative; display: block; width: 5rem; height: 5rem; border-radius: 5rem; background-color:rgba(0,0,0, 0.25); overflow: hidden; }
#scroll-top button::before { position: absolute; left: 0; top: 0; content: ''; display: block; width: 100%; height: 100%; border-radius: 100%; background: #ff7061; transform: scale(0); transition: transform .3s var(--ease-InOutExpo); }
#scroll-top button span { position: absolute; left: 0; top: 0; display: block; transition: all .2s var(--ease-InOutExpo); z-index: 2; }
#scroll-top button i { display: flex; align-items: center; justify-content: center; width: 5rem; height: 5rem; color: #fff; }
#scroll-top button:hover span { top: -100%; }
#scroll-top button:hover::before { transform: scale(1); }


.slideup-enter-active,
.slideup-leave-active { animation: fade-in-slide-up-50 .3s; animation-timing-function: var(--ease-InOutExpo); }
.slideup-enter-active { animation-fill-mode: backwards; }
.slideup-leave-active { animation-fill-mode: forwards; animation-direction: reverse; }
</style>