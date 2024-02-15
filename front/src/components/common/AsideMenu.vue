<template>
  <transition name="aside">
    <div class="aside-wrap" v-if="isOpenAside">
      <div class="aside-body">
        <div class="aside-inner">
          <nav class="aside-nav">
            <ul>
              <li><router-link to="/main">Home</router-link></li>
              <li><router-link to="/work">Work</router-link></li>
              <li>
                <router-link to="/about">About us</router-link>
                <ul class="aside-nav-sub right">
                  <li><router-link to="/about">Who we are</router-link></li>
                  <li><router-link to="/contact">Contact us</router-link></li>
                </ul>
              </li>
              <li>
                <router-link to="/culture">Culture</router-link>
                <ul class="aside-nav-sub left">
                  <li><router-link to="/culture">Hello! the fifty one</router-link></li>
                  <li><router-link to="/insight">Insight</router-link></li>
                </ul>
              </li>
              <li><router-link to="/recruit">Recruit</router-link></li>
            </ul>
          </nav>

          <SnsLink site="aside"></SnsLink>

          <div class="aside-copy">© 2019 the Fiftyone Corp.</div>
        </div>
      </div>
      <div class="aisde-dimmed"></div>
    </div>
  </transition>
</template>

<script>
import SnsLink from '@/components/common/SnsLink.vue'
import { mapGetters } from 'vuex';

export default {
  components: {
    SnsLink,
  },
  computed: {
    ...mapGetters(['isOpenAside']),
  },
}
</script>

<style scoped>
.aisde-dimmed { position: fixed; left: 0; top: 0; right: 0; bottom: 0; background: rgba(17,17,17, 0.9); }
.aside-body { position: fixed; left: 0; top: 0; right: 0; bottom: 0; display: flex; align-items: center; justify-content: center; color: #fff; z-index: 2; }
.aside-nav a { display: block; opacity: 0.7; transition: all .3s; }
.aside-nav a:hover { opacity: 1; }
.aside-nav > ul > li { position: relative; text-align: center; }
.aside-nav > ul > li > a { padding: 0 7rem; font-size: 4.8rem; font-weight: 700; line-height: 6rem; }

.aside-nav-sub > li { position: relative; }
.aside-nav-sub > li > a { padding: 0 2.4rem; font-size: 2rem; font-weight: 500; line-height: 3.6rem; }
.aside-nav-sub { position: absolute; top: 50%; transform: translateY(-50%); width: max-content; }
/* line */
.aside-nav-sub.right { position: absolute; left: 100%; text-align: left; transform: translateY(-45%); }
.aside-nav-sub.left { position: absolute; right: 100%; text-align: right; }
.aside-nav-sub::before,
.aside-nav-sub::after { position: absolute; content: ''; display: block; background: #fff; opacity: 0.2; }
.aside-nav-sub.right::before { left: -6rem; top: 50%; width: 6rem; height: 1px; }
.aside-nav-sub.right::after { left: 0; top: 50%; transform: translateY(-50%); width: 1px; height: calc(3.6rem - 1px); }
.aside-nav-sub.right > li::before { position: absolute; left: 0; top: 50%; transform: translateY(-50%); content:''; display: block; width: 1.2rem; height: 1px; background: #fff; opacity: 0.2; }
.aside-nav-sub.left::before { right: -6rem; top: 50%; width: 6rem; height: 1px; }
.aside-nav-sub.left::after { right: 0; top: 50%; transform: translateY(-50%); width: 1px; height: calc(3.6rem - 1px); }
.aside-nav-sub.left > li::before { position: absolute; right: 0; top: 50%; transform: translateY(-50%); content:''; display: block; width: 1.2rem; height: 1px; background: #fff; opacity: 0.2; }
.aside-wrap .router-link-active,
.aside-wrap .router-link-exact-active { color: #fff; opacity: 1; }
.aside-wrap .aside-copy { position: fixed; left: 2.8rem; bottom: 2.8rem; font-size: 1.2rem; color: rgba(255,255,255, 0.7); animation: fade-in .3s; animation-delay: 0.79s; animation-fill-mode: backwards; }
/* animation */
.aside-enter-active { animation: timer 0.98s; }
.aside-enter-active .aisde-dimmed { animation: slide-down 0.98s; animation-timing-function: var(--easing-1); }
.aside-enter-active .aside-body { animation: fade-in-slide-up .5s; animation-delay: .35s; animation-fill-mode: backwards; }
.aside-leave-active { animation: fade-out .3s; }
</style>